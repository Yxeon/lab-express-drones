const { response } = require('express');
const express = require('express');
const droneModel = require('../models/Drone.model');
const Drone = require("../models/Drone.model")
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((response) => {
    console.log(response)
    res.render("../views/drones/list.hbs", {response}); 
  })
  .catch((err) => {
    next(err);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('../views/drones/create-form.hbs');
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  Drone.create({
    name: req.body.name,
    propellers: req.body.propeller,
    maxSpeed: req.body.speed
  })
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    res.redirect('drones/create')
  })
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((response) => {
    res.render("drones/update-form.hbs", response)
  })
  .catch((e) =>{
    console.log(e)
  })
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
  .then(() => {
    res.redirect("/drones")
  })
  .catch((e) => {
    console.log(e)
    res.redirect("drones/update-form.hbs")
  })
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((e) => {
    console.log(e)
  })
  // ... your code here
});

module.exports = router;
