import { Monzo } from "../../../../src/general"
import { computeSagittalCommaName } from "../../../../src/sagittal/commaSizeName"

describe("computeSagittalCommaName", () => {
    it("given a monzo will return the name of the comma", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalCommaName(monzo)

        const expected = "343/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalCommaName(monzo, { directed: false })

        const expected = "5:343k"
        expect(actual).toBe(expected)
    })

    it("can return the name in factored form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalCommaName(monzo, { factored: true })

        const expected = "7³/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected and factored form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalCommaName(monzo, { directed: false, factored: true })

        const expected = "5:7³k"
        expect(actual).toBe(expected)
    })

    it("can return the name in unabbreviated form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeSagittalCommaName(monzo, { abbreviated: false })

        const expected = "343/5-kleisma"
        expect(actual).toBe(expected)
    })

    it("works when there are only 2's and 3's in the prime factorization", () => {
        const monzo = [-19, 12] as Monzo

        const actual = computeSagittalCommaName(monzo)

        const expected = "1C"
        expect(actual).toBe(expected)
    })

    it("works when the monzo is empty", () => {
        const monzo = [] as Monzo

        const actual = computeSagittalCommaName(monzo)

        const expected = "1u"
        expect(actual).toBe(expected)
    })

    it("assigns the correct size category", () => {
        expect(computeSagittalCommaName([12, -2, -1, -1, 0, -1] as Monzo)).toBe("1/455n")
        expect(computeSagittalCommaName([-15, 8, 1] as Monzo)).toBe("5s")
        expect(computeSagittalCommaName([-7, 7, 0, 0, 0, 0, -1] as Monzo)).toBe("1/17k")
        expect(computeSagittalCommaName([-12, 5, 0, 0, 0, 0, 1] as Monzo)).toBe("17C")
        expect(computeSagittalCommaName([1, -2, -1, 0, 0, 0, 0, 0, 1] as Monzo)).toBe("23/5S")
        expect(computeSagittalCommaName([7, -3, 1, 0, 0, 0, 0, 0, -1] as Monzo)).toBe("5/23M")
        expect(computeSagittalCommaName([-18, 10, -1, 0, 0, 0, 0, 0, 1] as Monzo)).toBe("23/5L")
    })

    it("says 'down' when the comma is negative", () => {
        const monzo = [-40, 22, 1, 1] as Monzo

        const actual = computeSagittalCommaName(monzo)

        const expected = "1/35s down"
        expect(actual).toBe(expected)
    })

    it("assumes (does not show) an 'over one'", () => {
        const monzo = [-5, 1, 0, 0, 1] as Monzo

        const actual = computeSagittalCommaName(monzo)

        const expected = "11M"
        expect(actual).toBe(expected)
    })

    it("assumes (does not show) an 'over one', even when it is in undirected mode", () => {
        const monzo = [-5, 1, 0, 0, 1] as Monzo

        const actual = computeSagittalCommaName(monzo, { directed: false })

        const expected = "11M"
        expect(actual).toBe(expected)
    })

    it("another example, not sure what was up, maybe some edge case", () => {
        const monzo = [-9, 13, -2,  0, -2] as Monzo

        const actual = computeSagittalCommaName(monzo, { directed: false, abbreviated: false, factored: true })

        const expected = "5².11²-Medium-Diesis"
        expect(actual).toBe(expected)
    })
})
