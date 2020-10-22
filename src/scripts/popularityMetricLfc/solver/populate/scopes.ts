import {Count, LogTarget, saveLog} from "../../../../general"
import {solverStatus} from "../../globals"
import {Submetric} from "../../sumOfSquares"
import {formatSearchedAndPopulated} from "../io"
import {Chunk} from "../types"
import {computeInitialChunkCountForSubmetrics} from "./initialChunkCountForSubmetrics"
import {populateScopesPhase, populateScopesPhaseSync} from "./phase"

const populateScopes = async (): Promise<void> => {
    const chunkCount = solverStatus.chunkCount
    let chunkCountForSubmetrics: Count<Chunk<Submetric>> = computeInitialChunkCountForSubmetrics(chunkCount)

    while (chunkCountForSubmetrics > 0) {
        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<Chunk<Submetric>>
    }

    saveLog(`\n\nFINISHED POPULATING ${formatSearchedAndPopulated()}`, LogTarget.SETUP)
}

const populateScopesSync = (): void => {
    const chunkCount = solverStatus.chunkCount
    let chunkCountForSubmetrics: Count<Chunk<Submetric>> = computeInitialChunkCountForSubmetrics(chunkCount)

    while (chunkCountForSubmetrics > 0) {
        populateScopesPhaseSync(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<Chunk<Submetric>>
    }

    saveLog(`\n\nFINISHED POPULATING ${formatSearchedAndPopulated()}`, LogTarget.SETUP)
}

export {
    populateScopes,
    populateScopesSync,
}
