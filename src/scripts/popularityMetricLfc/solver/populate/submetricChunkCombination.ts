import {
    Combination,
    computeDistributions,
    Count,
    count,
    Distribution,
    DistributionBin,
    doOnNextEventLoop,
    increment,
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

const computeNextPopulateScopesForSubmetricChunkCombinationOptions = (
    submetricChunkCombination: Combination<Chunk<Submetric>>,
    options: PopulateScopesForSubmetricChunkCombinationOptions,
): PopulateScopesForSubmetricChunkCombinationOptions => {
    const {
        parameterChunkCombinations,
        parameterChunkCombinationIndex,
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    } = options

    saveLog(`populating scopes for submetric chunk combination ${submetricChunkCombinationIndex + 1}/${submetricChunkCombinationCount} with parameter chunk combination ${parameterChunkCombinationIndex + 1}/${parameterChunkCombinations.length} (${100 * parameterChunkCombinationIndex / parameterChunkCombinations.length}%) ${formatSearchedAndPopulated()}` as Io, LogTarget.SETUP)

    const parameterChunkCombination: Combination<Chunk<Parameter>> =
        parameterChunkCombinations[ parameterChunkCombinationIndex ]

    const parameterChunkCombinationDistributions: Array<Distribution<Chunk<Parameter>>> = computeDistributions(
        parameterChunkCombination,
        count(submetricChunkCombination) as Count as Count<DistributionBin<Chunk<Parameter>>>,
    )

    parameterChunkCombinationDistributions.forEach(
        (parameterChunkCombinationDistribution: Distribution<Chunk<Parameter>>): void => {
            const scope: Scope = submetricChunkCombination.map(
                (submetricChunkBin: Chunk<Submetric>, index: number): SubmetricScope => {
                    const parametersDistributedToThisBin: Combination<Chunk<Parameter>> =
                        parameterChunkCombinationDistribution[ index ]

                    return merge(
                        submetricChunkBin as Chunk,
                        ...parametersDistributedToThisBin as Combination<Chunk>,
                    ) as SubmetricScope
                },
            ) as Scope

            populateScope(scope)
        },
    )

    return {
        parameterChunkCombinations,
        parameterChunkCombinationIndex:
            increment(parameterChunkCombinationIndex as Index<Combination<Chunk<Parameter>>>),
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    }
}

const populateScopesForSubmetricChunkCombination = async (
    submetricChunkCombination: Combination<Chunk<Submetric>>,
    options: PopulateScopesForSubmetricChunkCombinationOptions,
): Promise<void> => {
    const nextOptions =
        computeNextPopulateScopesForSubmetricChunkCombinationOptions(submetricChunkCombination, options)

    if (nextOptions.parameterChunkCombinationIndex > indexOfFinalElement(nextOptions.parameterChunkCombinations)) {
        return
    }

    return doOnNextEventLoop(async (): Promise<void> => {
        await populateScopesForSubmetricChunkCombination(submetricChunkCombination, nextOptions)
    })
}

const populateScopesForSubmetricChunkCombinationSync = (
    submetricChunkCombination: Combination<Chunk<Submetric>>,
    options: PopulateScopesForSubmetricChunkCombinationOptions,
): void => {
    const nextOptions =
        computeNextPopulateScopesForSubmetricChunkCombinationOptions(submetricChunkCombination, options)

    if (nextOptions.parameterChunkCombinationIndex > indexOfFinalElement(nextOptions.parameterChunkCombinations)) {
        return
    }

    populateScopesForSubmetricChunkCombinationSync(submetricChunkCombination, nextOptions)
}

export {
    populateScopesForSubmetricChunkCombination,
    populateScopesForSubmetricChunkCombinationSync,
}
