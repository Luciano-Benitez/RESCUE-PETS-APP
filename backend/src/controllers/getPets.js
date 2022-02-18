const { response } = require("express");
const {
  Pets,
  Age,
  Temperament,
  Vaccines,
  Species,
  PetStatus,
  Shelter,
} = require("../db");

exports.getPets = async (req, res = response) => {
  const searchPet = req.query || "";

  const query = {
    include: [Age, Temperament, Vaccines, Species, PetStatus, Shelter],
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