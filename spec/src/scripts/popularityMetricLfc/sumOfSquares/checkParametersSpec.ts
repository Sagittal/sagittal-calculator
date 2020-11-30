import {Parameter} from "../../../../../src/general"
import {
    checkSubmetricsForInvalidParameterCombinations,
    PopularityParameterId,
    Submetric,
} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("checkSubmetricsForInvalidParameterCombinations", (): void => {
    it("gives a good error when none of sum, count, or max are provided", (): void => {
        const submetrics: Submetric[] = [
            {
                [PopularityParameterId.A_AS_COEFFICIENT]: 2 as Parameter,
            },
        ]

        expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"aAsCoefficient":2} has no provided operation parameter (sum, count, or max); exactly one of these is required.`)
    })

    it("gives a good error when more than one of sum, count, or max are provided", (): void => {
        const submetrics: Submetric[] = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.COUNT]: true,
            },
        ]

        expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"count":true} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
    })

    describe("logarithm base and power base", (): void => {
        it("gives a good error when a is tried to be used both as a logarithm base and a power base", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
                    [PopularityParameterId.A_AS_POWER_BASE]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aAsLogarithmBase":2,"aAsPowerBase":2} cannot specify a to be both a logarithm base and a power base.`)
        })

        it("gives a good error when j is tried to be used both as a logarithm base and a power base", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.J_AS_LOGARITHM_BASE]: 2 as Parameter,
                    [PopularityParameterId.J_AS_POWER_BASE]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsLogarithmBase":2,"jAsPowerBase":2} cannot specify j to be both a logarithm base and a power base.`)
        })

        it("gives a good error when k is tried to be used both as a logarithm base and a power base", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.K_AS_LOGARITHM_BASE]: 2 as Parameter,
                    [PopularityParameterId.K_AS_POWER_BASE]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kAsLogarithmBase":2,"kAsPowerBase":2} cannot specify k to be both a logarithm base and a power base.`)
        })

        it("gives a good error when weight is tried to be used both as a logarithm base and a power base", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.COUNT]: true,
                },
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: 2 as Parameter,
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightAsLogarithmBase":2,"weightAsPowerBase":2} cannot specify weight to be both a logarithm base and a power base.`)
        })
    })

    describe("j and k", (): void => {
        it("gives a good error when both j and k are included on the same submetric as coefficients (because you could always forever increase/decrease them together to get the same result)", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.J_AS_COEFFICIENT]: 2 as Parameter,
                    [PopularityParameterId.K_AS_COEFFICIENT]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsCoefficient":2,"kAsCoefficient":2} cannot specify both j and k of the same type (coefficient).`)
        })
    })

    describe("denominator-specific parameters", (): void => {
        it("gives a good error when b is provided but not w, since b is a denominator-specific alteration of w          ", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.B]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"b":2} cannot specify b without w.`)
        })

        it("gives a good error when u is provided but not x, since u is a denominator-specific alteration of x            ", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.U]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"u":2} cannot specify u without x.`)
        })

        it("gives a good error when v is provided but not y, since v is a denominator-specific alteration of y          ", (): void => {
            const submetrics = [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.V]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"v":2} cannot specify v without y.`)
        })
    })

    describe("weighting single-submetric metrics", (): void => {
        it("gives a good error when a power exponent weight is provided but there's only one submetric", (): void => {
            const submetrics: Submetric[] = [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsPowerExponent":2} included a moot weight parameter.`)
        })

        it("gives a good error when a logarithm base weight is provided but there's only one submetric", (): void => {
            const submetrics: Submetric[] = [
                {
                    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsLogarithmBase":2} included a moot weight parameter.`)
        })

        it("gives a good error when a power base weight is provided but there's only one submetric", (): void => {
            const submetrics: Submetric[] = [
                {
                    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsPowerBase":2} included a moot weight parameter.`)
        })

        it("gives a good error when a coefficient weight is provided but there's only one submetric", (): void => {
            const submetrics: Submetric[] = [
                {
                    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 2 as Parameter,
                },
            ]

            expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsCoefficient":2} included a moot weight parameter.`)
        })
    })

    it("gives a good error for metrics with duplicate submetrics", (): void => {
        const submetrics: Submetric[] = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_POWER_BASE]: 2 as Parameter,
            },
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_POWER_BASE]: 2 as Parameter,
            },
        ]

        expect((): void => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetrics [{"sum":true,"aAsPowerBase":2},{"sum":true,"aAsPowerBase":2}] contain duplicates and thus are moot.`)
    })
})
