import { Count } from "../../../../general"
import { saveLog } from "../../debug"
import { solverStatus } from "../../globals"
import { DebugTarget } from "../../types"
import { debugSearchedAndPopulated } from "../debug"
import { computeInitialChunkCountForSubmetrics } from "./initialChunkCountForSubmetrics"
import { populateScopesForChunkCountPhase } from "./scopesForChunkCountPhase"
import { SubmetricChunk } from "./types"

const populateScopesForChunkCount = async () => {
    const chunkCount = solverStatus.populatingChunkCount
    let chunkCountForSubmetrics: Count<SubmetricChunk> = computeInitialChunkCountForSubmetrics(chunkCount)

    saveLog(`computing combinations for chunk count ${chunkCount}`, DebugTarget.POPULATION)

    while (chunkCountForSubmetrics > 0) {
        await populateScopesForChunkCountPhase(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<SubmetricChunk>
    }

    saveLog(`FINISHED POPULATING CHUNK COUNT ${chunkCount} ${debugSearchedAndPopulated()}`, DebugTarget.POPULATION)
}

export {
    populateScopesForChunkCount,
}
