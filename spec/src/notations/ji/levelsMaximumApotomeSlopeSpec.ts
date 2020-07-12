import { computeApotomeSlope } from "../../../../src/utilities/comma/apotomeSlope"
import { LEVELS_SYMBOLS } from "../../../../src/notations/ji/levelsSymbols"
import { ApotomeSlope, Level, SagittalSymbol } from "../../../../src/notations/ji/types"
import { EnumHash } from "../../../../src/utilities/types"

describe("maximum apotome slope per level", () => {
    it("increases a bit at each level", () => {
        const result = (Object.entries(LEVELS_SYMBOLS) as Array<[Level, SagittalSymbol[]]>)
            .map(([level, levelSymbols]: [Level, SagittalSymbol[]]): Partial<EnumHash<Level, ApotomeSlope>> => {
                const levelMaximumApotomeSlope: ApotomeSlope = levelSymbols.reduce(
                    (levelMaximumApotomeSlope, levelSymbol) => {
                        const apotomeSlope = Math.abs(computeApotomeSlope(levelSymbol.primaryComma.monzo))
                        return apotomeSlope > levelMaximumApotomeSlope ? apotomeSlope : levelMaximumApotomeSlope
                    },
                    0,
                ) as ApotomeSlope

                return { [ level ]: levelMaximumApotomeSlope }
            })

        const expectedLevelMaximumApotomeSlopes: Array<Partial<EnumHash<Level, ApotomeSlope>>> = [
            { [ Level.MEDIUM ]: 6.354528858477924 as ApotomeSlope },
            { [ Level.HIGH ]: 7.763478611049832 as ApotomeSlope },
            { [ Level.ULTRA ]: 11.558451753921005 as ApotomeSlope },
            { [ Level.EXTREME ]: 11.558451753921005 as ApotomeSlope },
            { [ Level.INSANE ]: 11.558451753921005 as ApotomeSlope },
        ]
        expect(result).toEqual(expectedLevelMaximumApotomeSlopes)
    })
})
