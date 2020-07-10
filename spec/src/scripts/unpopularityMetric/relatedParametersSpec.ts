import {computeAntivotes} from "../../../../src/scripts/unpopularityMetric/antivotes/antivotes"
import {COMMA_POPULARITIES} from "../../../../src/scripts/unpopularityMetric/sumOfSquares/popularities"
import {PARAMETER, SUBMETRIC_TYPE} from "../../../../src/scripts/unpopularityMetric/constants"

describe("related parameters", () => {
    // it("for the soapfar submetric, w and v are related", () => { // todo: i think this may only be for soapifar??
    //     // todo: i think we actually want a test not that SoS is the same, but that every ratio is the same
    //     const submetricsOne = [
    //         {
    //             [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
    //             [PARAMETER.V]: -1,  // term constant (applied before applying exponent, for non-zero terms)
    //             [PARAMETER.W]: 1,   // prime constant (applied after applying exponent or base)
    //         }
    //     ]
    //     const submetricsTwo = [
    //         {
    //             [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
    //             [PARAMETER.V]: -2,  // if you subtract one more repetition from each non-zero term
    //             [PARAMETER.W]: 1,   // then you'd have to add
    //         }
    //     ]
    //     // todo: if you can figure out what the relationship is, then you should add a ban for these to the "check" file
    //
    //     const antivotesOne = COMMA_POPULARITIES.map(realPopularity => {
    //         return computeAntivotes(realPopularity.fiveRoughRatio, submetricsOne)
    //     })
    //
    //     const antivotesTwo = COMMA_POPULARITIES.map(realPopularity => {
    //         return computeAntivotes(realPopularity.fiveRoughRatio, submetricsTwo)
    //     })
    //
    //     expect(antivotesOne).toEqual(antivotesTwo)
    // })
})
