// tslint:disable max-line-length

import {Combination, Combinations, Count, Index} from "@sagittal/general"
import {scopesToSearch} from "../../../../../../src/scripts/popularityMetricLfc/globals"
import {Chunk} from "../../../../../../src/scripts/popularityMetricLfc/solver"
import {INITIAL_PARAMETER_SCOPES} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/constants"
import {populateScopesForSubmetricChunkCombination} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/submetricChunkCombination"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("populateScopesForSubmetricChunkCombination", (): void => {
    it("for the given submetric chunk combination, proceeds through each of the parameter chunk combinations, for each one computing all possible distributions across the submetric bins of this submetric chunk combination, and for each distribution populating a scope which is the merger of it with the submetrics, also handling how the first submetric bin actually reformats the parameters which should be distributed to every submetric", async (): Promise<void> => {
        const submetricChunkCombination: Combination<Chunk<Submetric>> = [
            // (the "all submetrics" bin, call it "AB")
            {},
            // A
            {
                [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
            },
            // B
            {
                [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
            },
        ] as Combination<Chunk<Submetric>>
        const parameterChunkCombinations: Combinations<Chunk<PopularityParameterId>> = [
            // 1
            [
                // I
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                // II
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            // 2
            [
                // I
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                // II
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
        ] as Combinations<Chunk<PopularityParameterId>>
        const parameterChunkCombinationIndex: Index<Combination<Chunk<PopularityParameterId>>> =
            0 as Index<Combination<Chunk<PopularityParameterId>>>
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

        const expected = [
            // 1

            // AB i ii A B
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB ii A i B
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB ii A B i
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],

            // AB i A ii B
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB A i ii B
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB A ii B i
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],

            // AB i A B ii
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            // AB A i B ii
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            // AB A B i ii
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],

            // 2

            // AB i ii A B
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB ii A i B
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB ii A B i
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],

            // AB i A ii B
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB A i ii B
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            // AB A ii B i
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // AB i A B ii
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            // AB A i B ii
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            // AB A B i ii
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
        ] as Combinations<Chunk>

        expect(scopesToSearch).toBeArrayWithDeepEqualContents(expected)
    })
})
