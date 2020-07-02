const {computeCommaName} = require("../../../../src/utilities/comma/name")

describe("computeCommaName", () => {
    it("given a monzo will return the name of the comma", () => {
        const monzo = [5, -7, -1, 3]

        const result = computeCommaName(monzo)

        expect(result).toBe("343/5k")
    })

    it("can return the name in undirected form", () => {
        const monzo = [5, -7, -1, 3]

        const result = computeCommaName(monzo, {directed: false})

        expect(result).toBe("5:343k")
    })

    it("can return the name in factored form", () => {
        const monzo = [5, -7, -1, 3]

        const result = computeCommaName(monzo, {factored: true})

        expect(result).toBe("7³/5k")
    })

    it("can return the name in undirected and factored form", () => {
        const monzo = [5, -7, -1, 3]

        const result = computeCommaName(monzo, {directed: false, factored: true})

        expect(result).toBe("5:7³k")
    })

    it("can return the name in unabbreviated form", () => {
        const monzo = [5, -7, -1, 3]

        const result = computeCommaName(monzo, {abbreviated: false})

        expect(result).toBe("343/5-kleisma")
    })

    it("works when there are only 2's and 3's in the prime factorization", () => {
        const monzo = [-19, 12]

        const result = computeCommaName(monzo)

        expect(result).toBe("1C")
    })

    it("assigns the correct size category", () => {
        expect(computeCommaName([12, -2, -1, -1, 0, -1])).toBe("1/455n")
        expect(computeCommaName([-15, 8, 1])).toBe("5s")
        expect(computeCommaName([-7, 7, 0, 0, 0, 0, -1])).toBe("1/17k")
        expect(computeCommaName([-12, 5, 0, 0, 0, 0, 1])).toBe("17C")
        expect(computeCommaName([1, -2, -1, 0, 0, 0, 0, 0, 1])).toBe("23/5S")
        expect(computeCommaName([7, -3, 1, 0, 0, 0, 0, 0, -1])).toBe("5/23M")
        expect(computeCommaName([-18, 10, -1, 0, 0, 0, 0, 0, 1])).toBe("23/5L")
    })
})
