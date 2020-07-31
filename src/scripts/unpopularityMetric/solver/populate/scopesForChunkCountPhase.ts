import { Combination, Combinations, computeCombinations, computeDistributions, Count, Index } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import {
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    populatedsForChunkCount,
} from "../globals"
import { Chunk } from "../types"
import { PARAMETER_CHUNKS, SUBMETRIC_CHUNKS } from "./constants"
import { populateScopesForChunkCountAndSubmetricChunkCombination } from "./scopesForChunkCountAndSubmetricChunkCombination"
import { ParameterChunk, SubmetricChunk } from "./types"

const populateScopesForChunkCountPhase = async (chunkCount: Count<Chunk>, chunkCountForSubmetrics: Count<SubmetricChunk>) => {
    const chunkCountForParameters: Count<Chunk> = chunkCount - chunkCountForSubmetrics as Count<ParameterChunk>

    if (debug.all || debug.solver) {
        console.log(`computing scopes for chunk count ${chunkCount}: phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount}`.cyan)
    }

    let submetricChunkCombinations: Combinations<SubmetricChunk>
    if (memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]) {
        submetricChunkCombinations = memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
        if (debug.all || debug.solver) {
            console.log(`used memoized submetric combinations (with repetitions) for chunk count ${chunkCountForSubmetrics}`.cyan)
        }
    } else {
        submetricChunkCombinations = computeCombinations(SUBMETRIC_CHUNKS, chunkCountForSubmetrics, { withRepeatedElements: true })
        memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
        if (debug.all || debug.solver) {
            console.log(`submetric combinations (with repetitions) computed: ${submetricChunkCombinations.length}; formula is ((${chunkCountForSubmetrics}+${SUBMETRIC_CHUNKS.length}-1)!)/((${chunkCountForSubmetrics}!)((${SUBMETRIC_CHUNKS.length}-1)!)) where ${SUBMETRIC_CHUNKS.length} is the total of possible existing chunks and ${chunkCountForSubmetrics} is the count we are choosing at a time`.cyan)
        }
    }
    submetricChunkCombinations.forEach(submetricChunkCombination => {
        submetricChunkCombination.unshift({} as SubmetricChunk)
    })

    let parameterChunkCombinations: Combinations<ParameterChunk>
    if (memoizedParameterChunkCombinations[ chunkCountForParameters ]) {
        parameterChunkCombinations = memoizedParameterChunkCombinations[ chunkCountForParameters ]
        if (debug.all || debug.solver) {
            console.log(`used memoized parameter combinations (with repetitions) for chunk count ${chunkCountForParameters}`.cyan)
        }
    } else {
        parameterChunkCombinations = computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        memoizedParameterChunkCombinations[ chunkCountForParameters ] = parameterChunkCombinations
        if (debug.all || debug.solver) {
            console.log(`parameter combinations (with repetitions) computed: ${parameterChunkCombinations.length}; formula is ((${chunkCountForParameters}+${PARAMETER_CHUNKS.length}-1)!)/((${chunkCountForParameters}!)((${PARAMETER_CHUNKS.length}-1)!)) where ${PARAMETER_CHUNKS.length} is the total of possible existing chunks and ${chunkCountForParameters} is the count we are choosing at a time`.cyan)
        }
    }

    if (debug.all || debug.solver) {
        const exampleDistributions = computeDistributions(parameterChunkCombinations[ 0 ], submetricChunkCombinations[ 0 ].length)
        console.log(`we find ${exampleDistributions.length} distributions of ${parameterChunkCombinations[ 0 ].length} parameter chunks across ${submetricChunkCombinations[ 0 ].length} bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the ${parameterChunkCombinations.length} parameter chunk combinations in this phase, and that times the ${submetricChunkCombinations.length} submetric chunk combinations in this phase, so expect ${exampleDistributions.length} * ${parameterChunkCombinations.length} * ${submetricChunkCombinations.length} = ${exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length} new scopes from this phase, so we should end with a total of ${(populatedsForChunkCount[ chunkCount ] || 0) + exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length}`.cyan)
    }

    for (const [submetricChunkCombinationIndex, submetricChunkCombination] of submetricChunkCombinations.entries()) {
        await populateScopesForChunkCountAndSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            chunkCount,
            submetricChunkCombinationIndex: submetricChunkCombinationIndex as Index<Combination<SubmetricChunk>>,
            submetricChunkCombinationCount: submetricChunkCombinations.length as Count<Combination<SubmetricChunk>>,
        })
    }

    if (debug.all || debug.solver) {
        console.log(`finished phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount} of scope population for chunk count ${chunkCount} ${debugSearchedAndPopulated()}`.cyan)
    }
}

export {
    populateScopesForChunkCountPhase,
}
