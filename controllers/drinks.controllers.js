const Drinks = require("../models/Drinks.models");

module.exports.drinksControllers = {
  getDrink: (req, res) => {
    Drinks.find()
      .select("_id coffeName price")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json("Something went wrong"));
  },
  getDrinkInStock: (req, res) => {
    Drinks.find({ available: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
  getDrinkById: (req, res) => {
    Drinks.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.json("Something went wrong"));
  },
  postDrinks: (req, res) => {
    Drinks.create({
      coffeName: req.body.coffeName,
      price: req.body.price,
      available: req.body.available,
      cofein: req.body.cofein,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then(() => {
        res.json("Напиток добавлен");
      })
      .catch((err) => res.json("Something went wrong"));
  },
  deleteDrinksById: (req, res) => {
  Drinks.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Напиток удален");
      })
      .catch((er) => res.json(er));
  },
  updateDrinksById: (req, res) => {
    Drinks.findByIdAndUpdate(req.params.id, {
      coffeName: req.body.coffeName,
      price: req.body.price,
      available: req.body.available,
      cofein: req.body.cofein,
      volume: req.body.volume,
      description: req.body.description,
    }).then(() => {
      res.json("Напиток изменен")
    })
    .catch((er) => res.json("er"));
  },
};
