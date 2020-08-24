import { Combination, Index, Popularity } from "../../../general"
import { computeAntivotes } from "./antivotes"
import { Submetric, Unpopularity } from "./types"

const computeUnpopularities = (realPopularities: Popularity[], submetrics: Combination<Submetric>): Unpopularity[] =>
    realPopularities.map(({ fiveRoughRatio }: Popularity, index) =>
        ({
            index: index as Index<Unpopularity>,
            antivotes: computeAntivotes(fiveRoughRatio, submetrics),
            fiveRoughRatio,
        }))

export {
    computeUnpopularities,
}
