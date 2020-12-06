import {Decimal, Grade, Rank, ScalaPopularityStat} from "@sagittal/general"
import {Two3FreeClassAnalysis} from "@sagittal/system"
import {BestNotatingCommaProperties} from "./bestNotatingComma"
import {NotatingSymbolClassesProperties} from "./notatingSymbolClasses"

type SharedPopular23FreeClassProperties = Two3FreeClassAnalysis & {
    votes: Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
    popularityRank?: Rank<ScalaPopularityStat>,
}

type Popular23FreeClass = SharedPopular23FreeClassProperties
    & (NotatingSymbolClassesProperties | BestNotatingCommaProperties)

interface Popular23FreeClassesScriptGroupSettings {
    useLate: boolean,
    useKnown: boolean,
    useBestNotatingCommas: boolean,
}

export {
    Popular23FreeClass,
    Popular23FreeClassesScriptGroupSettings,
    SharedPopular23FreeClassProperties,
}
