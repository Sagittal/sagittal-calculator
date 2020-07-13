import { populateScopesForChunkCount } from "./scopesForChunkCount"
import { Count } from "../../../../utilities/types"
import { status } from "../globals"
import { Chunk } from "../types"

const populateScopes = async ({ debug }: { debug: boolean }) => {
    console.log(`\n\nPOPULATING CHUNK COUNT ${status.populatingChunkCount}/${status.upperBoundChunkCount}`.cyan)
    await populateScopesForChunkCount(status.populatingChunkCount, { debug })
    if (debug) console.log(``.cyan) // that yellow lines appear frequently in-between this line and the log just 2 lines above should be proof that what is happening in-between is interruptable in a good way

    if (status.populatingChunkCount < status.upperBoundChunkCount) {
        status.populatingChunkCount = status.populatingChunkCount + 1 as Count<Chunk>
        await populateScopes({ debug })
    }
}

export {
    populateScopes,
}
