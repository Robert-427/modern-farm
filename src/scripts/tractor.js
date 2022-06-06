/*In this module, define and export a plantSeeds function*/
import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
const yearlyPlan = createPlan()

export const plantSeeds = (yearlyPlan) => {
    /*The function must accept the year's planting plan as input (i.e. it must define a parameter)
    The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 
    Figure out how to iterate both the parent array and the child arrays*/
    for (const row of yearlyPlan) {
        for (const plant of row) {
            if (plant.type === "Asparagus") {
                field.push(createAsparagus())
            } else if (plant.type === "Potato") {
                field.push(createPotato)
            } else if (plant.type === "Soybean") {
                field.push(createSoybean)
            } else if (plant.type === "Sunflower") {
                field.push(createSunflower)
            } else if (plant.type === "Wheat") {
                field.push(createWheat)
            } else if (plant.type === "Corn") {
                field.push(createCorn)
            }
        }
    }
}
