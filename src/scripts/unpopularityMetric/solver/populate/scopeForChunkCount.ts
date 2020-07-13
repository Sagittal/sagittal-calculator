import { Scope } from "../../types"
import { Count } from "../../../../utilities/types"
import { populatedForChunkCount, scopesForChunkCount } from "../globals"
import { Chunk } from "../types"

const populateScopeForChunkCount = (scope: Scope, chunkCount: Count<Chunk>) => {
    scopesForChunkCount[ chunkCount ].push(scope)
    populatedForChunkCount[chunkCount] = populatedForChunkCount[chunkCount] ? populatedForChunkCount[chunkCount] + 1 : 1

    if (populatedForChunkCount[ chunkCount ] % 1000 === 0) console.log(`${populatedForChunkCount[ chunkCount ]} scopes have been populated for chunk count ${chunkCount} so far`.cyan)
}

export {
    populateScopeForChunkCount,
}
