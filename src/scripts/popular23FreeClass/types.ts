import { Popularity, Rank, Votes } from "../../general"
import { Two3FreeClassAnalysis } from "../../sagittal"
import { BestNotatingCommaProperties } from "./bestNotatingComma"
import { NotatingCommaClassesProperties } from "./notatingCommaClasses"

type SharedPopular23FreeClassProperties = Two3FreeClassAnalysis & {
    votes: Votes,
    popularityRank?: Rank<Popularity>,
}

type Popular23FreeClass = SharedPopular23FreeClassProperties
    & (NotatingCommaClassesProperties | BestNotatingCommaProperties)

interface Popular23FreeClassesScriptGroupSettings {
    useLate: boolean,
    useKnown: boolean,
    useBestNotatingCommas: boolean,
}

export {
    Popular23FreeClass,
    Popular23FreeClassesScriptGroupSettings,
}
