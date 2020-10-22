import { Id } from "../../../general"
import { FLACCO_SUBSETS, FLACCO_SUBSETS_SORTED_BY_SIZE } from "./flaccoSubsets"
import { Flacco, FlaccoSubset } from "./types"

const getSmallestFlaccoSubset = (flaccoId: Id<Flacco>): FlaccoSubset => {
    for (const flaccoSubset of FLACCO_SUBSETS_SORTED_BY_SIZE) {
        if (FLACCO_SUBSETS[ flaccoSubset ].includes(flaccoId)) {
            return flaccoSubset
        }
    }

    throw new Error(`Comma class ID ${flaccoId} was not found in any flacco subset.`)
}

export {
    getSmallestFlaccoSubset,
}
