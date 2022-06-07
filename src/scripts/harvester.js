/*In this module, define and export a harvestPlants function.
The harvestPlants function must accept the plants array as input.*/

export const harvestPlants = (plantsUsed) => {
    const harvestedPlants = []
    //Iterate the array of growing plants. On each plant, get the value of the output property.
    for (const plant of plantsUsed) {
        //itterated loop
        const output = plant.type === "Corn" ? plant.output * .5 : plant.output
        //need to push object into array equal to value of current output
        for (let index = 1; index <= output; index++) {
            harvestedPlants.push(plant)
        }
    }

    /*Add that many of the plant objects to the array that the function returns. 
    For example, if the current plant is a peanut object with an output of 2
    Then the array that the function returns should have two identical objects added to it.
    the exception is corn. Half of your corn will be sold to cattle ranchers, 
    so only half of the output of each corn plant will be added to the array that this function returns.*/

    //The function will return an array of seed objects.
    return harvestedPlants
}