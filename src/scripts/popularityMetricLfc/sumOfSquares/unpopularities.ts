import { Combination, Index, Ranked, ScalaPopularityStat } from "@sagittal/general"
import { computeAntivotes } from "./antivotes"
import { LfcUnpopularityEstimate, Submetric } from "./types"

const computeUnpopularities = (
    popularities: Array<Ranked<ScalaPopularityStat>>,
    submetrics: Combination<Submetric>,
): LfcUnpopularityEstimate[] =>
    popularities.map(({ two3FreeClass }: ScalaPopularityStat, index: number): LfcUnpopularityEstimate =>
        ({
            index: index as Index<LfcUnpopularityEstimate>,
            antivotes: computeAntivotes(two3FreeClass, submetrics),
            two3FreeClass,
        }))

export {
    computeUnpopularities,
}
