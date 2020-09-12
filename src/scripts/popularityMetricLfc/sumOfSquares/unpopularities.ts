import { Combination, Index, Popularity, Ranked } from "../../../general"
import { computeAntivotes } from "./antivotes"
import { Submetric, Unpopularity } from "./types"

const computeUnpopularities = (
    realPopularities: Array<Ranked<Popularity>>,
    submetrics: Combination<Submetric>,
): Unpopularity[] =>
    realPopularities.map(({ twoThreeFreeClass }: Popularity, index) =>
        ({
            index: index as Index<Unpopularity>,
            antivotes: computeAntivotes(twoThreeFreeClass, submetrics),
            twoThreeFreeClass,
        }))

export {
    computeUnpopularities,
}
