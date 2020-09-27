// tslint:disable max-line-length

import { Count, Ms } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { scopesToSearch, solverStatus } from "../../../../../../src/scripts/popularityMetricLfc/globals"
import { Chunk } from "../../../../../../src/scripts/popularityMetricLfc/solver"
import { populateScopes } from "../../../../../../src/scripts/popularityMetricLfc/solver/populate"
import {
    INITIAL_PARAMETER_SCOPES,
    SUBMETRIC_CHUNKS,
} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/constants"
import { Parameter, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import { adjustAsyncTimeoutForSpec } from "../../../../../helpers/adjustAsyncTimeoutForSpec"
import { onlyRunInCi } from "../../../../../helpers/onlyRunInCi"

describe("populateScopes", (): void => {
    adjustAsyncTimeoutForSpec(1000000 as Ms)

    it(
        `given a chunk count, populates all possible distributions of all possible combinations of
         parameter chunks across bins corresponding to all possible combinations of submetric chunks - 
         works for 1, where each possibility is just a single submetric chunk, 
         plus an empty 'all bins' chunk because that's just how it works to be simple`,
        async (): Promise<void> => {
            solverStatus.chunkCount = 1 as Count<Chunk>

            await populateScopes()

            // Count: 6
            expect(scopesToSearch).toEqual(
                jasmine.arrayWithExactContents(SUBMETRIC_CHUNKS.map((chunk: Chunk<Submetric>): Scope => {
                    return [{}, chunk] as Scope
                })),
            )
        },
    )

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
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {},
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],

            // 5
            [
                {},
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {},
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {},
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],

            // 4
            [
                {},
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {},
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],

            // 3
            [
                {},
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {},
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],

            // 2
            [
                {},
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {},
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],

            // 1
            [
                {},
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],

            // Submetrics 1, parameters 1: distributed parameters to the submetric directly

            // SOAPFAR (25)
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // SOAPF (25)
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // COAPFAR (25)
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {},
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // COAPF (25)
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // GPF (25)
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // LOG BASE A OF N (25)
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {},
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // Submetrics 1, parameters 1: distributed parameters to the 'all bins' submetric bin

            // SOAPFAR (25)
            [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],

            // SOAPF (25)
            [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],

            // COAPFAR (25)
            [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],

            // COAPF (25)
            [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],

            // GPF (25)
            [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],

            // LOG BASE A OF N (25)
            [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_POWER_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.B ]: INITIAL_PARAMETER_SCOPES[ Parameter.B ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.U ]: INITIAL_PARAMETER_SCOPES[ Parameter.U ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.V ]: INITIAL_PARAMETER_SCOPES[ Parameter.V ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.X ]: INITIAL_PARAMETER_SCOPES[ Parameter.X ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.K_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.J_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_COEFFICIENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_COEFFICIENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                { // Yes I see that this one is a problem... it'll just throw an error and it gets caught by that spot that is designed to catch such errors and move on
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
                },
            ],
            [
                {
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A_AS_LOGARITHM_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_LOGARITHM_BASE ],
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
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {},
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A_AS_POWER_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_AS_POWER_EXPONENT ],
                },
            ],
        ] as Scope[]
        expect(actual).toBeArrayIncludingCombinations(exampleExpectedElements)
    })
})
