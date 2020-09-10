import { Combination, Index, Popularity, Ranked } from "../../../general"
import { computeAntivotes } from "./antivotes"
import { Submetric, Unpopularity } from "./types"

const computeUnpopularities = (
    realPopularities: Array<Ranked<Popularity>>,
    submetrics: Combination<Submetric>,
): Unpopularity[] =>
    realPopularities.map(({ twoThreeFreeClassAsRatio }: Popularity, index) =>
        ({
            index: index as Index<Unpopularity>,
            antivotes: computeAntivotes(twoThreeFreeClassAsRatio, submetrics),
            twoThreeFreeClassAsRatio,
        }))

export {
    computeUnpopularities,
}
