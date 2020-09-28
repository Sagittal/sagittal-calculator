import { equalIrrationalRatios, Ratio } from "../../../../../../src/general/math/num/ratio"

describe("equalIrrationalRatios", (): void => {
    it("returns true when the ratios are equal when reduced to lowest terms, even if they are irrational", (): void => {
        const ratioA = [11.1, 7.2] as Ratio
        const ratioB = [22.2, 14.4] as Ratio

        const actual = equalIrrationalRatios(ratioA, ratioB)

        expect(actual).toBeTruthy()
    })
})
