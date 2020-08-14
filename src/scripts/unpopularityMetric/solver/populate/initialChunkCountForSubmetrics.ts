import { Count } from "../../../../general"
import { Chunk } from "../types"
import { NO_USELESS_SUBMETRIC_CHUNKS, SUBMETRIC_CHUNKS } from "./constants"
import { SubmetricChunk } from "./types"
import { unpopularityMetricSettings } from "../../globals"

const computeInitialChunkCountForSubmetrics = (chunkCount: Count<Chunk>) => {
    const submetricChunks = unpopularityMetricSettings.noUseless ? NO_USELESS_SUBMETRIC_CHUNKS : SUBMETRIC_CHUNKS
    console.log(submetricChunks.length, unpopularityMetricSettings.noUseless)

    return Math.min(chunkCount, submetricChunks.length) as Count<SubmetricChunk>
}

export {
    computeInitialChunkCountForSubmetrics,
}
