import { Monzo } from "../../../../src/general/music"
import { computeCommaName } from "../../../../src/general/music/name"

describe("computeCommaName", () => {
    it("given a monzo will return the name of the comma", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeCommaName(monzo)

        const expected = "343/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeCommaName(monzo, { directed: false })

        const expected = "5:343k"
        expect(actual).toBe(expected)
    })

    it("can return the name in factored form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeCommaName(monzo, { factored: true })

        const expected = "7³/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected and factored form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeCommaName(monzo, { directed: false, factored: true })

        const expected = "5:7³k"
        expect(actual).toBe(expected)
    })

    it("can return the name in unabbreviated form", () => {
        const monzo = [5, -7, -1, 3] as Monzo

        const actual = computeCommaName(monzo, { abbreviated: false })

        const expected = "343/5-kleisma"
        expect(actual).toBe(expected)
    })

    it("works when there are only 2's and 3's in the prime factorization", () => {
        const monzo = [-19, 12] as Monzo

        const actual = computeCommaName(monzo)

        const expected = "1C"
        expect(actual).toBe(expected)
    })

    it("works when the monzo is empty", () => {
        const monzo = [] as Monzo

        const actual = computeCommaName(monzo)

        const expected = "1u"
        expect(actual).toBe(expected)
    })

    it("assigns the correct size category", () => {
        expect(computeCommaName([12, -2, -1, -1, 0, -1] as Monzo)).toBe("1/455n")
        expect(computeCommaName([-15, 8, 1] as Monzo)).toBe("5s")
        expect(computeCommaName([-7, 7, 0, 0, 0, 0, -1] as Monzo)).toBe("1/17k")
        expect(computeCommaName([-12, 5, 0, 0, 0, 0, 1] as Monzo)).toBe("17C")
        expect(computeCommaName([1, -2, -1, 0, 0, 0, 0, 0, 1] as Monzo)).toBe("23/5S")
        expect(computeCommaName([7, -3, 1, 0, 0, 0, 0, 0, -1] as Monzo)).toBe("5/23M")
        expect(computeCommaName([-18, 10, -1, 0, 0, 0, 0, 0, 1] as Monzo)).toBe("23/5L")
    })
})
