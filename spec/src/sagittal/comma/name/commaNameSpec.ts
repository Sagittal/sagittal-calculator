import { Comma, Monzo } from "../../../../../src/general"
import { computeCommaName } from "../../../../../src/sagittal/comma/name"

describe("computeCommaName", () => {
    it("given a comma will return its Secor-Keenan systematic name", () => {
        const comma = { monzo: [5, -7, -1, 3] } as Comma

        const actual = computeCommaName(comma)

        const expected = "343/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected form", () => {
        const comma = { monzo: [5, -7, -1, 3] } as Comma

        const actual = computeCommaName(comma, { directed: false })

        const expected = "5:343k"
        expect(actual).toBe(expected)
    })

    it("can return the name in factored form", () => {
        const comma = { monzo: [5, -7, -1, 3] } as Comma

        const actual = computeCommaName(comma, { factored: true })

        const expected = "7³/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected and factored form", () => {
        const comma = { monzo: [5, -7, -1, 3] } as Comma

        const actual = computeCommaName(comma, { directed: false, factored: true })

        const expected = "5:7³k"
        expect(actual).toBe(expected)
    })

    it("can return the name in unabbreviated form", () => {
        const comma = { monzo: [5, -7, -1, 3] } as Comma

        const actual = computeCommaName(comma, { abbreviated: false })

        const expected = "343/5-kleisma"
        expect(actual).toBe(expected)
    })

    it("works when there are only 2's and 3's in the prime factorization", () => {
        const comma = { monzo: [-19, 12] } as Comma

        const actual = computeCommaName(comma)

        const expected = "3C"
        expect(actual).toBe(expected)
    })
    
    it("works for a comma which is sub", () => {
        const comma = { monzo: [-4,	4,	-1]} as Comma
        
        const actual = computeCommaName(comma)
        
        const expected = "1/5C"
        expect(actual).toBe(expected)
    })

    it(
        "throws an error when there are only 2's in the prime factorization, since it must be outside of comma range",
        () => {
            const comma = { monzo: [1] } as Comma

            expect(() => computeCommaName(comma)).toThrowError(`Comma {"monzo":[1]} is outside of comma-sized range and cannot be named.`)
        },
    )

    it("works when the monzo is empty", () => {
        const comma = { monzo: [] as Monzo } as Comma

        const actual = computeCommaName(comma)

        const expected = "1u"
        expect(actual).toBe(expected)
    })

    it("assigns the correct size category", () => {
        expect(computeCommaName({ monzo: [12, -2, -1, -1, 0, -1] as Monzo } as Comma)).toBe("1/455n")
        expect(computeCommaName({ monzo: [-15, 8, 1] as Monzo } as Comma)).toBe("5s")
        expect(computeCommaName({ monzo: [-7, 7, 0, 0, 0, 0, -1] as Monzo } as Comma)).toBe("1/17k")
        expect(computeCommaName({ monzo: [-12, 5, 0, 0, 0, 0, 1] as Monzo } as Comma)).toBe("17C")
        expect(computeCommaName({ monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1] as Monzo } as Comma)).toBe("23/5S")
        expect(computeCommaName({ monzo: [7, -3, 1, 0, 0, 0, 0, 0, -1] as Monzo } as Comma)).toBe("5/23M")
        expect(computeCommaName({ monzo: [-18, 10, -1, 0, 0, 0, 0, 0, 1] as Monzo } as Comma)).toBe("23/5L")
    })

    it("says 'down' when the comma is negative", () => {
        const comma = { monzo: [-40, 22, 1, 1] } as Comma

        const actual = computeCommaName(comma)

        const expected = "1/35s down"
        expect(actual).toBe(expected)
    })

    it("assumes (does not show) an 'over one'", () => {
        const comma = { monzo: [-5, 1, 0, 0, 1] } as Comma

        const actual = computeCommaName(comma)

        const expected = "11M"
        expect(actual).toBe(expected)
    })

    it("assumes (does not show) an 'over one', even when it is in undirected mode", () => {
        const comma = { monzo: [-5, 1, 0, 0, 1] } as Comma

        const actual = computeCommaName(comma, { directed: false })

        const expected = "11M"
        expect(actual).toBe(expected)
    })

    it("another example, not sure what was up, maybe some edge case", () => {
        const comma = { monzo: [-9, 13, -2, 0, -2] } as Comma

        const actual = computeCommaName(comma, { directed: false, abbreviated: false, factored: true })

        const expected = "5².11²-Medium-Diesis"
        expect(actual).toBe(expected)
    })
})
