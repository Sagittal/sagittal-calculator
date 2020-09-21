import { Popularity, Rank, TwoThreeFreeClass, Votes } from "../../general"
import { N2D3P9 } from "../../sagittal"
import { BestNotatingCommaProperties } from "./bestNotatingComma"
import { ExactlyNotatingSymbolClassProperties } from "./exactlyNotatingSymbolClass"

type SharedPopular23FreeClassProperties = TwoThreeFreeClass & {
    n2d3p9: N2D3P9,
    votes: Votes,
    popularityRank?: Rank<Popularity>,
}

type Popular23FreeClass = SharedPopular23FreeClassProperties
    & (ExactlyNotatingSymbolClassProperties | BestNotatingCommaProperties)

interface Popular23FreeClassesScriptGroupSettings {
    useLate: boolean,
    useKnown: boolean,
    useBestNotatingCommas: boolean,
}

export {
    Popular23FreeClass,
    Popular23FreeClassesScriptGroupSettings,
}
