module.exports = app => {
    const months = require("../controllers/general.controller.js");
  
    var router = require("express").Router();
  
    // Create a new month
    router.post("/", months.createMonth);
  
    // Retrieve all months
    router.get("/", months.findAllMonths);
  
    app.use('/api/months', router);
};