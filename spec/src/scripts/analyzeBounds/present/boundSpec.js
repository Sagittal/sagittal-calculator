const {extractBoundIdentifiers} = require("../../../../../src/scripts/analyzeBounds/present/bound")

describe("extractBoundIdentifiers", () => {
    const bound = {
        position: 23.1164196495597,
        levels: ["ULTRA", "EXTREME", "INSANE"],
        id: 47,
    }

    it("returns helpful identifying information about the bound", () => {
        const result = extractBoundIdentifiers(bound)

        expect(result).toEqual({
            extremeLevelLesserBoundedCommaSymbol: ".)/|",
            extremeLevelGreaterBoundedCommaSymbol: "'/|",
            position: 23.1164196495597,
            boundedCommas: {
                id: 47,
                ULTRA: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: "",
                        mina: 47,
                        monzo: [2, -1, -2, 0, 0, 0, 0, 1],
                        id: 47, // not the best example since id and mina are the same up to this point
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: "",
                        mina: 48,
                        monzo: [-19, 12],
                        id: 48,
                    },
                ],
                EXTREME: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: "",
                        mina: 47,
                        monzo: [2, -1, -2, 0, 0, 0, 0, 1],
                        id: 47,
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: "",
                        mina: 48,
                        monzo: [-19, 12],
                        id: 48,
                    },
                ],
                INSANE: [
                    {
                        introducingLevel: "ULTRA",
                        position: 22.9305875372457,
                        distance: 23.1164196495597 - 22.9305875372457,
                        ascii: ".)/|",
                        unicode: "",
                        mina: 47,
                        id: 47,
                        monzo: [2, -1, -2, 0, 0, 0, 0, 1],
                    },
                    {
                        introducingLevel: "ULTRA",
                        position: 23.4600103846490,
                        distance: 23.46001038464900 - 23.1164196495597,
                        ascii: "'/|",
                        unicode: "",
                        mina: 48,
                        id: 48,
                        monzo: [-19, 12],
                    },
                ],
            },
            lesserBoundedMina: 47,
            greaterBoundedMina: 48,
        })
    })
})
