import { Combination, Index } from "../../../general"
import { Submetric } from "../types"
import { computeAntivotes } from "./antivotes"
import { Popularity, Unpopularity } from "./types"

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
