import { Popularity, Rank, Votes } from "../../general"
import { TwoThreeFreeClassAnalysis } from "../../sagittal"
import { BestNotatingCommaProperties } from "./bestNotatingComma"
import { ExactlyNotatingSymbolClassProperties } from "./exactlyNotatingSymbolClass"

type SharedPopular23FreeClassProperties = TwoThreeFreeClassAnalysis & {
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
