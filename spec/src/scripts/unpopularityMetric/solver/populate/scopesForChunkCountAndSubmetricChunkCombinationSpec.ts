import { Combinations, Count, Index } from "../../../../../../src/general"
import { Combination } from "../../../../../../src/general/math"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { scopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/globals"
import { INITIAL_PARAMETER_SCOPES } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/constants"
import { populateScopesForChunkCountAndSubmetricChunkCombination } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCountAndSubmetricChunkCombination"
import { ParameterChunk, SubmetricChunk } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/types"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("populateScopesForChunkCountAndSubmetricChunkCombination", () => {
    // TODO: really need to do something about these long test descriptions and multi-lining them;
    //  but we may as well wait for the day we add that linting rule
    it("for the given submetric chunk combination, proceeds through each of the parameter chunk combinations, for each one computing all possible distributions across the submetric bins of this submetric chunk combination, and for each distribution populating a scope which is the merger of it with the submetrics", async () => {
        const submetricChunkCombination: Combination<SubmetricChunk> = [
            {
                [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
            },
            {
                [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
            },
        ] as Combination<SubmetricChunk>
        const parameterChunkCombinations: Combinations<ParameterChunk> = [
            [
                {
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
                {
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
        ] as Combinations<ParameterChunk>
        const parameterChunkCombinationIndex: Index<Combination<ParameterChunk>> = 0 as Index<Combination<ParameterChunk>>
        const chunkCount: Count<Chunk> = 4 as Count<Chunk>
        const submetricChunkCombinationIndex: Index<Combination<SubmetricChunk>> = 0 as Index<Combination<SubmetricChunk>>
        const submetricChunkCombinationCount: Count<Combination<SubmetricChunk>> = 2 as Count<Combination<SubmetricChunk>>

        await populateScopesForChunkCountAndSubmetricChunkCombination(submetricChunkCombination, {
            parameterChunkCombinations,
            parameterChunkCombinationIndex,
            chunkCount,
            submetricChunkCombinationIndex,
            submetricChunkCombinationCount,
        })

        expect(scopesForChunkCount[ chunkCount ]).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
        ] as Combinations<Chunk>))
    })
})
