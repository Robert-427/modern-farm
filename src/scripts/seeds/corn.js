/*In each module define and export a function for creating a seed. 
Define the functions with the following syntax. 
If the plant is Asparagus, the function should be named createAsparagus. 
Same thing for all the others. Use arrow functions. Do not use the function keyword.

Each of these functions should return an object with the following properties. 
Look at the table below the instructions to see what the values for each object are.
type, height, output (except corn)
The one exception is corn. The createCorn function should return an array with two identical objects in it. 
Each with the proper keys and values.*/

export const createCorn = () => {
    const cornSeed = []
    const corn = { type: `Corn`, height: 180, output: 6 }
    cornSeed.push(corn)
    cornSeed.push(corn)
    return cornSeed
}