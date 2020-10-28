// tslint:disable max-line-length

import {Count, Ms} from "../../../../../../src/general"
import {Scope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {scopesToSearch, solverStatus} from "../../../../../../src/scripts/popularityMetricLfc/globals"
import {Chunk} from "../../../../../../src/scripts/popularityMetricLfc/solver"
import {populateScopes} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate"
import {
    INITIAL_PARAMETER_SCOPES,
    SUBMETRIC_CHUNKS,
} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/constants"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {adjustAsyncTimeoutForSpec} from "../../../../../helpers/adjustAsyncTimeoutForSpec"
import {onlyRunInCi} from "../../../../../helpers/onlyRunInCi"

describe("populateScopes", (): void => {
    adjustAsyncTimeoutForSpec(1000000 as Ms)

    it("given a chunk count, populates all possible distributions of all possible combinations of parameter chunks across bins corresponding to all possible combinations of submetric chunks - works for 1, where each possibility is just a single submetric chunk, plus an empty 'all bins' chunk because that's just how it works to be simple", async (): Promise<void> => {
        solverStatus.chunkCount = 1 as Count<Chunk>

        await populateScopes()

        // Count: 6
        expect(scopesToSearch).toBeArrayWithDeepEqualContents(
            SUBMETRIC_CHUNKS.map((chunk: Chunk<Submetric>): Scope => {
                return [{}, chunk] as Scope
            }),
        )
    })

    // Need to add the extra 7 bits (18 to 25) to each section below
    it("given a chunk count, populates all possible combinations of those parameters - works for 2", async (): Promise<void> => {
        onlyRunInCi()

        solverStatus.chunkCount = 2 as Count<Chunk>

        await populateScopes()

        // With repetitions is not useful when the chunk count for submetrics is more than 1 more than
        // The chunk count for parameters (because then you're inevitably going to end up with two submetric scopes
        // That are identical) (and wait no, it's even more complicated than that,
        // Because if you had 3 submetric chunks you could have 2 of them repeat and the 3rd was different,
        // So just 1 parameter would be enough to differentiate the 2 same submetrics),
        // But due to the complications that would arise from memoizing those separately
        // I am just not going to deal with it

        const expected = [
            // Submetrics: 2, parameters: 0

            // 6
            [
                {},
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],

            // 5
            [
                {},
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {},
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {},
                { // SOAPF
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],

            // 4
            [
                {},
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {},
                { // COAPFAR
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],

            // 3
            [
                {},
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {},
                { // COAPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],

            // 2
            [
                {},
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {},
                { // GPF
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],

            // 1
            [
                {},
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                { // LOG BASE A OF N
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],

            // Submetrics 1, parameters 1: distributed parameters to the submetric directly

            // SOAPFAR (25)
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // SOAPF (25)
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // COAPFAR (25)
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // COAPF (25)
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // GPF (25)
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // LOG BASE A OF N (25)
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
            ],

            // Submetrics 1, parameters 1: distributed parameters to the 'all bins' submetric bin

            // SOAPFAR (25)
            [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                },
            ],

            // SOAPF (25)
            [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                },
            ],

            // COAPFAR (25)
            [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],

            // COAPF (25)
            [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],

            // GPF (25)
            [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
            ],

            // LOG BASE A OF N (25)
            [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WEIGHT_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_POWER_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.B]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.B],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.U]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.U],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.V]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.V],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.X]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.X],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.K_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.K_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.J_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.J_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_COEFFICIENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_COEFFICIENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                { // Yes I see that this one is a problem... it'll just throw an error and it gets caught by that spot that is designed to catch such errors and move on
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.W]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.W],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.Y]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.Y],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_NUMINATOR]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_NUMINATOR],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.USE_PRIME_INDEX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.USE_PRIME_INDEX],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
            [
                {
                    [PopularityParameterId.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MODIFIED_COUNT],
                },
                {
                    [PopularityParameterId.SUM]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.SUM],
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_LOGARITHM_BASE],
                },
            ],
        ] as Scope[]

        const actual: Scope[] = scopesToSearch

        // 321 =
        //      ((2+6-1)!)/((2!)((6-1)!)) * ((0+25-1)!)/((0!)((25-1)!)) * 3^0 = 21 * 1 * 1 = 21
        //      +
        //      ((1+6-1)!)/((1!)((6-1)!)) * ((1+25-1)!)/((1!)((25-1)!)) * 2^1 = 6 * 25 * 2 = 300
        expect(actual.length).toBe(321)
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("given a chunk count, populates all possible combinations of those parameters - works for 3", async (): Promise<void> => {
        onlyRunInCi()

        solverStatus.chunkCount = 3 as Count<Chunk>

        await populateScopes()

        const actual: Scope[] = scopesToSearch

        expect(actual.length).toEqual( // 56 + 1575 + 7800 = 9431
            56 + // All combinations of 3 submetrics = 6 choose 3 w/re = ((3+6-1)!)/((3!)((6-1)!)) = 56, but that times all combinations of 0 parameters = 25 choose 0 w/re = ((0+25-1)!)/((0!)((25-1)!)) =   1, so 56 *  1 =   56, but then that times 1 bc for each one you can distribute the parameters across the submetrics 4^0 ways, so   56  * 1 =   56
            1575 +         // All combinations of 2 submetrics = 6 choose 2 w/re = ((2+6-1)!)/((2!)((6-1)!)) = 21, but that times all combinations of 1 parameters = 25 choose 1 w/re = ((1+25-1)!)/((1!)((25-1)!)) =  25, so 21 * 25 =  525, but then that times 2 bc for each one you can distribute the parameters across the submetrics 3^1 ways, so  525 * 3 = 1575
            7800,         // All combinations of 1 submetric  = 6 choose 1 w/re = ((1+6-1)!)/((1!)((6-1)!)) =  6, but that times all combinations of 2 parameters = 25 choose 2 w/re = ((2+25-1)!)/((2!)((25-1)!)) = 325, so 6 * 325 = 1950, but then that times 1 bc for each one you can distribute the parameters across the submetrics 2^2 ways, so 1950 * 4 = 7800
        )
        const exampleExpectedElements: Scope[] = [
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                },
            ],
            [
                {},
                {
                    [PopularityParameterId.WITHOUT_REPETITION]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.WITHOUT_REPETITION],
                    [PopularityParameterId.MAX]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.MAX],
                },
                {
                    [PopularityParameterId.COUNT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.COUNT],
                    [PopularityParameterId.A_AS_POWER_EXPONENT]: INITIAL_PARAMETER_SCOPES[PopularityParameterId.A_AS_POWER_EXPONENT],
                },
            ],
        ] as Scope[]
        expect(actual).toBeArrayIncludingCombinations(exampleExpectedElements)
    })
})
