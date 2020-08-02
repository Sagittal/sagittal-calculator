import { Count } from "../../../../general"
import { DebugTarget, debugTargets, saveDebugMessage } from "../../debug"
import { solverStatus } from "../../globals"
import { Chunk } from "../types"
import { populateScopesForChunkCount } from "./scopesForChunkCount"

const populateScopes = async () => {
    saveDebugMessage(`\n\nPOPULATING CHUNK COUNT ${solverStatus.populatingChunkCount}/${solverStatus.upperBoundChunkCount}`, DebugTarget.POPULATE)
    await populateScopesForChunkCount()
    if (debugTargets[ DebugTarget.ALL ]) {
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
