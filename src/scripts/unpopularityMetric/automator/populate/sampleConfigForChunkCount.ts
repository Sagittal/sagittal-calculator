import { SampleConfig } from "../../types"
import { Count } from "../../../../utilities/types"
import { populatedForChunkCount, sampleConfigsForChunkCount } from "../globals"
import { Chunk } from "../types"

const populateSampleConfigForChunkCount = (sampleConfig: SampleConfig, chunkCount: Count<Chunk>) => {
    sampleConfigsForChunkCount[ chunkCount ].push(sampleConfig)
    populatedForChunkCount[chunkCount] = populatedForChunkCount[chunkCount] ? populatedForChunkCount[chunkCount] + 1 : 1

    if (populatedForChunkCount[ chunkCount ] % 1000 === 0) console.log(`${populatedForChunkCount[ chunkCount ]} sample configs have been populated for chunk count ${chunkCount} so far`.cyan)
}

export {
    populateSampleConfigForChunkCount,
}
