module.exports = app => {
    const applications = require("../controllers/application.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Application
    router.post("/", applications.create);
  
    // Retrieve all Applications
    router.get("/", applications.findAll);
  
    // Retrieve all draft Applications
    router.get("/drafts", applications.findAllDraft);

    // Retrieve all pending Applications
    router.get("/pending", applications.findAllPending);

    // Retrieve all approved Applications
    router.get("/approved", applications.findAllApproved);
  
    // Retrieve a single Application with id
    router.get("/:id", applications.findOne);
  
    // Update a Application with id
    router.put("/:id", applications.update);
  
    // Delete a Application with id
    router.delete("/:id", applications.delete);
  
    // Create a new Application
    router.delete("/", applications.deleteAll);
  
    app.use('/api/applications', router);
  };