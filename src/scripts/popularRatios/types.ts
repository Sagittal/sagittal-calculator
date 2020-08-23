import { N2D3P9 } from "../../general"
import { PopularityRank } from "../unpopularityMetric"

interface PopularRatioUnrankedResult {
    presentedRatio: string,
    presentedN2D3P9: N2D3P9,
    symbolSets: string,
    smileys: string,
    actualRank: PopularityRank | undefined,

    // TODO: do we maybe have a helper type from Musical Patterns utilities
    //  that will automatically add the index type onto an object?
    //  could use it here and a few places
    [ index: string ]: N2D3P9 | string | PopularityRank | undefined
}

export {
    PopularRatioUnrankedResult,
}
