import {FLACCO_SUBSETS, FLACCO_SUBSETS_SORTED_BY_SIZE} from "./flaccoSubsets"
import {FlaccoId, FlaccoSubset} from "./types"

const getSmallestFlaccoSubset = (flaccoId: FlaccoId): FlaccoSubset => {
    for (const flaccoSubset of FLACCO_SUBSETS_SORTED_BY_SIZE) {
        if (FLACCO_SUBSETS[flaccoSubset].includes(flaccoId)) {
            return flaccoSubset
        }
    }

    throw new Error(`Flacco ID ${flaccoId} was not found in any flacco subset.`)
}

export {
    getSmallestFlaccoSubset,
}
