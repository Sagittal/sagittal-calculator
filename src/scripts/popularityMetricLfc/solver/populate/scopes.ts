import { Count, Io, LogTarget, saveLog } from "../../../../general"
import { solverStatus } from "../../globals"
import { Submetric } from "../../sumOfSquares"
import { formatSearchedAndPopulated } from "../io"
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

    saveLog(`\n\nFINISHED POPULATING ${formatSearchedAndPopulated()}` as Io, LogTarget.POPULATE)
}

export {
    populateScopes,
}
