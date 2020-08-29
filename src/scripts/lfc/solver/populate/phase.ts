import {
    Combination,
    Combinations,
    computeCombinations,
    computeDistributions,
    count,
    Count,
    difference,
    DistributionBin,
    Index, IO, LogTarget, saveLog
} from "../../../../general"
import { LFC } from "../../constants"
import {
    lfcSettings,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    solverStatus,
} from "../../globals"
import { Parameter, Submetric } from "../../sumOfSquares"
import { formatSearchedAndPopulated } from "../io"
import { Chunk } from "../types"
import {
    NO_USELESS_PARAMETER_CHUNKS,
    NO_USELESS_SUBMETRIC_CHUNKS,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
} from "./constants"
import { populateScopesForSubmetricChunkCombination } from "./submetricChunkCombination"

const populateScopesPhase = async (chunkCount: Count<Chunk>, chunkCountForSubmetrics: Count<Chunk<Submetric>>) => {
    const chunkCountForParameters: Count<Chunk<Parameter>> =
        difference(chunkCount, chunkCountForSubmetrics) as Count<Chunk<Parameter>>

    saveLog(
        `computing scopes: phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount}` as IO,
        LogTarget.POPULATE,
        LFC
    )

    let submetricChunkCombinations: Combinations<Chunk<Submetric>>
    if (memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]) {
        submetricChunkCombinations = memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
        saveLog(`used memoized submetric combinations (with repetitions)` as IO, LogTarget.POPULATE, LFC)
    } else {
        const submetricChunks = lfcSettings.noUseless ? NO_USELESS_SUBMETRIC_CHUNKS : SUBMETRIC_CHUNKS
        submetricChunkCombinations =
            computeCombinations(submetricChunks, chunkCountForSubmetrics, { withRepeatedElements: true })
        memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
        saveLog(`submetric combinations (with repetitions) computed: ${submetricChunkCombinations.length}; formula is ((${chunkCountForSubmetrics}+${submetricChunks.length}-1)!)/((${chunkCountForSubmetrics}!)((${submetricChunks.length}-1)!)) where ${submetricChunks.length} is the total of possible existing chunks and ${chunkCountForSubmetrics} is the count we are choosing at a time` as IO, LogTarget.POPULATE, LFC)
    }
    submetricChunkCombinations.forEach(submetricChunkCombination => {
        // TODO: you should probably name that this is what will become the all bins submetric scope, I think
        submetricChunkCombination.unshift({} as Chunk<Submetric>)
    })

    let parameterChunkCombinations: Combinations<Chunk<Parameter>>
    if (memoizedParameterChunkCombinations[ chunkCountForParameters ]) {
        parameterChunkCombinations = memoizedParameterChunkCombinations[ chunkCountForParameters ]
        saveLog(`used memoized parameter combinations (with repetitions)` as IO, LogTarget.POPULATE, LFC)
    } else {
        const parameterChunks = lfcSettings.noUseless ? NO_USELESS_PARAMETER_CHUNKS : PARAMETER_CHUNKS
        parameterChunkCombinations =
            computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        memoizedParameterChunkCombinations[ chunkCountForParameters ] = parameterChunkCombinations
        saveLog(`parameter combinations (with repetitions) computed: ${parameterChunkCombinations.length}; formula is ((${chunkCountForParameters}+${parameterChunks.length}-1)!)/((${chunkCountForParameters}!)((${parameterChunks.length}-1)!)) where ${parameterChunks.length} is the total of possible existing chunks and ${chunkCountForParameters} is the count we are choosing at a time` as IO, LogTarget.POPULATE, LFC)
    }

    const exampleDistributions = computeDistributions(
        parameterChunkCombinations[ 0 ],
        count(submetricChunkCombinations[ 0 ]) as Count as Count<DistributionBin<Chunk<Parameter>>>,
    )
    saveLog(`we find ${exampleDistributions.length} distributions of ${parameterChunkCombinations[ 0 ].length} parameter chunks across ${submetricChunkCombinations[ 0 ].length} bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the ${parameterChunkCombinations.length} parameter chunk combinations in this phase, and that times the ${submetricChunkCombinations.length} submetric chunk combinations in this phase, so expect ${exampleDistributions.length} * ${parameterChunkCombinations.length} * ${submetricChunkCombinations.length} = ${exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length} new scopes from this phase, so we should end with a total of ${(solverStatus.populatedScopeCount) + exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length}` as IO, LogTarget.POPULATE, LFC)

    for (const [submetricChunkCombinationIndex, submetricChunkCombination] of submetricChunkCombinations.entries()) {
        await populateScopesForSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            submetricChunkCombinationIndex: submetricChunkCombinationIndex as Index<Combination<Chunk<Submetric>>>,
            submetricChunkCombinationCount: submetricChunkCombinations.length as Count<Combination<Chunk<Submetric>>>,
        })
    }

    saveLog(`finished phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount} of scope population ${formatSearchedAndPopulated()}` as IO, LogTarget.POPULATE, LFC)
}

export {
    populateScopesPhase,
}
