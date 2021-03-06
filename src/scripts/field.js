/*Define a variable in this module whose initial value is an empty array. 
This array will store all of the plants that are growing in the field. 
Do not export the array.*/

const fieldArray = []

/*In the module, define and export a function named addPlant*/
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)){
        fieldArray.push(seedObject[0])
        fieldArray.push(seedObject[1])
    } else {
        fieldArray.push(seedObject)
    }
    /*The addPlant function must accept a seed object as input. The function will add the seed to the field*/
}

/*Define and export a function named usePlants that returns a copy of the array of plants*/
export const usePlants = () => {
    return fieldArray.map(row => ({ ...row }))
}
