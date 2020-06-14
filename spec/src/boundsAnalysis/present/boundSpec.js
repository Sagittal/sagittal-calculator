const {extractBoundIdentifiers} = require("../../../../src/boundsAnalysis/present/bound")

describe("extractBoundIdentifiers", () => {
    const bound = {
        position: 23.1164196495597,
        levels: ["ULTRA", "EXTREME", "INSANE"],
    }

    it("returns helpful identifying information about the bound", () => {
        const boundIndex = 47

        const result = extractBoundIdentifiers(bound, boundIndex)

        expect(result).toEqual({
            extremeLevelLesserBoundedCommaSymbol: ".)/|",
            extremeLevelGreaterBoundedCommaSymbol: "'/|",
            position: 23.1164196495597,
            boundedCommas: {
                ULTRA: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: '',
                        mina: 47,
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: '',
                        mina: 48,
                    },
                ],
                EXTREME: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: '',
                        mina: 47,
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: '',
                        mina: 48,
                    },
                ],
                INSANE: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: '',
                        mina: 47,
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
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
