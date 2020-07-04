const {combineSubmetricsPoints} = require("./combineSubmetricsPoints")
const {computeSubmetricPoints} = require("./submetricPoints")

// todo: yikes, what assumptions have been built into the code
//  that would prevent me from having two different soapfar entires? probably lots.
//  but what if i need to treat the num with one y and the den with a different y?
//  well, you should at least write a test somewhere that proves it is supported

const computeSubmetricCombinations = configs => {
    const submetricsPoints = configs.map(submetricConfigs => {
        return computeSubmetricPoints(submetricConfigs)
    })

    return combineSubmetricsPoints(submetricsPoints)
}

module.exports = {
    computeSubmetricCombinations,
}
