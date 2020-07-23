import { Count } from "../../../../general"
import { debug } from "../../debug"
import { status } from "../globals"
import { Chunk } from "../types"
import { populateScopesForChunkCount } from "./scopesForChunkCount"

const populateScopes = async () => {
    if (debug.all || debug.solver) {
        console.log(`\n\nPOPULATING CHUNK COUNT ${status.populatingChunkCount}/${status.upperBoundChunkCount}`.cyan)
    }
    await populateScopesForChunkCount()
    if (debug.all) {
        console.log(``.cyan)
    } // That yellow lines appear frequently in-between this line and the log just 2 lines above should be proof that what is happening in-between is interruptable in a good way

    if (status.populatingChunkCount < status.upperBoundChunkCount) {
        status.populatingChunkCount = status.populatingChunkCount + 1 as Count<Chunk>
        await populateScopes()
    }
}

export {
    populateScopes,
}
