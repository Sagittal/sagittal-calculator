import {
    Combination,
    computeDistributions,
    Count,
    count,
    DistributionBin,
    doOnNextEventLoop,
    Index,
    indexOfFinalElement,
    Io,
    LogTarget,
    merge,
    saveLog,
} from "../../../../general"
import { Scope, SubmetricScope } from "../../bestMetric"
import { Parameter, Submetric } from "../../sumOfSquares"
import { formatSearchedAndPopulated } from "../io"
import { Chunk } from "../types"
import { populateScope } from "./scope"
import { PopulateScopesForSubmetricChunkCombinationOptions } from "./types"

const populateScopesForSubmetricChunkCombination = async (
    submetricChunkCombination: Combination<Chunk<Submetric>>,
    options: PopulateScopesForSubmetricChunkCombinationOptions,
): Promise<void> => {
    const {
        parameterChunkCombinations,
        parameterChunkCombinationIndex = 0,
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    } = options

    saveLog(`populating scopes for submetric chunk combination ${submetricChunkCombinationIndex + 1}/${submetricChunkCombinationCount} with parameter chunk combination ${parameterChunkCombinationIndex + 1}/${parameterChunkCombinations.length} (${100 * parameterChunkCombinationIndex / parameterChunkCombinations.length}%) ${formatSearchedAndPopulated()}` as Io, LogTarget.POPULATE)

    const parameterChunkCombination: Combination<Chunk> = parameterChunkCombinations[ parameterChunkCombinationIndex ]

    const parameterChunkCombinationDistributions = computeDistributions(
        parameterChunkCombination,
        count(submetricChunkCombination) as Count as Count<DistributionBin<Chunk<Parameter>>>,
    )

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const scope: Scope = submetricChunkCombination.map((submetricChunkBin, index) => {
            const parametersDistributedToThisBin = parameterChunkCombinationDistribution[ index ]

            return merge(submetricChunkBin, ...parametersDistributedToThisBin) as SubmetricScope
        }) as Scope

        populateScope(scope)
    })

    if (parameterChunkCombinationIndex === indexOfFinalElement(parameterChunkCombinations)) {
        return
    }

    return doOnNextEventLoop(async () => {
        await populateScopesForSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            parameterChunkCombinationIndex: parameterChunkCombinationIndex + 1 as Index<Combination<Chunk<Parameter>>>,
            submetricChunkCombinationIndex,
            submetricChunkCombinationCount,
        })
    })
}

export {
    populateScopesForSubmetricChunkCombination,
}