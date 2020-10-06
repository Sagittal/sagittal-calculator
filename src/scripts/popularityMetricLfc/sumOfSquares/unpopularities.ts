import { Combination, Index, Popularity, Ranked } from "../../../general"
import { computeAntivotes } from "./antivotes"
import { Submetric, Unpopularity } from "./types"

const computeUnpopularities = (
    popularities: Array<Ranked<Popularity>>,
    submetrics: Combination<Submetric>,
): Unpopularity[] =>
    popularities.map(({ two3FreeClass }: Popularity, index: number): Unpopularity =>
        ({
            index: index as Index<Unpopularity>,
            antivotes: computeAntivotes(two3FreeClass, submetrics),
            two3FreeClass,
        }))

export {
    computeUnpopularities,
}
