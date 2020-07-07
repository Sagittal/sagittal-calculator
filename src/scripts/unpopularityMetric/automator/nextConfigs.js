const {computeDeepClone} = require("../../../utilities/deepClone")

const computeNextConfigs = (coordinate, dynamicParameters, configs) => {
    const nextConfigs = computeDeepClone(configs)

    coordinate.forEach((coordinateElement, index) => {
        const {submetricIndex, parameter, parameterPoints, unit} = dynamicParameters[index]

        const center = parameterPoints[coordinateElement]
        const range = unit * (2/3)
        const count = 2

        // todo: and also hey how is this insistence on count: 5 or count: 2 going to work w/r/t
        //  those numeric booleans and trinary "use as" parameters?
        //  my code currently will try to set it to some fractional number which won't even make sense
        //  and if it did the correct thing numerically, they're not even the same type of info,
        //  like there's no reason to believe that switching
        //  from use as base to use as coefficient will be remotely similar
        //  so I think, after all, we will have to include another bit of information
        //  about what type of parameter they are, whether they're continuous or an options type thing
        //  and then they can just take the options

        nextConfigs[submetricIndex][parameter] = { center, range, count }
    })

    return nextConfigs
}

module.exports = {
    computeNextConfigs,
}
