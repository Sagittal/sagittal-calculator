import {computeAllCommasLessThanHalfApotome} from "../../../../../../src/scripts/jiPitch/semitinaOccams/bestZoneCommas"

describe("computeAllCommasLessThanHalfApotome", (): void => {
    it("finds the correct count of commas", (): void => {
        const actual = computeAllCommasLessThanHalfApotome()

        expect(actual.length).toBe(18280)
    })
})
