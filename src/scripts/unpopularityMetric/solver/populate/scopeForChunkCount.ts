import { Count } from "../../../../general"
import { Scope } from "../../bestMetric"
import { saveLog } from "../../debug"
import { populatedsForChunkCount, scopesForChunkCount } from "../../globals"
import { DebugTarget } from "../../types"
import { Chunk } from "../types"

const populateScopeForChunkCount = (scope: Scope, chunkCount: Count<Chunk>) => {
    scopesForChunkCount[ chunkCount ] = scopesForChunkCount[ chunkCount ] || []
    scopesForChunkCount[ chunkCount ].push(scope)

    populatedsForChunkCount[ chunkCount ] = populatedsForChunkCount[ chunkCount ] ? populatedsForChunkCount[ chunkCount ] + 1 : 1

    if (populatedsForChunkCount[ chunkCount ] % 1000 === 0) {
        saveLog(`${populatedsForChunkCount[ chunkCount ]} scopes have been populated for chunk count ${chunkCount} so far`, DebugTarget.POPULATION)
    }
}

export {
    populateScopeForChunkCount,
}
