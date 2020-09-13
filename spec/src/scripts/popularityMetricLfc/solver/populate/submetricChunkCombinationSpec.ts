import { Combinations, Count, Index } from "../../../../../../src/general"
import { Combination } from "../../../../../../src/general/math"
import { scopesToSearch } from "../../../../../../src/scripts/popularityMetricLfc/globals"
import { Chunk } from "../../../../../../src/scripts/popularityMetricLfc/solver"
import { INITIAL_PARAMETER_SCOPES } from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/constants"
import { populateScopesForSubmetricChunkCombination } from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/submetricChunkCombination"
import { Parameter, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("populateScopesForSubmetricChunkCombination", (): void => {
    it(
        `for the given submetric chunk combination, proceeds through each of the parameter chunk combinations,
         for each one computing all possible distributions across the submetric bins of this submetric chunk combination,
          and for each distribution populating a scope which is the merger of it with the submetrics, 
          also handling how the first submetric bin actually reformats the parameters which should be distributed to every submetric`,
        async (): Promise<void> => {
            const submetricChunkCombination: Combination<Chunk<Submetric>> = [
                // (the "all submetrics" bin, call it "AB")
                {},
                // A
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                // B
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ] as Combination<Chunk<Submetric>>
            const parameterChunkCombinations: Combinations<Chunk<Parameter>> = [
                // 1
                [
                    // i
                    {
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                    // ii
                    {
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                ],
                // 2
                [
                    // i
                    {
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                    // ii
                    {
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                ],
            ] as Combinations<Chunk<Parameter>>
            const parameterChunkCombinationIndex: Index<Combination<Chunk<Parameter>>> =
                0 as Index<Combination<Chunk<Parameter>>>
            const submetricChunkCombinationIndex: Index<Combination<Chunk<Submetric>>> =
                0 as Index<Combination<Chunk<Submetric>>>
            const submetricChunkCombinationCount: Count<Combination<Chunk<Submetric>>> =
                2 as Count<Combination<Chunk<Submetric>>>

            await populateScopesForSubmetricChunkCombination(submetricChunkCombination, {
                parameterChunkCombinations,
                parameterChunkCombinationIndex,
                submetricChunkCombinationIndex,
                submetricChunkCombinationCount,
            })
            const actual = scopesToSearch

            const expected = [
                // 1

                // AB i ii A B
                [
                    {
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB ii A i B
                [
                    {
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB ii A B i
                [
                    {
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                ],

                // AB i A ii B
                [
                    {
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB A i ii B
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB A ii B i
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                ],

                // AB i A B ii
                [
                    {
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                ],
                // AB A i B ii
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                ],
                // AB A B i ii
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                        [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                        [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                    },
                ],

                // 2

                // AB i ii A B
                [
                    {
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB ii A i B
                [
                    {
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB ii A B i
                [
                    {
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                ],

                // AB i A ii B
                [
                    {
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB A i ii B
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    },
                ],
                // AB A ii B i
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                ],

                // AB i A B ii
                [
                    {
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                ],
                // AB A i B ii
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                ],
                // AB A B i ii
                [
                    {},
                    {
                        [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                        [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    },
                    {
                        [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                        [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                        [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                    },
                ],
            ] as Combinations<Chunk>

            expect(actual).toBeArrayWithDeepEqualContents(expected)
        },
    )
})
