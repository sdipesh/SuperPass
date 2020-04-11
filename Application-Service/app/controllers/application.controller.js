const db = require("../models");
const Application = db.applications;

// Create and Save a new Applications
exports.create = (req, res) => {
  /*// Validate request
  if (!req.body.customer_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }*/

  // Create an Application
  const application = new Application({
    application_number: req.body.application_number,
    customer_name: req.body.customer_name,
    address:{
      unit: req.body.address.unit,
      street: req.body.address.street,
      city: req.body.address.city,
      province: req.body.address.province,
      country: req.body.address.country,
      postalcode: req.body.address.postalcode
    },
    status: req.body.status,
    adjudicator: req.body.adjudicator
  });

  // Save Application in the database
  application
    .save(application)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Application."
      });
    });
};

// Retrieve all Applications from the database.
exports.findAll = (req, res) => {
    const application_number = req.query.application_number;
    var condition = application_number ? { application_number: { $regex: new RegExp(application_number), $options: "i" } } : {};
  
    Application.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving applications."
        });
      });
};

// Find a single Application with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  Application.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Application with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Application with id=" + id });
    });  
};

// Update a Application by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Application.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new : true })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Application with id=${id}. Maybe Application was not found!`
            });
          } else res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Application with id=" + id
          });
        });
};

// Delete a Application with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Application.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Application with id=${id}. Maybe Application was not found!`
          });
        } else {
          res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Application with id=" + id
        });
      });
};

// Delete all Applications from the database.
exports.deleteAll = (req, res) => {
    Application.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Applications were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all applications."
      });
    });
};

// Find all Draft Applications
exports.findAllDraft = (req, res) => {
    Application.find({ status: "Draft" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving applications."
      });
    });
};

// Find all Pending Applications
exports.findAllPending = (req, res) => {
    Application.find({ status: "Pending" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving applications."
      });
    });
};

// Find all Approved Applications
exports.findAllApproved = (req, res) => {
    Application.find({ status: "Approved" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving applications."
      });
    });
};
