import { Count } from "../../../../general"
import { unpopularityMetricSettings } from "../../globals"
import { Chunk } from "../types"
import { NO_USELESS_SUBMETRIC_CHUNKS, SUBMETRIC_CHUNKS } from "./constants"
import { SubmetricChunk } from "./types"

const computeInitialChunkCountForSubmetrics = (chunkCount: Count<Chunk>) => {
    const submetricChunks = unpopularityMetricSettings.noUseless ? NO_USELESS_SUBMETRIC_CHUNKS : SUBMETRIC_CHUNKS

    return Math.min(chunkCount, submetricChunks.length) as Count<SubmetricChunk>
}

export {
    computeInitialChunkCountForSubmetrics,
}
