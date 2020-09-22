import {
    Combination,
    Combinations,
    computeCombinations,
    computeDistributions,
    count,
    Count,
    DistributionBin,
    Index,
    Io,
    LogTarget,
    saveLog,
    subtract,
} from "../../../../general"
import {
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    popularityMetricLfcScriptGroupSettings,
    solverStatus,
} from "../../globals"
import { Parameter, Submetric } from "../../sumOfSquares"
import { formatSearchedAndPopulated } from "../io"
import { Chunk } from "../types"
import {
    ALL_BINS_SUBMETRIC_SCOPE,
    NO_USELESS_PARAMETER_CHUNKS,
    NO_USELESS_SUBMETRIC_CHUNKS,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
} from "./constants"
import {
    populateScopesForSubmetricChunkCombination,
    populateScopesForSubmetricChunkCombinationSync,
} from "./submetricChunkCombination"

const computeChunkCombinations = (
    chunkCount: Count<Chunk>,
    chunkCountForSubmetrics: Count<Chunk<Submetric>>,
): {
    submetricChunkCombinations: Combinations<Chunk<Submetric>>,
    parameterChunkCombinations: Combinations<Chunk<Parameter>>
} => {
    const chunkCountForParameters: Count<Chunk<Parameter>> =
        subtract(chunkCount, chunkCountForSubmetrics) as Count<Chunk<Parameter>>

    saveLog(
        `computing scopes: phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount}` as Io,
        LogTarget.POPULATE,
    )

    let submetricChunkCombinations: Combinations<Chunk<Submetric>>
    if (memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]) {
        submetricChunkCombinations = memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
        saveLog(`used memoized submetric combinations (with repetitions)` as Io, LogTarget.POPULATE)
    } else {
        const submetricChunks = popularityMetricLfcScriptGroupSettings.noUseless ?
            NO_USELESS_SUBMETRIC_CHUNKS :
            SUBMETRIC_CHUNKS
        submetricChunkCombinations =
            computeCombinations(submetricChunks, chunkCountForSubmetrics, { withRepeatedElements: true })
        memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
        saveLog(`submetric combinations (with repetitions) computed: ${submetricChunkCombinations.length}; formula is ((${chunkCountForSubmetrics}+${submetricChunks.length}-1)!)/((${chunkCountForSubmetrics}!)((${submetricChunks.length}-1)!)) where ${submetricChunks.length} is the total of possible existing chunks and ${chunkCountForSubmetrics} is the count we are choosing at a time` as Io, LogTarget.POPULATE)
    }
    submetricChunkCombinations.forEach((submetricChunkCombination: Combination<Chunk<Submetric>>): void => {
        submetricChunkCombination.unshift(ALL_BINS_SUBMETRIC_SCOPE)
    })

    let parameterChunkCombinations: Combinations<Chunk<Parameter>>
    if (memoizedParameterChunkCombinations[ chunkCountForParameters ]) {
        parameterChunkCombinations = memoizedParameterChunkCombinations[ chunkCountForParameters ]
        saveLog(`used memoized parameter combinations (with repetitions)` as Io, LogTarget.POPULATE)
    } else {
        const parameterChunks = popularityMetricLfcScriptGroupSettings.noUseless ?
            NO_USELESS_PARAMETER_CHUNKS :
            PARAMETER_CHUNKS
        parameterChunkCombinations =
            computeCombinations(PARAMETER_CHUNKS, chunkCountForParameters, { withRepeatedElements: true })
        memoizedParameterChunkCombinations[ chunkCountForParameters ] = parameterChunkCombinations
        saveLog(`parameter combinations (with repetitions) computed: ${parameterChunkCombinations.length}; formula is ((${chunkCountForParameters}+${parameterChunks.length}-1)!)/((${chunkCountForParameters}!)((${parameterChunks.length}-1)!)) where ${parameterChunks.length} is the total of possible existing chunks and ${chunkCountForParameters} is the count we are choosing at a time` as Io, LogTarget.POPULATE)
    }

    const exampleDistributions = computeDistributions(
        parameterChunkCombinations[ 0 ],
        count(submetricChunkCombinations[ 0 ]) as Count as Count<DistributionBin<Chunk<Parameter>>>,
    )
    saveLog(`we find ${exampleDistributions.length} distributions of ${parameterChunkCombinations[ 0 ].length} parameter chunks across ${submetricChunkCombinations[ 0 ].length} bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the ${parameterChunkCombinations.length} parameter chunk combinations in this phase, and that times the ${submetricChunkCombinations.length} submetric chunk combinations in this phase, so expect ${exampleDistributions.length} * ${parameterChunkCombinations.length} * ${submetricChunkCombinations.length} = ${exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length} new scopes from this phase, so we should end with a total of ${(solverStatus.populatedScopeCount) + exampleDistributions.length * parameterChunkCombinations.length * submetricChunkCombinations.length}` as Io, LogTarget.POPULATE)

    return { submetricChunkCombinations, parameterChunkCombinations }
}

const populateScopesPhase = async (
    chunkCount: Count<Chunk>,
    chunkCountForSubmetrics: Count<Chunk<Submetric>>,
): Promise<void> => {
    const { submetricChunkCombinations, parameterChunkCombinations } =
        computeChunkCombinations(chunkCount, chunkCountForSubmetrics)

    for (const [submetricChunkCombinationIndex, submetricChunkCombination] of submetricChunkCombinations.entries()) {
        await populateScopesForSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            submetricChunkCombinationIndex: submetricChunkCombinationIndex as Index<Combination<Chunk<Submetric>>>,
            submetricChunkCombinationCount: count(submetricChunkCombinations),
        })
    }

    saveLog(`finished phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount} of scope population ${formatSearchedAndPopulated()}` as Io, LogTarget.POPULATE)
}

const populateScopesPhaseSync = (
    chunkCount: Count<Chunk>,
    chunkCountForSubmetrics: Count<Chunk<Submetric>>,
): void => {
    const { submetricChunkCombinations, parameterChunkCombinations } =
        computeChunkCombinations(chunkCount, chunkCountForSubmetrics)

    for (const [submetricChunkCombinationIndex, submetricChunkCombination] of submetricChunkCombinations.entries()) {
        populateScopesForSubmetricChunkCombinationSync(submetricChunkCombination, {
            parameterChunkCombinations,
            submetricChunkCombinationIndex: submetricChunkCombinationIndex as Index<Combination<Chunk<Submetric>>>,
            submetricChunkCombinationCount: count(submetricChunkCombinations),
        })
    }

    saveLog(`finished phase ${1 + chunkCount - chunkCountForSubmetrics}/${chunkCount} of scope population ${formatSearchedAndPopulated()}` as Io, LogTarget.POPULATE)
}

export {
    populateScopesPhase,
    populateScopesPhaseSync,
}
