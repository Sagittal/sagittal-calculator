const {extractBoundIdentifiers} = require("../../../../../src/scripts/analyzeBounds/present/boundIdentifiers")
const {INA_SIZES} = require("../../../../../src/notations/ji/intervals")

describe("extractBoundIdentifiers", () => {
    const bound = {
        position: 23.1164196495597,
        levels: ["ULTRA", "EXTREME", "INSANE"],
        id: 47,
    }

    it("returns helpful identifying information about the bound", () => {
        const result = extractBoundIdentifiers(bound)

        expect(result).toEqual({
            extremeLevelLesserBoundedSymbol: ".)/|",
            extremeLevelGreaterBoundedSymbol: "'/|",
            position: 23.1164196495597,
            boundedSymbols: {
                id: 47,
                ULTRA: [
                    {
                        introducingLevel: "ULTRA",
                        distance: 23.1164196495597 - 22.9305875372457,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES["ULTRA"],
                        ascii: ".)/|",
                        unicode: "",
                        mina: 47,
                        primaryComma: {
                            position: 22.9305875372457,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1],
                        },
                        id: 47, // not the best example since id and mina are the same up to this point
                    },
                    {
                        introducingLevel: "ULTRA",
                        distance: 23.46001038464900 - 23.1164196495597,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES["ULTRA"],
                        ascii: "'/|",
                        unicode: "",
                        mina: 48,
                        primaryComma: {
                            position: 23.4600103846490,
                            monzo: [-19, 12],
                        },
                        id: 48,
                    },
                ],
                EXTREME: [
                    {
                        introducingLevel: "ULTRA",
                        distance: 23.1164196495597 - 22.9305875372457,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES["EXTREME"],
                        ascii: ".)/|",
                        unicode: "",
                        mina: 47,
                        primaryComma: {
                            position: 22.9305875372457,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1],
                        },
                        id: 47,
                    },
                    {
                        introducingLevel: "ULTRA",
                        distance: 23.46001038464900 - 23.1164196495597,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES["EXTREME"],
                        ascii: "'/|",
                        unicode: "",
                        mina: 48,
                        primaryComma: {
                            position: 23.4600103846490,
                            monzo: [-19, 12],
                        },
                        id: 48,
                    },
                ],
                INSANE: [
                    {
                        introducingLevel: "ULTRA",
                        distance: 23.1164196495597 - 22.9305875372457,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / INA_SIZES["INSANE"],
                        ascii: ".)/|",
                        unicode: "",
                        mina: 47,
                        id: 47,
                        primaryComma: {
                            position: 22.9305875372457,
                            monzo: [2, -1, -2, 0, 0, 0, 0, 1],
                        },
                    },
                    {
                        introducingLevel: "ULTRA",
                        distance: 23.46001038464900 - 23.1164196495597,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / INA_SIZES["INSANE"],
                        ascii: "'/|",
                        unicode: "",
                        mina: 48,
                        id: 48,
                        primaryComma: {
                            position: 23.4600103846490,
                            monzo: [-19, 12],
                        },
                    },
                ],
            },
            lesserBoundedMina: 47,
            greaterBoundedMina: 48,
        })
    })
})
