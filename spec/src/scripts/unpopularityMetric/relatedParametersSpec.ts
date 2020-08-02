describe("related parameters", () => {
    // it("for the soapfar submetric, w and s are related", () => {
    //     const submetricsOne = [
    //         {
    //             [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
    //             [Parameter.S]: -1,  // prime exponent constant (applied before applying exponent, for non-zero terms)
    //             [Parameter.W]: 1,   // prime constant (applied after applying exponent or base)
    //         }
    //     ]
    //     const submetricsTwo = [
    //         {
    //             [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
    //             [Parameter.S]: -2,  // if you subtract one more repetition from each non-zero prime exponent
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
