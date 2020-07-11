import { computeAntivotes } from "../antivotes/antivotes"
import { Popularity, Unpopularity } from "./types"
import { Submetric } from "../types"
import { Combination } from "../../../utilities/types"

const computeUnpopularities = (realPopularities: Popularity[], submetrics: Combination<Submetric>): Unpopularity[] => {
    return realPopularities.map(({ fiveRoughRatio }: Popularity, index) => {
        return {
            index,
            antivotes: computeAntivotes(fiveRoughRatio, submetrics),
            fiveRoughRatio,
        }
    })
}

export {
    computeUnpopularities,
}
