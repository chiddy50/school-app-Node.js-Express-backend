module.exports = app => {
    const terms = require("../controllers/general.controller.js");
  
    var router = require("express").Router();
  
    // Create a new term
    router.post("/", terms.createTerm);
  
    // Retrieve all terms
    router.get("/", terms.findAllTerms);
  
    app.use('/api/terms', router);
};