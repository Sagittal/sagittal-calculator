import { isSmoothMonzo, Monzo, Smoothness, THREE_SMOOTHNESS } from "../../../../../../../src/general/math"

describe("isSmoothMonzo", (): void => {
    it("returns true if the monzo is smooth to the requested smoothness", (): void => {
        const monzo = [0, 0, 1] as Monzo

        const actual = isSmoothMonzo(monzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("works even if the monzo hasn't been trimmed for some reason", (): void => {
        const monzo = [0, 0, 1, 0, 0, 0] as Monzo

        const actual = isSmoothMonzo(monzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not smooth to the requested smoothness", (): void => {
        const monzo = [0, 0, 1] as Monzo

        const actual = isSmoothMonzo(monzo, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})
