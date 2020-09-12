import { FIVE_ROUGHNESS, Ratio, Roughness } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/monzo"
import { computeIsRoughJiPitch } from "../../../../src/general/music"

describe("computeIsRoughJiPitch", () => {
    describe("by monzo", () => {
        it("returns true if the pitch is rough to the requested roughness", () => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsRoughJiPitch(jiPitch, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not rough to the requested roughness", () => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsRoughJiPitch(jiPitch, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", () => {
        it("returns true if the pitch is rough to the requested roughness", () => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = computeIsRoughJiPitch(jiPitch, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not rough to the requested roughness", () => {
            const jiPitch = { ratio: [5, 4] as Ratio }

            const actual = computeIsRoughJiPitch(jiPitch, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })
})
