import { Count } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { status } from "../globals"
import { computeInitialChunkCountForSubmetrics } from "./initialChunkCountForSubmetrics"
import { populateScopesForChunkCountPhase } from "./scopesForChunkCountPhase"
import { SubmetricChunk } from "./types"

const populateScopesForChunkCount = async () => {
    const chunkCount = status.populatingChunkCount
    let chunkCountForSubmetrics: Count<SubmetricChunk> = computeInitialChunkCountForSubmetrics(chunkCount)

    if (debug.all || debug.solver) {
        console.log(`computing combinations for chunk count ${chunkCount}`.cyan)
    }

    while (chunkCountForSubmetrics > 0) {
        await populateScopesForChunkCountPhase(chunkCount, chunkCountForSubmetrics)
        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<SubmetricChunk>
    }

    if (debug.all || debug.solver) {
        console.log(`FINISHED POPULATING CHUNK COUNT ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)
    }
}

export {
    populateScopesForChunkCount,
}
