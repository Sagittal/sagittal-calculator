import { Count } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { solverStatus } from "../../globals"
import { presentSearchedAndPopulated } from "../present"
import { computeInitialChunkCountForSubmetrics } from "./initialChunkCountForSubmetrics"
import { populateScopesForChunkCountPhase } from "./scopesForChunkCountPhase"
import { SubmetricChunk } from "./types"

const populateScopesForChunkCount = async () => {
    const chunkCount = solverStatus.populatingChunkCount
    let chunkCountForSubmetrics: Count<SubmetricChunk> = computeInitialChunkCountForSubmetrics(chunkCount)

    saveDebugMessage(`computing combinations for chunk count ${chunkCount}`, DebugTarget.POPULATE)

    while (chunkCountForSubmetrics > 0) {
        await populateScopesForChunkCountPhase(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<SubmetricChunk>
    }

    saveDebugMessage(`FINISHED POPULATING CHUNK COUNT ${chunkCount} ${presentSearchedAndPopulated()}`, DebugTarget.POPULATE)
}

export {
    populateScopesForChunkCount,
}
