const { Router } = require("express");
const router = Router();

const {
    CreateProfileUser,
    getAllProfiles,
} = require("../controllers/CreateProfileUser");

router.post("/ProfileUser",CreateProfileUser);

router.get('/profiles', getAllProfiles)

module.exports = router