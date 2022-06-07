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
        //itterate through array of arrays
        for (const plant of row) {
            //itterate through array of plants
            if (plant === "Asparagus") {
                //invoke correct seed function for plant type
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if (plant === "Potato") {
                let potatoSeed = createPotato()
                addPlant(potatoSeed)
            } else if (plant === "Soybean") {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if (plant === "Sunflower") {
                let sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if (plant === "Wheat") {
                let wheatSeed = createWheat()
                addPlant(wheatSeed)
            } else if (plant === "Corn") {
                let cornSeed = createCorn()
                addPlant(cornSeed)
            }
        }
    }
}
