const { Router } = require("express");
const { drinksControllers } = require("../controllers/drinks.controllers");

const router = Router();

router.get("/drinks", drinksControllers.getDrink);
router.get("/drinks/id:", drinksControllers.getDrinkInStock);
router.get("/drinks/:id", drinksControllers.getDrinkById);
router.post("/drinks", drinksControllers.postDrinks);
router.delete("/drinks/:id", drinksControllers.deleteDrinksById);
router.patch("/drinks/:id", drinksControllers.updateDrinksById);


module.exports = router;
