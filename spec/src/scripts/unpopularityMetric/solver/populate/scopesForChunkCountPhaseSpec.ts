import { Combination, Combinations, computeCombinations, Count, Index } from "../../../../../../src/general"
import * as combinations from "../../../../../../src/general/math/combinations"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import {
    cachedParameterChunkCombinations,
    cachedSubmetricChunkCombinations,
} from "../../../../../../src/scripts/unpopularityMetric/solver/globals"
import {
    INITIAL_PARAMETER_SCOPES,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
} from "../../../../../../src/scripts/unpopularityMetric/solver/populate/constants"
import * as scopesForChunkCountAndSubmetricChunkCombination
    from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCountAndSubmetricChunkCombination"
import { populateScopesForChunkCountPhase } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCountPhase"
import { ParameterChunk, SubmetricChunk } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/types"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("populateScopesForChunkCountPhase", () => {
    const chunkCount = 5 as Count<Chunk>
    const chunkCountForSubmetrics = 3 as Count<SubmetricChunk>
    const expectedChunkCountForParameters = 2 as Count<ParameterChunk>
    const submetricChunkCombinationOne = [
        {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        },
        {
            [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
            [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
        },
    ] as unknown as Combination<SubmetricChunk>
    const submetricChunkCombinationTwo = [
        {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
        },
    ] as unknown as Combination<SubmetricChunk>
    const parameterChunkCombination = [
        {
            [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        },
        {
            [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
            [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
        },
    ] as unknown as Combination<ParameterChunk>
    const submetricChunkCombinations = [submetricChunkCombinationOne, submetricChunkCombinationTwo] as unknown as Combinations<SubmetricChunk>
    const parameterChunkCombinations = [parameterChunkCombination] as unknown as Combinations<ParameterChunk>

    beforeEach(() => {
        spyOn(combinations, "computeCombinations").and.returnValues(
            submetricChunkCombinations,
            parameterChunkCombinations,
        )
    })

    it("calculates the correct combinations of parameters and submetrics and caches them", async () => {
        delete cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
        delete cachedParameterChunkCombinations[ expectedChunkCountForParameters ]

        await populateScopesForChunkCountPhase(chunkCount, chunkCountForSubmetrics)

        expect(combinations.computeCombinations).toHaveBeenCalledWith(
            SUBMETRIC_CHUNKS,
            chunkCountForSubmetrics,
            { withRepeatedElements: true },
        )
        expect(combinations.computeCombinations).toHaveBeenCalledWith(
            PARAMETER_CHUNKS,
            expectedChunkCountForParameters,
            { withRepeatedElements: true },
        )
    })

    it("uses the cached chunk combinations when they are available", async () => {
        cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
        cachedParameterChunkCombinations[ expectedChunkCountForParameters ] = parameterChunkCombinations

        await populateScopesForChunkCountPhase(chunkCount, chunkCountForSubmetrics)

        expect(combinations.computeCombinations).not.toHaveBeenCalled()
    })

    it("kicks off a chain of populations of scopes for each submetric chunk combination (it will recursively call itself for each next parameter chunk combination)", async () => {
        spyOn(scopesForChunkCountAndSubmetricChunkCombination, "populateScopesForChunkCountAndSubmetricChunkCombination")

        await populateScopesForChunkCountPhase(chunkCount, chunkCountForSubmetrics)

        expect(scopesForChunkCountAndSubmetricChunkCombination.populateScopesForChunkCountAndSubmetricChunkCombination).toHaveBeenCalledTimes(2)
        expect(scopesForChunkCountAndSubmetricChunkCombination.populateScopesForChunkCountAndSubmetricChunkCombination).toHaveBeenCalledWith(
            submetricChunkCombinationOne,
            {
                parameterChunkCombinations,
                submetricChunkCombinationIndex: 0 as Index<Combination<SubmetricChunk>>,
                submetricChunkCombinationCount: 2 as Count<Combination<SubmetricChunk>>,
                chunkCount,
            },
        )
        expect(scopesForChunkCountAndSubmetricChunkCombination.populateScopesForChunkCountAndSubmetricChunkCombination).toHaveBeenCalledWith(
            submetricChunkCombinationTwo,
            {
                parameterChunkCombinations,
                submetricChunkCombinationIndex: 1 as Index<Combination<SubmetricChunk>>,
                submetricChunkCombinationCount: 2 as Count<Combination<SubmetricChunk>>,
                chunkCount,
            },
        )
    })

    afterEach(() => {
        expect(cachedSubmetricChunkCombinations[ chunkCountForSubmetrics ]).toEqual(submetricChunkCombinations)
        expect(cachedParameterChunkCombinations[ expectedChunkCountForParameters ]).toEqual(parameterChunkCombinations)
    })
})
