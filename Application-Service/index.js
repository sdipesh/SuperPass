const Joi = require("@hapi/joi");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

var applications = [
  { id: 1, name: "Application 1", status: "Draft", adjudicator: "Simon" },
  { id: 2, name: "Application 2", status: "Pending", adjudicator: "Ana" },
  { id: 3, name: "Application 3", status: "Approved", adjudicator: "David" },
  { id: 4, name: "Application 4", status: "Draft", adjudicator: "Simon" },
  { id: 5, name: "Application 5", status: "Pending", adjudicator: "Ana" },
  { id: 6, name: "Application 6", status: "Pending", adjudicator: "Simon" },
  { id: 7, name: "Application 7", status: "Draft", adjudicator: "David" },
  { id: 8, name: "Application 8", status: "Approved", adjudicator: "Simon" },
  { id: 9, name: "Application 9", status: "Approved", adjudicator: "John" },
  { id: 10, name: "Application 10", status: "Pending", adjudicator: "John" }
];

app.get("/api/applications", (req, res) => {
  res.send(applications);
});

app.get("/api/applications/:id", (req, res) => {
  const application = applications.find(a => a.id === parseInt(req.params.id));
  if (!application)
    return res
      .status(404)
      .send("The Application with the given ID was not found");
  res.send(application);
});

app.post("/api/applications", (req, res) => {
  const result = validateApplication(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const application = {
    id: applications.length + 1,
    name: req.body.name,
    status: req.body.status,
    adjudicator: req.body.adjudicator
  };
  applications.push(application);
  res.send(application);
});

app.put("/api/applications/:id", (req, res) => {
  const application = applications.find(a => a.id === parseInt(req.params.id));
  if (!application)
    return res
      .status(404)
      .send("The Application with the given ID was not found");

  const result = validateApplication(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  application.name = req.body.name;
  application.status = req.body.status;
  application.adjudicator = req.body.adjudicator;
  res.send(application);
});

app.delete("/api/applications/:id", (req, res) => {
  const application = applications.find(a => a.id === parseInt(req.params.id));
  if (!application)
    return res
      .status(404)
      .send("The Application with the given ID was not found");

  const index = applications.indexOf(application);
  applications.splice(index, 1);

  res.send(application);
});

function validateApplication(application) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
    status: Joi.string(),
    adjudicator: Joi.string()
  });

  return schema.validate(application);
}

app.listen(9000, () => console.log("Listening on port 9000..."));
