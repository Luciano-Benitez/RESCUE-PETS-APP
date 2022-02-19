const { response } = require("express");
const { Op } = require("sequelize");
const {
  Pets,
  Age,
  Temperament,
  Vaccines,
  Species,
  PetStatus,
  Shelter,
  Cities,
} = require("../db");

exports.getPets = async (req, res = response) => {
  const filters = req.query || "";

  let where = [];

  Object.entries(filters).forEach(([key, value]) => {
    where.push({ [key]: value });
  });

  const query = {
    include: [Age, Temperament, Vaccines, Species, PetStatus, Shelter],
    where: where,
  };

  try {
    const petsAll = await Pets.findAll(query);

    petsAll.length
      ? res.status(200).send(petsAll)
      : res.status(200).send("Pets not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error connecting to the database",
    });
  }
};
