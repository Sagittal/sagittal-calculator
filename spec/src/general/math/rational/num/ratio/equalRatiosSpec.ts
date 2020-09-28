import { Ratio } from "../../../../../../../src/general/math/num/ratio"
import { equalRatios } from "../../../../../../../src/general/math/rational/num/ratio"

describe("equalRatios", (): void => {
    it("returns true when the ratios are equal", (): void => {
        const ratioA = [11, 10] as Ratio
        const ratioB = [11, 10] as Ratio

        const actual = equalRatios(ratioA, ratioB)

        expect(actual).toBeTruthy()
    })

    it("returns false when the ratios are equal", (): void => {
        const ratioA = [11, 10] as Ratio
        const ratioB = [11, 9] as Ratio

        const actual = equalRatios(ratioA, ratioB)

        expect(actual).toBeFalsy()
    })

    it("returns true when the ratios are equal when reduced to lowest terms", (): void => {
        const ratioA = [11, 10] as Ratio
        const ratioB = [33, 30] as Ratio

        const actual = equalRatios(ratioA, ratioB)

        expect(actual).toBeTruthy()
    })

    it("returns true when the ratios are equal, even if they are irrational", (): void => {
        const ratioA = [11.1, 7.2] as Ratio
        const ratioB = [11.1, 7.2] as Ratio

        const actual = equalRatios(ratioA, ratioB)

        expect(actual).toBeTruthy()
    })

    it("returns true when the ratios are equal when reduced to lowest terms, even if they are irrational", (): void => {
        const ratioA = [11.1, 7.2] as Ratio
        const ratioB = [22.2, 14.4] as Ratio

        const actual = equalRatios(ratioA, ratioB)

        expect(actual).toBeTruthy()
    })
})
