import { computeCombinations, computeDistributions, Count } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { Chunk, SubmetricScope } from "../types"
import { CHUNKS } from "./constants"
import { populateScopesForChunkCountAndSubmetricScopeCount } from "./scopesForChunkCountAndSubmetricScopeCount"

const populateScopesForChunkCount = async (chunkCount: Count<Chunk>) => {
    let submetricScopeCount: Count<SubmetricScope> = chunkCount

    if (debug.all || debug.solver) {
        console.log(`computing combinations for chunk count ${chunkCount}`.cyan)
    }

    const chunkCombinations = computeCombinations(CHUNKS, chunkCount, { withRepeatedElements: true })
    if (debug.all || debug.solver) {
        console.log(`combinations computed: ${chunkCombinations.length} parameter combinations (with repetitions) for chunk count ${chunkCount}; formula is ((${chunkCount}+${CHUNKS.length}-1)!)/((${chunkCount}!)((${CHUNKS.length}-1)!)) where ${CHUNKS.length} is the total of possible existing chunks and ${chunkCount} is the count we are choosing at a time`.cyan)
    }

    while (submetricScopeCount > 0) {
        if (debug.all || debug.solver) {
            console.log(`computing scopes for chunk count ${chunkCount}: phase ${1 + chunkCount - submetricScopeCount}/${chunkCount}`.cyan)
        }

        const exampleDistribution = computeDistributions(chunkCombinations[ 0 ], submetricScopeCount)
        if (debug.all || debug.solver) {
            console.log(`we find ${exampleDistribution.length} distributions of ${chunkCombinations[ 0 ].length} chunks across ${submetricScopeCount} submetric scope bins, which is how many more scopes should be contributed per each of the ${chunkCombinations.length} combinations in this phase, so expect a maximum ${exampleDistribution.length} * ${chunkCombinations.length} = ${exampleDistribution.length * chunkCombinations.length} new scopes from this phase (this does not factor for filtering out a huge number of distributions with invalid bins)`.cyan)
        }

        await populateScopesForChunkCountAndSubmetricScopeCount(submetricScopeCount, chunkCombinations, 0, chunkCount)

        if (debug.all || debug.solver) console.log(`finished phase ${1 + chunkCount - submetricScopeCount}/${chunkCount} of scope population for chunk count ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)

        submetricScopeCount = submetricScopeCount - 1 as Count<SubmetricScope>
    }

    if (debug.all || debug.solver) console.log(`FINISHED POPULATING CHUNK COUNT ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)
}

export {
    populateScopesForChunkCount,
}
