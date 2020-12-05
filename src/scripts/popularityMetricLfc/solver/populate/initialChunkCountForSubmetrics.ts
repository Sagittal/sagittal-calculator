import {count, Count, min} from "@sagittal/general"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"
import {Submetric} from "../../sumOfSquares"
import {Chunk} from "../types"
import {NO_MOOT_SUBMETRIC_CHUNKS, SUBMETRIC_CHUNKS} from "./constants"

const computeInitialChunkCountForSubmetrics = (chunkCount: Count<Chunk>): Count<Chunk<Submetric>> => {
    const submetricChunks = popularityMetricLfcScriptGroupSettings.noMoot ?
        NO_MOOT_SUBMETRIC_CHUNKS :
        SUBMETRIC_CHUNKS

    return min(chunkCount, count(submetricChunks)) as Count<Chunk<Submetric>>
}

export {
    computeInitialChunkCountForSubmetrics,
}
