console.log("Welcome to the main module")

import { addPlant, usePlants } from "./field.js"
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
import { plantSeeds } from "./tractor.js"
const wheatSeed = createWheat()
console.log(wheatSeed)

const seedObject = {}
addPlant(yearlyPlan)
const plantsUsed = usePlants()
console.log(plantsUsed)

const plantedSeeds = plantSeeds(plantsUsed)
console.log(plantedSeeds)