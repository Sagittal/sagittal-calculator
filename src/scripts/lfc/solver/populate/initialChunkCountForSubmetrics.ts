import { count, Count, min } from "../../../../general"
import { lfcSettings } from "../../globals"
import { Submetric } from "../../sumOfSquares"
import { Chunk } from "../types"
import { NO_USELESS_SUBMETRIC_CHUNKS, SUBMETRIC_CHUNKS } from "./constants"

const computeInitialChunkCountForSubmetrics = (chunkCount: Count<Chunk>): Count<Chunk<Submetric>> => {
    const submetricChunks = lfcSettings.noUseless ? NO_USELESS_SUBMETRIC_CHUNKS : SUBMETRIC_CHUNKS

    return min(chunkCount, count(submetricChunks)) as Count<Chunk<Submetric>>
}

export {
    computeInitialChunkCountForSubmetrics,
}
