import { Popularity, Unpopularity } from "./types"
import { Submetric } from "../types"
import { Combination, Index } from "../../../utilities/types"
import { computeAntivotes } from "./antivotes/antivotes"

const computeUnpopularities = (realPopularities: Popularity[], submetrics: Combination<Submetric>): Unpopularity[] => {
    return realPopularities.map(({ fiveRoughRatio }: Popularity, index) => {
        return {
            index: index as Index<Unpopularity>,
            antivotes: computeAntivotes(fiveRoughRatio, submetrics),
            fiveRoughRatio,
        }
    })
}

export {
    computeUnpopularities,
}
