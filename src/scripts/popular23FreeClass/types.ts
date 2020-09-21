import { Cents, Id, Index, Maybe, Monzo, Popularity, Rank, TwoThreeFreeClass, Votes } from "../../general"
import { N2D3P9, SymbolClass, SymbolSubset } from "../../sagittal"

type SharedPopular23FreeClassProperties = TwoThreeFreeClass & {
    n2d3p9: N2D3P9,
    votes: Votes,
    popularityRank?: Rank<Popularity>,
}

type Popular23FreeClassWithExactlyNotatingSymbolClasses = SharedPopular23FreeClassProperties & {
    exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices: Array<Index<SymbolSubset>>,
    exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>>,
}

type Popular23FreeClassWithBestNotatingComma = SharedPopular23FreeClassProperties & {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaMonzo: Monzo,
    bestNotatingCommaMaybeSymbolClassId: Maybe<Id<SymbolClass>>,
}

type Popular23FreeClass = Popular23FreeClassWithExactlyNotatingSymbolClasses | Popular23FreeClassWithBestNotatingComma

interface Popular23FreeClassesScriptGroupSettings {
    useLate: boolean,
    useKnown: boolean,
    useBestNotatingCommas: boolean,
}

export {
    Popular23FreeClass,
    Popular23FreeClassWithExactlyNotatingSymbolClasses,
    Popular23FreeClassWithBestNotatingComma,
    Popular23FreeClassesScriptGroupSettings,
}
