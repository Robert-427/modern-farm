

export const Catalog = (food) => {
    let HTMLstring = `<article class="plant_list">`
    for (const plant of food) {
        HTMLstring += `<section class="plant">${plant.type}</section>`
    }
    HTMLstring += `</article>`
    return HTMLstring
}
