import { Count } from "../../../../general"
import { debug, saveLog } from "../../debug"
import { solverStatus } from "../../globals"
import { DebugTarget } from "../../types"
import { Chunk } from "../types"
import { populateScopesForChunkCount } from "./scopesForChunkCount"

const populateScopes = async () => {
    saveLog(`\n\nPOPULATING CHUNK COUNT ${solverStatus.populatingChunkCount}/${solverStatus.upperBoundChunkCount}`, DebugTarget.POPULATION)
    await populateScopesForChunkCount()
    if (debug[ DebugTarget.ALL ]) {
        console.log(``)
    } // That yellow lines appear frequently in-between this line and the log just 2 lines above should be proof that what is happening in-between is interruptable in a good way

    if (solverStatus.populatingChunkCount < solverStatus.upperBoundChunkCount) {
        solverStatus.populatingChunkCount = solverStatus.populatingChunkCount + 1 as Count<Chunk>
        await populateScopes()
    }
}

export {
    populateScopes,
}
