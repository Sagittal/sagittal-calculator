import { Count } from "../../../../general"
import { debug } from "../../debug"
import { populatedsForChunkCount, scopesForChunkCount } from "../globals"
import { Chunk, Scope } from "../types"

const populateScopeForChunkCount = (scope: Scope, chunkCount: Count<Chunk>) => {
    scopesForChunkCount[ chunkCount ] = scopesForChunkCount[ chunkCount ] || []
    scopesForChunkCount[ chunkCount ].push(scope)

    populatedsForChunkCount[ chunkCount ] = populatedsForChunkCount[ chunkCount ] ? populatedsForChunkCount[ chunkCount ] + 1 : 1

    if (debug.solver && populatedsForChunkCount[ chunkCount ] % 1000 === 0) {
        console.log(`${populatedsForChunkCount[ chunkCount ]} scopes have been populated for chunk count ${chunkCount} so far`.cyan)
    }
}

export {
    populateScopeForChunkCount,
}
