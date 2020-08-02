import { Count } from "../../../../general"
import { Scope } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { populatedsForChunkCount, scopesForChunkCount } from "../../globals"
import { Chunk } from "../types"

const populateScopeForChunkCount = (scope: Scope, chunkCount: Count<Chunk>) => {
    scopesForChunkCount[ chunkCount ] = scopesForChunkCount[ chunkCount ] || []
    scopesForChunkCount[ chunkCount ].push(scope)

    populatedsForChunkCount[ chunkCount ] = populatedsForChunkCount[ chunkCount ] ? populatedsForChunkCount[ chunkCount ] + 1 : 1

    if (populatedsForChunkCount[ chunkCount ] % 1000 === 0) {
        saveDebugMessage(`${populatedsForChunkCount[ chunkCount ]} scopes have been populated for chunk count ${chunkCount} so far`, DebugTarget.POPULATE)
    }
}

export {
    populateScopeForChunkCount,
}
