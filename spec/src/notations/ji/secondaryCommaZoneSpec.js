const {computeSecondaryCommaZone} = require("../../../../src/notations/ji/secondaryCommaZone")

describe("secondaryCommaZone", () => {
    it("returns the lower and upper bound of where secondary commas are represented by the given symbol, i.e. its capture zone at its introducing level", () => {
        const symbol = {
            id: 82,
            ascii: "/|~",
            unicode: "",
            introducingLevel: "HIGH",
            mina: 78,
            primaryComma: {
                monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1],
                position: 38.0506316728057,
            },
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            37.30947973834720,
            38.06194034977850,
        ])
    })

    it("another example, at the Extreme level", () => {
        const symbol = {
            id: 83,
            ascii: ",,(|(",
            unicode: "",
            introducingLevel: "EXTREME",
            mina: 78.39014554523920,
            primaryComma: {
                monzo: [-7, 5, 0, 1, 0, -1],
                position: 38.0732490267513,
            },
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            38.06194034977850,
            38.29315717024330,
        ])
    })

    it("another example, at the Medium level", () => {
        const symbol = {
            id: 85,
            ascii: "(|(",
            unicode: "",
            introducingLevel: "MEDIUM",
            mina: 80,
            primaryComma: {
                monzo: [-2, 2, 1, 0, -1],
                position: 38.9057732308529,
            },
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            35.11809146436650,
            40.26051203403560,
        ])
    })

    it("works for the initial symbol", () => {
        const symbol = {
            id: 0,
            ascii: "|",
            unicode: "",
            introducingLevel: "MEDIUM",
            mina: 0,
            primaryComma: {
                monzo: [],
                position: 0.0000000000000,
            },
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            -2.74024427456787,
            2.74024427456787,
        ])
    })
})
