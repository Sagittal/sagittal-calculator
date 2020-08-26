import {
    Combination,
    Combinations,
    computeCombinations,
    computeDistributions,
    count,
    Count,
    difference,
    DistributionBin,
    Index,
} from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import {
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    solverStatus,
    unpopularityMetricSettings,
} from "../../globals"
import { Parameter, Submetric } from "../../sumOfSquares"
import { presentSearchedAndPopulated } from "../io"
import { Chunk } from "../types"
import {
    NO_USELESS_PARAMETER_CHUNKS,
    NO_USELESS_SUBMETRIC_CHUNKS,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
} from "./constants"
import { populateScopesForSubmetricChunkCombination } from "./submetricChunkCombination"

const populateScopesPhase = async (chunkCount: Count<Chunk>, chunkCountForSubmetrics: Count<Chunk<Submetric>>) => {
    const chunkCountForParameters: Count<Chunk<Parameter>> = difference(chunkCount, chunkCountForSubmetrics) as Count<Chunk<Parameter>>

    saveDebugMessage(`computing scopes: phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount}`, DebugTarget.POPULATE)

    let submetricChunkCombinations: Combinations<Chunk<Submetric>>
    if (memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]) {
        submetricChunkCombinations = memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
        saveDebugMessage(`used memoized submetric combinations (with repetitions)`, DebugTarget.POPULATE)
    } else {
        const submetricChunks = unpopularityMetricSettings.noUseless ? NO_USELESS_SUBMETRIC_CHUNKS : SUBMETRIC_CHUNKS
        submetricChunkCombinations = computeCombinations(submetricChunks, chunkCountForSubmetrics, { withRepeatedElements: true })
        memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
        saveDebugMessage(`submetric combinations (with repetitions) computed: ${submetricChunkCombinations.length}; formula is ((${chunkCountForSubmetrics}+${submetricChunks.length}-1)!)/((${chunkCountForSubmetrics}!)((${submetricChunks.length}-1)!)) where ${submetricChunks.length} is the total of possible existing chunks and ${chunkCountForSubmetrics} is the count we are choosing at a time`, DebugTarget.POPULATE)
    }
    submetricChunkCombinations.forEach(submetricChunkCombination => {
        submetricChunkCombination.unshift({} as Chunk<Submetric>) // TODO: you should probably name that this is what will become the all bins submetric scope, I think
    })

    let parameterChunkCombinations: Combinations<Chunk<Parameter>>
    if (memoizedParameterChunkCombinations[ chunkCountForParameters ]) {
        parameterChunkCombinations = memoizedParameterChunkCombinations[ chunkCountForParameters ]
        saveDebugMessage(`used memoized parameter combinations (with repetitions)`, DebugTarget.POPULATE)
    } else {
        const parameterChunks = unpopularityMetricSettings.noUseless ? NO_USELESS_PARAMETER_CHUNKS : PARAMETER_CHUNKS
        parameterChunkCombinations = computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        memoizedParameterChunkCombinations[ chunkCountForParameters ] = parameterChunkCombinations
        saveDebugMessage(`parameter combinations (with repetitions) computed: ${parameterChunkCombinations.length}; formula is ((${chunkCountForParameters}+${parameterChunks.length}-1)!)/((${chunkCountForParameters}!)((${parameterChunks.length}-1)!)) where ${parameterChunks.length} is the total of possible existing chunks and ${chunkCountForParameters} is the count we are choosing at a time`, DebugTarget.POPULATE)
    }

    const exampleDistributions = computeDistributions(parameterChunkCombinations[ 0 ], count(submetricChunkCombinations[ 0 ]) as Count as Count<DistributionBin<Chunk<Parameter>>>)
    saveDebugMessage(`we find ${exampleDistributions.length} distributions of ${parameterChunkCombinations[ 0 ].length} parameter chunks across ${submetricChunkCombinations[ 0 ].length} bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the ${parameterChunkCombinations.length} parameter chunk combinations in this phase, and that times the ${submetricChunkCombinations.length} submetric chunk combinations in this phase, so expect ${exampleDistributions.length} * ${parameterChunkCombinations.length} * ${submetricChunkCombinations.length} = ${exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length} new scopes from this phase, so we should end with a total of ${(solverStatus.populatedScopeCount) + exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length}`, DebugTarget.POPULATE)

    for (const [submetricChunkCombinationIndex, submetricChunkCombination] of submetricChunkCombinations.entries()) {
        await populateScopesForSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            submetricChunkCombinationIndex: submetricChunkCombinationIndex as Index<Combination<Chunk<Submetric>>>,
            submetricChunkCombinationCount: submetricChunkCombinations.length as Count<Combination<Chunk<Submetric>>>,
        })
    }

    saveDebugMessage(`finished phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount} of scope population ${presentSearchedAndPopulated()}`, DebugTarget.POPULATE)
}

export {
    populateScopesPhase,
}
