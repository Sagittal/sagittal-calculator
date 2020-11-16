import {Copfr, Decimal, Max, Numerator, Prime, Rank, ScalaPopularityStat, Grade} from "../../general"
import {Two3FreeClassAnalysis} from "../../sagittal"
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

interface KnownNumerator {
    numerator: Numerator & Decimal<{integer: true}>,
    gpf: Max<Prime>,
    copfr: Copfr<{rough: 5}>,
}

export {
    Popular23FreeClass,
    Popular23FreeClassesScriptGroupSettings,
    KnownNumerator,
}
