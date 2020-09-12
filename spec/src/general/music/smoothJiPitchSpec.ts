import { Ratio, Smoothness, THREE_SMOOTHNESS } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/monzo"
import { computeIsSmoothJiPitch } from "../../../../src/general/music"

describe("computeIsSmoothJiPitch", () => {
    describe("by monzo", () => {
        it("returns true if the pitch is smooth to the requested smoothness", () => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsSmoothJiPitch(jiPitch, 5 as 5 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not smooth to the requested smoothness", () => {
            const jiPitch = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsSmoothJiPitch(jiPitch, THREE_SMOOTHNESS)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", () => {
        it("returns true if the pitch is smooth to the requested smoothness", () => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = computeIsSmoothJiPitch(jiPitch, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is not smooth to the requested smoothness", () => {
            const jiPitch = { ratio: [7, 5] as Ratio }

            const actual = computeIsSmoothJiPitch(jiPitch, 5 as 5 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })
})
