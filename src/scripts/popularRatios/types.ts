import { N2D3P9, Rank } from "../../general"
// tslint:disable-next-line no-reaching-imports
import { Popularity } from "../unpopularityMetric/sumOfSquares"

interface PopularRatioUnrankedResult {
    presentedRatio: string,
    presentedN2D3P9: N2D3P9,
    symbolSets: string,
    smileys: string,
    actualRank: Rank<Popularity> | undefined,
}

export {
    PopularRatioUnrankedResult,
}
