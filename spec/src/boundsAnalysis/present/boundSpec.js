const {extractBoundIdentifiers} = require("../../../../src/boundsAnalysis/present/bound")

describe("extractBoundIdentifiers", () => {
    const bound = {
        position: 23.1164196495597,
        levels: ["VERY_HIGH", "EXTREME", "INSANE"],
    }

    it("returns helpful identifying information about the bound", () => {
        const boundIndex = 47

        const result = extractBoundIdentifiers(bound, boundIndex)

        expect(result).toEqual({
            extremeLevelLesserBoundedCommaSymbol: ".)/|",
            extremeLevelGreaterBoundedCommaSymbol: "'/|",
            position: 23.1164196495597,
            boundedCommas: {
                VERY_HIGH: [
                    {
                        introducingLevel: "VERY_HIGH",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        symbol: ".)/|",
                        unicode: '',
                        mina: 47,
                    },
                    {
                        introducingLevel: "VERY_HIGH",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        symbol: "'/|",
                        unicode: '',
                        mina: 48,
                    },
                ],
                EXTREME: [
                    {
                        introducingLevel: "VERY_HIGH",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        symbol: ".)/|",
                        unicode: '',
                        mina: 47,
                    },
                    {
                        introducingLevel: "VERY_HIGH",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        symbol: "'/|",
                        unicode: '',
                        mina: 48,
                    },
                ],
                INSANE: [
                    {
                        introducingLevel: "VERY_HIGH",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        symbol: ".)/|",
                        unicode: '',
                        mina: 47,
                    },
                    {
                        introducingLevel: "VERY_HIGH",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        symbol: "'/|",
                        unicode: '',
                        mina: 48,
                    },
                ],
            },
            lesserBoundedMina: 47,
            greaterBoundedMina: 48,
        })
    })
})
