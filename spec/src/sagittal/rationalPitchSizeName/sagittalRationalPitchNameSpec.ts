import { Monzo } from "../../../../src/general"
import { computeSagittalRationalPitchName } from "../../../../src/sagittal/rationalPitchSizeName"

describe("computeSagittalRationalPitchName", () => {
    it("given a monzo will return the name of the comma", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalRationalPitchName(monzo)

        const expected = "343/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalRationalPitchName(monzo, { directed: false })

        const expected = "5:343k"
        expect(actual).toBe(expected)
    })

    it("can return the name in factored form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalRationalPitchName(monzo, { factored: true })

        const expected = "7³/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected and factored form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalRationalPitchName(monzo, { directed: false, factored: true })

        const expected = "5:7³k"
        expect(actual).toBe(expected)
    })

    it("can return the name in unabbreviated form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalRationalPitchName(monzo, { abbreviated: false })

        const expected = "343/5-kleisma"
        expect(actual).toBe(expected)
    })

    it("works when there are only 2's and 3's in the prime factorization", () => {
        const monzo = [-19, 12] as Monzo

        const actual = computeSagittalRationalPitchName(monzo)

        const expected = "1C"
        expect(actual).toBe(expected)
    })

    it("works when the monzo is empty", () => {
        const monzo = [] as Monzo

        const actual = computeSagittalRationalPitchName(monzo)

        const expected = "1u"
        expect(actual).toBe(expected)
    })

    it("assigns the correct size category", () => {
        expect(computeSagittalRationalPitchName([12, -2, -1, -1, 0, -1] as Monzo)).toBe("1/455n")
        expect(computeSagittalRationalPitchName([-15, 8, 1] as Monzo)).toBe("5s")
        expect(computeSagittalRationalPitchName([-7, 7, 0, 0, 0, 0, -1] as Monzo)).toBe("1/17k")
        expect(computeSagittalRationalPitchName([-12, 5, 0, 0, 0, 0, 1] as Monzo)).toBe("17C")
        expect(computeSagittalRationalPitchName([1, -2, -1, 0, 0, 0, 0, 0, 1] as Monzo)).toBe("23/5S")
        expect(computeSagittalRationalPitchName([7, -3, 1, 0, 0, 0, 0, 0, -1] as Monzo)).toBe("5/23M")
        expect(computeSagittalRationalPitchName([-18, 10, -1, 0, 0, 0, 0, 0, 1] as Monzo)).toBe("23/5L")
    })

    it("does the right thing when the comma is negative", () => {
        const monzo = [-40, 22, 1, 1] as Monzo

        const actual = computeSagittalRationalPitchName(monzo)

        const expected = "1/35s down"
        expect(actual).toBe(expected)
    })
})
