import { Count } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { solverStatus } from "../../globals"
import { presentSearchedAndPopulated } from "../present"
import { computeInitialChunkCountForSubmetrics } from "./initialChunkCountForSubmetrics"
import { populateScopesPhase } from "./phase"
import { SubmetricChunk } from "./types"

const populateScopes = async () => {
    const chunkCount = solverStatus.chunkCount
    let chunkCountForSubmetrics: Count<SubmetricChunk> = computeInitialChunkCountForSubmetrics(chunkCount)

    saveDebugMessage(`computing combinations`, DebugTarget.POPULATE)

    while (chunkCountForSubmetrics > 0) {
        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<SubmetricChunk>
    }

    saveDebugMessage(`\n\nFINISHED POPULATING ${presentSearchedAndPopulated()}`, DebugTarget.POPULATE)
}

export {
    populateScopes,
}
