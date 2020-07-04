const {computeAntivotes} = require("../antivotes/antivotes")
const {SUBMETRIC_TYPE, PARAMETER, USE_AS} = require("../constants")
const {presentRatio} = require("../../../utilities/comma/present/ratio")

const submetricCombination = [
    {
        [PARAMETER.K]: 0,
        [PARAMETER.A]: 1.994,
        [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
        [PARAMETER.Y]: 0.455,
        [PARAMETER.W]: -2.08,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: 0.577,
    },
]
const fiveRoughRatio = [11, 7]

const antivotes = computeAntivotes(fiveRoughRatio, submetricCombination, {logSubmetricAntivotes: true})

console.log(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetricCombination)}\n${antivotes}`)
