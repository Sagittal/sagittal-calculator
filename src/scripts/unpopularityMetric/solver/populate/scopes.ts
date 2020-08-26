import { Count } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { solverStatus } from "../../globals"
import { Submetric } from "../../sumOfSquares"
import { presentSearchedAndPopulated } from "../io"
import { Chunk } from "../types"
import { computeInitialChunkCountForSubmetrics } from "./initialChunkCountForSubmetrics"
import { populateScopesPhase } from "./phase"

const populateScopes = async () => {
    const chunkCount = solverStatus.chunkCount
    let chunkCountForSubmetrics: Count<Chunk<Submetric>> = computeInitialChunkCountForSubmetrics(chunkCount)

    while (chunkCountForSubmetrics > 0) {
        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<Chunk<Submetric>>
    }

    saveDebugMessage(`\n\nFINISHED POPULATING ${presentSearchedAndPopulated()}`, DebugTarget.POPULATE)
}

export {
    populateScopes,
}
