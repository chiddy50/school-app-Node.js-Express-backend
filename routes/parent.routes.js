module.exports = app => {
    const parent = require("../controllers/parent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Parent
    router.post("/", parent.create);
  
    // Retrieve all Parents
    router.get("/", parent.findAll);
  
    // Retrieve a single Parent with id
    router.get("/:id", parent.findOne);
  
    // Update a Parent with id
    router.put("/:id", parent.update);
  
    // Delete a Parent with id
    router.delete("/:id", parent.delete);
  
    // Delete all Parents
    router.delete("/", parent.deleteAll);
  
    app.use('/api/parents', router);
};