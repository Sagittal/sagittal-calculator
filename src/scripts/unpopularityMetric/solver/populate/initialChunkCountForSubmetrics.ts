import { Count } from "../../../../general"
import { Chunk } from "../types"
import { SUBMETRIC_CHUNKS } from "./constants"
import { SubmetricChunk } from "./types"

const computeInitialChunkCountForSubmetrics = (chunkCount: Count<Chunk>) => {
    return Math.min(chunkCount, SUBMETRIC_CHUNKS.length) as Count<SubmetricChunk>
}

export {
    computeInitialChunkCountForSubmetrics,
}
