// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

require("colors")
const {SUBMETRIC_TYPE, PARAMETER, USE_AS} = require("./unpopularityMetric/constants")
const {recursivelyFindUnpopularityMetric} = require("./unpopularityMetric/automator/recursivelyFind")

const configs = [
    {
        [PARAMETER.K]: {center: 0.038, range: 0.1, count: 5},
        [PARAMETER.A]: {center: 1.994, range: 0.1, count: 5},
        [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
        [PARAMETER.Y]: {center: 0.455, range: 0.1, count: 5},
        [PARAMETER.W]: {center: -2.08, range: 0.1, count: 5},
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: {center: 0.577, range: 0.1, count: 5},
    },
]

console.log(`searching for the best unpopularity metric around ${JSON.stringify(configs)}`)
const best = recursivelyFindUnpopularityMetric(configs)

console.log("final best:", JSON.stringify(best))
