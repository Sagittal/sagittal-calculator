import {
    Cents,
    COMMA_POPULARITIES,
    computeCentsFromPitch,
    computeJiPitchMonzo,
    equalJiPitches,
    Id,
    Index,
    isUndefined,
    Max,
    NOT_FOUND,
    Popularity,
    TwoThreeFreeClass,
    Votes,
} from "../../general"
import {
    APOTOME_CENTS,
    computeMaybeSymbolClassId,
    computeNotatingCommas,
    getSmallestSymbolSubset,
    JI_NOTATION_SYMBOL_SUBSETS,
    N2D3P9,
    SymbolClass,
    SymbolSubset,
} from "../../sagittal"
import { computeBestNotatingComma } from "./bestNotatingComma"
import { computeExactlyNotatingSymbolClassIds } from "./exactlyNotatingSymbolClassIds"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClass = (
    { twoThreeFreeClass, n2d3p9 }: { twoThreeFreeClass: TwoThreeFreeClass, n2d3p9: N2D3P9 },
): Popular23FreeClass => {
    const popularity = COMMA_POPULARITIES.find((popularity: Popularity): boolean => {
        return equalJiPitches(popularity.twoThreeFreeClass, twoThreeFreeClass)
    })
    const popularityRank = !isUndefined(popularity) ? popularity.rank : undefined
    const votes = popularity?.votes || 0 as Votes

    let bestNotatingCommaOrExactlyNotatingSymbolClassProperties
    if (popular23FreeClassesScriptGroupSettings.useBestNotatingCommas) {
        const notatingCommas =
            computeNotatingCommas(twoThreeFreeClass, { maxCents: APOTOME_CENTS / 2 as Max<Cents> })
        const bestNotatingComma = computeBestNotatingComma(notatingCommas)
        const maybeSymbolClassId = computeMaybeSymbolClassId(bestNotatingComma)

        bestNotatingCommaOrExactlyNotatingSymbolClassProperties = {
            bestNotatingCommaCents: computeCentsFromPitch(bestNotatingComma),
            bestNotatingCommaMonzo: computeJiPitchMonzo(bestNotatingComma),
            bestNotatingCommaMaybeSymbolClassId: maybeSymbolClassId,
        }
    } else {
        const exactlyNotatingSymbolClassIds = computeExactlyNotatingSymbolClassIds(twoThreeFreeClass)

        const smallestJiNotationSymbolSubsetIndices = exactlyNotatingSymbolClassIds
            .map((symbolClassId: Id<SymbolClass>): Index<SymbolSubset> => {
                let symbolSubsetIndex = JI_NOTATION_SYMBOL_SUBSETS.indexOf(getSmallestSymbolSubset(symbolClassId))

                // the smallest symbol subset method will include Trojan, but for these purposes
                // we only care about the smallest subset in the JI notation hierarchy
                symbolSubsetIndex = symbolSubsetIndex === NOT_FOUND ?
                    JI_NOTATION_SYMBOL_SUBSETS.indexOf(SymbolSubset.PROMETHEAN) :
                    symbolSubsetIndex

                return symbolSubsetIndex as Index<SymbolSubset>
            })

        bestNotatingCommaOrExactlyNotatingSymbolClassProperties = {
            exactlyNotatingSymbolClassIds,
            exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices: smallestJiNotationSymbolSubsetIndices,
        }
    }

    return {
        ...twoThreeFreeClass,
        n2d3p9,
        popularityRank,
        votes,
        ...bestNotatingCommaOrExactlyNotatingSymbolClassProperties,
    }
}

export {
    computePopular23FreeClass,
}
