describe("related parameters", () => {
    // TODO: i think this may only be for soapifar??
    //  i think we actually want a test not that the total SoS is the same, but that each and every ratio is the same
    //  if you can figure out what the relationship is, then you should add a ban for these to the "check" file
    // it("for the soapfar submetric, w and v are related", () => {
    //     const submetricsOne = [
    //         {
    //             [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
    //             [Parameter.V]: -1,  // term constant (applied before applying exponent, for non-zero terms)
    //             [Parameter.W]: 1,   // prime constant (applied after applying exponent or base)
    //         }
    //     ]
    //     const submetricsTwo = [
    //         {
    //             [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
    //             [Parameter.V]: -2,  // if you subtract one more repetition from each non-zero term
    //             [Parameter.W]: 1,   // then you'd have to add
    //         }
    //     ]
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
