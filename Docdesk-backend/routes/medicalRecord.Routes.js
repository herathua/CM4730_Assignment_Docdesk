const express = require("express");
const {
  createRecord,
  getAllRecordsOfPatient,
  getRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/medicalRecord.Controller.js");

const router = express.Router();

//post a new result
router.post("/create/", createRecord);
router.get("/getRecordsPatient/", getAllRecordsOfPatient);
router.get("/getRecord/", getRecord);
router.delete("/record/:recordID", deleteRecord);
router.put("/update/:recordID", updateRecord);

module.exports = router;
