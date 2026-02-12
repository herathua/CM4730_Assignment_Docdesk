const express = require("express");
const {
  getPatients,
  getPatient,
  addDocAccess,
  deletePatient,
  updatePatient,
  uploadProfileImage,
  getAccessDoctorList,
  removeDocAccess,
  upload,
} = require("../controllers/Patient.Controller");

const router = express.Router();

// Get all patients
router.get("/", getPatients);

// Get a patient
router.get("/:id", getPatient);

// Delete a patient
router.delete("/:id", deletePatient);

// update a patient
router.put("/:id", updatePatient);

// Give patient access to doctor
router.patch("/addDocAccess/:id", addDocAccess);

// Give patient access to doctor
router.patch("/removeDocAccess/:id", removeDocAccess);

router.get("/accessDoctorList/:id/", getAccessDoctorList);

// Upload profile image
router.post("/:id", upload.single("image"), uploadProfileImage);

module.exports = router;
