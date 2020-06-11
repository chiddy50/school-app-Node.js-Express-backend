module.exports = app => {
    const genders = require("../controllers/gender.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all genders
    router.get("/", genders.findAll);
  
    app.use('/api/gender', router);
};