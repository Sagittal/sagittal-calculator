import { Combinations, computeCombinations, computeDistributions, Count } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { cachedParameterChunkCombinations, cachedSubmetricChunkCombinations, populatedForChunkCount } from "../globals"
import { Chunk } from "../types"
import { PARAMETER_CHUNKS, SUBMETRIC_CHUNKS } from "./constants"
import { populateScopesForChunkCountAndSubmetricScopeCount } from "./scopesForChunkCountAndSubmetricScopeCount"

const populateScopesForChunkCount = async (chunkCount: Count<Chunk>) => {
    let chunkCountForSubmetrics: Count<Chunk> = Math.min(chunkCount, SUBMETRIC_CHUNKS.length) as Count<Chunk> // todo have a test that protects against trying to go higher than 6

    if (debug.all || debug.solver) {
        console.log(`computing combinations for chunk count ${chunkCount}`.cyan)
    }

    while (chunkCountForSubmetrics > 0) {
        const chunkCountForParameters: Count<Chunk> = chunkCount - chunkCountForSubmetrics as Count<Chunk>

        if (debug.all || debug.solver) {
            console.log(`computing scopes for chunk count ${chunkCount}: phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount}`.cyan)
        }

        let submetricChunkCombinations: Combinations<Chunk>
        if (cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ]) {
            submetricChunkCombinations = cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
            if (debug.all || debug.solver) console.log(`used cached submetric combinations (with repetitions) for chunk count ${chunkCountForSubmetrics}`.cyan)
        } else {
            submetricChunkCombinations = computeCombinations(SUBMETRIC_CHUNKS, chunkCountForSubmetrics, { withRepeatedElements: true })
            cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
            if (debug.all || debug.solver) console.log(`submetric combinations (with repetitions) computed: ${submetricChunkCombinations.length}; formula is ((${chunkCountForSubmetrics}+${SUBMETRIC_CHUNKS.length}-1)!)/((${chunkCountForSubmetrics}!)((${SUBMETRIC_CHUNKS.length}-1)!)) where ${SUBMETRIC_CHUNKS.length} is the total of possible existing chunks and ${chunkCountForSubmetrics} is the count we are choosing at a time`.cyan)
        }

        let parameterChunkCombinations: Combinations<Chunk>
        if (cachedParameterChunkCombinations[ chunkCountForParameters ]) {
            parameterChunkCombinations = cachedParameterChunkCombinations[ chunkCountForParameters ]
            if (debug.all || debug.solver) console.log(`used cached parameter combinations (with repetitions) for chunk count ${chunkCountForParameters}`.cyan)
        } else {
            parameterChunkCombinations = computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
            cachedParameterChunkCombinations[ chunkCountForParameters ] = parameterChunkCombinations
            if (debug.all || debug.solver) console.log(`parameter combinations (with repetitions) computed: ${parameterChunkCombinations.length}; formula is ((${chunkCountForParameters}+${PARAMETER_CHUNKS.length}-1)!)/((${chunkCountForParameters}!)((${PARAMETER_CHUNKS.length}-1)!)) where ${PARAMETER_CHUNKS.length} is the total of possible existing chunks and ${chunkCountForParameters} is the count we are choosing at a time`.cyan)
        }

        const exampleDistributions = computeDistributions(parameterChunkCombinations[ 0 ], submetricChunkCombinations[0].length)
        console.log('#######well what the hell then', parameterChunkCombinations[ 0 ].length, submetricChunkCombinations[0].length)
        if (debug.all || debug.solver) {
            console.log(`we find ${exampleDistributions.length} distributions of ${parameterChunkCombinations[ 0 ].length} parameter chunks across ${submetricChunkCombinations[0].length} bins (assignments to each of a combination of submetrics), which is how many more scopes should be contributed per each of the ${parameterChunkCombinations.length} parameter chunk combinations in this phase, and that times the ${submetricChunkCombinations.length} submetric chunk combinations in this phase, so expect ${exampleDistributions.length} * ${parameterChunkCombinations.length} * ${submetricChunkCombinations.length} = ${exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length} new scopes from this phase, so we should end with a total of ${(populatedForChunkCount[chunkCount] || 0) + exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length}`.cyan)
        }

        for (const [sIndex, submetricChunkCombination] of submetricChunkCombinations.entries()) {
            await populateScopesForChunkCountAndSubmetricScopeCount(submetricChunkCombination, parameterChunkCombinations, 0, chunkCount, sIndex, submetricChunkCombinations.length)
        }

        if (debug.all || debug.solver) console.log(`finished phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount} of scope population for chunk count ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)

        chunkCountForSubmetrics = chunkCountForSubmetrics - 1 as Count<Chunk>
    }

    if (debug.all || debug.solver) console.log(`FINISHED POPULATING CHUNK COUNT ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)
}

export {
    populateScopesForChunkCount,
}
