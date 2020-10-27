import {Combination, Combinations, computeCombinations, Count, Index} from "../../../../../../src/general"
import * as combinations from "../../../../../../src/general/math/combinations"
import {
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
} from "../../../../../../src/scripts/popularityMetricLfc/globals"
import {Chunk} from "../../../../../../src/scripts/popularityMetricLfc/solver"
import {
    INITIAL_PARAMETER_SCOPES,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/constants"
import {populateScopesPhase} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/phase"
import * as submetricChunkCombination
    from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/submetricChunkCombination"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("populateScopesPhase", (): void => {
    const chunkCount = 5 as Count<Chunk>
    const chunkCountForSubmetrics = 3 as Count<Chunk<Submetric>>
    const expectedChunkCountForParameters = 2 as Count<Chunk<PopularityParameterId>>
    const submetricChunkCombinationA = [
        {
            [PopularityParameterId.SUM]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
        },
        {
            [PopularityParameterId.WITHOUT_REPETITION]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
            [PopularityParameterId.COUNT]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
        },
    ] as unknown[] as Combination<Chunk<Submetric>>
    const submetricChunkCombinationB = [
        {
            [PopularityParameterId.SUM]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
            [PopularityParameterId.WITHOUT_REPETITION]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
        },
    ] as unknown[] as Combination<Chunk<Submetric>>
    const parameterChunkCombination = [
        {
            [PopularityParameterId.A_AS_COEFFICIENT]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
        },
        {
            [PopularityParameterId.A_AS_COEFFICIENT]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
            [PopularityParameterId.A_AS_LOGARITHM_BASE]:
                INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
        },
    ] as unknown[] as Combination<Chunk<PopularityParameterId>>
    const submetricChunkCombinations = [submetricChunkCombinationA, submetricChunkCombinationB] as unknown[] as
        Combinations<Chunk<Submetric>>
    const parameterChunkCombinations = [parameterChunkCombination] as unknown[] as
        Combinations<Chunk<PopularityParameterId>>

    beforeEach((): void => {
        spyOn(combinations, "computeCombinations").and.returnValues(
            submetricChunkCombinations,
            parameterChunkCombinations,
        )
    })

    it("calculates the correct combinations of parameters and submetrics and memoizes them                                    ", async (): Promise<void> => {
        delete memoizedSubmetricChunkCombinations[chunkCountForSubmetrics]
        delete memoizedParameterChunkCombinations[expectedChunkCountForParameters]

        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)

        expect(combinations.computeCombinations).toHaveBeenCalledWith(
            SUBMETRIC_CHUNKS,
            chunkCountForSubmetrics,
            {withRepeatedElements: true},
        )
        expect(combinations.computeCombinations).toHaveBeenCalledWith(
            PARAMETER_CHUNKS,
            expectedChunkCountForParameters,
            {withRepeatedElements: true},
        )
    })

    it("uses the memoized chunk combinations when they are available", async (): Promise<void> => {
        memoizedSubmetricChunkCombinations[chunkCountForSubmetrics] = submetricChunkCombinations
        memoizedParameterChunkCombinations[expectedChunkCountForParameters] = parameterChunkCombinations

        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)

        expect(combinations.computeCombinations).not.toHaveBeenCalled()
    })

    it("kicks off a chain of populations of scopes for each submetric chunk combination (it will recursively call itself for each next parameter chunk combination)", async (): Promise<void> => {
        spyOn(submetricChunkCombination, "populateScopesForSubmetricChunkCombination")

        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)

        expect(submetricChunkCombination.populateScopesForSubmetricChunkCombination).toHaveBeenCalledTimes(2)
        expect(submetricChunkCombination.populateScopesForSubmetricChunkCombination).toHaveBeenCalledWith(
            submetricChunkCombinationA,
            {
                parameterChunkCombinations,
                parameterChunkCombinationIndex: 0 as Index<Combination<Chunk<PopularityParameterId>>>,
                submetricChunkCombinationIndex: 0 as Index<Combination<Chunk<Submetric>>>,
                submetricChunkCombinationCount: 2 as Count<Combination<Chunk<Submetric>>>,
            },
        )
        expect(submetricChunkCombination.populateScopesForSubmetricChunkCombination).toHaveBeenCalledWith(
            submetricChunkCombinationB,
            {
                parameterChunkCombinations,
                parameterChunkCombinationIndex: 0 as Index<Combination<Chunk<PopularityParameterId>>>,
                submetricChunkCombinationIndex: 1 as Index<Combination<Chunk<Submetric>>>,
                submetricChunkCombinationCount: 2 as Count<Combination<Chunk<Submetric>>>,
            },
        )
    })

    afterEach((): void => {
        expect(
            memoizedSubmetricChunkCombinations[chunkCountForSubmetrics],
        ).toEqual(submetricChunkCombinations)
        expect(
            memoizedParameterChunkCombinations[expectedChunkCountForParameters],
        ).toEqual(parameterChunkCombinations)
    })
})
