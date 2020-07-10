import {} from "../bestMetrics"
import {computeAntivotes} from "../antivotes/antivotes"
import {SUBMETRIC_TYPE, PARAMETER} from "../constants"
import {presentRatio} from "../../../utilities/comma/present/ratio"

const submetrics =
    [
        {
            [PARAMETER.K]: 0,
            [PARAMETER.A]: 1.994,
            [PARAMETER.A_IS_BASE]: true,
            [PARAMETER.Y]: 0.455,
            [PARAMETER.W]: -2.08,
        },
        {
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
            [PARAMETER.WEIGHT]: 0.577,
        },
    ]
const fiveRoughRatio = [11, 7]

const antivotes = computeAntivotes(fiveRoughRatio, submetrics, {logSubmetricAntivotes: true})

console.log(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}`)
