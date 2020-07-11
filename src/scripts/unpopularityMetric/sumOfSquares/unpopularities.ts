import { computeAntivotes } from "../antivotes/antivotes"
import { Popularity, Unpopularity } from "./types"
import { Submetric } from "../types"

const computeUnpopularities = (realPopularities: Popularity[], submetrics: Submetric[]): Unpopularity[] => {
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
