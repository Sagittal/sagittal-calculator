import { Count } from "../../../../general"
import { debug } from "../../debug"
import { populatedForChunkCount, scopesForChunkCount } from "../globals"
import { Chunk, Scope } from "../types"

const populateScopeForChunkCount = (scope: Scope, chunkCount: Count<Chunk>) => {
    scopesForChunkCount[ chunkCount ] = scopesForChunkCount[ chunkCount ] || []
    scopesForChunkCount[ chunkCount ].push(scope)

    populatedForChunkCount[ chunkCount ] = populatedForChunkCount[ chunkCount ] ? populatedForChunkCount[ chunkCount ] + 1 : 1

    if (debug.solver && populatedForChunkCount[ chunkCount ] % 1000 === 0) {
        console.log(`${populatedForChunkCount[ chunkCount ]} scopes have been populated for chunk count ${chunkCount} so far`.cyan)
    }
}

export {
    populateScopeForChunkCount,
}
