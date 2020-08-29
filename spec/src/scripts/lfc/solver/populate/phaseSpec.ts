import { Combination, Combinations, computeCombinations, Count, Index } from "../../../../../../src/general"
import * as combinations from "../../../../../../src/general/math/combinations"
import {
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
} from "../../../../../../src/scripts/lfc/globals"
import { Chunk } from "../../../../../../src/scripts/lfc/solver"
import {
    INITIAL_PARAMETER_SCOPES,
    PARAMETER_CHUNKS,
    SUBMETRIC_CHUNKS,
} from "../../../../../../src/scripts/lfc/solver/populate/constants"
import { populateScopesPhase } from "../../../../../../src/scripts/lfc/solver/populate/phase"
import * as submetricChunkCombination from "../../../../../../src/scripts/lfc/solver/populate/submetricChunkCombination"
import { Parameter, Submetric } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("populateScopesPhase", () => {
    const chunkCount = 5 as Count<Chunk>
    const chunkCountForSubmetrics = 3 as Count<Chunk<Submetric>>
    const expectedChunkCountForParameters = 2 as Count<Chunk<Parameter>>
    const submetricChunkCombinationOne = [
        {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
        },
        {
            [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
            [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
        },
    ] as unknown[] as Combination<Chunk<Submetric>>
    const submetricChunkCombinationTwo = [
        {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
        },
    ] as unknown[] as Combination<Chunk<Submetric>>
    const parameterChunkCombination = [
        {
            [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
        },
        {
            [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
            [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
        },
    ] as unknown[] as Combination<Chunk<Parameter>>
    const submetricChunkCombinations =
        [submetricChunkCombinationOne, submetricChunkCombinationTwo] as unknown[] as Combinations<Chunk<Submetric>>
    const parameterChunkCombinations = [parameterChunkCombination] as unknown[] as Combinations<Chunk<Parameter>>

    beforeEach(() => {
        spyOn(combinations, "computeCombinations").and.returnValues(
            submetricChunkCombinations,
            parameterChunkCombinations,
        )
    })

    it("calculates the correct combinations of parameters and submetrics and memoizes them", async () => {
        delete memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ]
        delete memoizedParameterChunkCombinations[ expectedChunkCountForParameters ]

        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)

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

    it("uses the memoized chunk combinations when they are available", async () => {
        memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ] = submetricChunkCombinations
        memoizedParameterChunkCombinations[ expectedChunkCountForParameters ] = parameterChunkCombinations

        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)

        expect(combinations.computeCombinations).not.toHaveBeenCalled()
    })

    it("kicks off a chain of populations of scopes for each submetric chunk combination (it will recursively call itself for each next parameter chunk combination)", async () => {
        spyOn(submetricChunkCombination, "populateScopesForSubmetricChunkCombination")

        await populateScopesPhase(chunkCount, chunkCountForSubmetrics)

        expect(submetricChunkCombination.populateScopesForSubmetricChunkCombination).toHaveBeenCalledTimes(2)
        expect(submetricChunkCombination.populateScopesForSubmetricChunkCombination).toHaveBeenCalledWith(
            submetricChunkCombinationOne,
            {
                parameterChunkCombinations,
                submetricChunkCombinationIndex: 0 as Index<Combination<Chunk<Submetric>>>,
                submetricChunkCombinationCount: 2 as Count<Combination<Chunk<Submetric>>>,
            },
        )
        expect(submetricChunkCombination.populateScopesForSubmetricChunkCombination).toHaveBeenCalledWith(
            submetricChunkCombinationTwo,
            {
                parameterChunkCombinations,
                submetricChunkCombinationIndex: 1 as Index<Combination<Chunk<Submetric>>>,
                submetricChunkCombinationCount: 2 as Count<Combination<Chunk<Submetric>>>,
            },
        )
    })

    afterEach(() => {
        expect(
            memoizedSubmetricChunkCombinations[ chunkCountForSubmetrics ],
        ).toEqual(submetricChunkCombinations)
        expect(
            memoizedParameterChunkCombinations[ expectedChunkCountForParameters ],
        ).toEqual(parameterChunkCombinations)
    })
})
