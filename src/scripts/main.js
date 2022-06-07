console.log("Welcome to the main module")

import { Catalog } from "./catalog.js"
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)

const plantsUsed = usePlants()
console.log(plantsUsed)

const harvested = harvestPlants(plantsUsed)
console.log(harvested)

const parentHTMLElement = document.querySelector("#plant_list")

parentHTMLElement.innerHTML = Catalog(harvested)