import {
    checkSubmetricsForInvalidParameterCombinations,
    Parameter,
    ParameterValue,
    Submetric,
} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("checkSubmetricsForInvalidParameterCombinations", () => {
    it("gives a good error when none of sum, count, or max are provided", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"aAsCoefficient":2} has no provided operation parameter (sum, count, or max); exactly one of these is required.`)
    })

    it("gives a good error when more than one of sum, count, or max are provided", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.COUNT ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"count":true} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
    })

    describe("logarithm base and power base", () => {
        it("gives a good error when a is tried to be used both as a logarithm base and a power base", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                    [ Parameter.A_AS_POWER_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aAsLogarithmBase":2,"aAsPowerBase":2} cannot specify a to be both a logarithm base and a power base.`)
        })

        it("gives a good error when j is tried to be used both as a logarithm base and a power base", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.J_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                    [ Parameter.J_AS_POWER_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsLogarithmBase":2,"jAsPowerBase":2} cannot specify j to be both a logarithm base and a power base.`)
        })

        it("gives a good error when k is tried to be used both as a logarithm base and a power base", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.K_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                    [ Parameter.K_AS_POWER_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kAsLogarithmBase":2,"kAsPowerBase":2} cannot specify k to be both a logarithm base and a power base.`)
        })

        it("gives a good error when weight is tried to be used both as a logarithm base and a power base", () => {
            const submetrics = [
                {
                    [ Parameter.COUNT ]: true,
                },
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightAsLogarithmBase":2,"weightAsPowerBase":2} cannot specify weight to be both a logarithm base and a power base.`)
        })
    })

    describe("j and k", () => {
        it("gives a good error when both j and k are included on the same submetric as coefficients (because you could always forever increase/decrease them together to get the same result)", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.J_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.K_AS_COEFFICIENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsCoefficient":2,"kAsCoefficient":2} cannot specify both j and k of the same type (coefficient).`)
        })
    })

    describe("denominator-specific parameters", () => {
        it("gives a good error when b is provided but not w, since b is a denominator-specific alteration of w", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.B ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"b":2} cannot specify b without w.`)
        })

        it("gives a good error when u is provided but not x, since u is a denominator-specific alteration of x", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.U ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"u":2} cannot specify u without x.`)
        })

        it("gives a good error when v is provided but not y, since v is a denominator-specific alteration of y", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.V ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"v":2} cannot specify v without y.`)
        })
    })

    describe("weighting single-submetric metrics", () => {
        it("gives a good error when a power exponent weight is provided but there's only one submetric", () => {
            const submetrics: Submetric[] = [
                {
                    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsPowerExponent":2} included a useless weight parameter.`)
        })

        it("gives a good error when a logarithm base weight is provided but there's only one submetric", () => {
            const submetrics: Submetric[] = [
                {
                    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsLogarithmBase":2} included a useless weight parameter.`)
        })

        it("gives a good error when a power base weight is provided but there's only one submetric", () => {
            const submetrics: Submetric[] = [
                {
                    [ Parameter.WEIGHT_AS_POWER_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsPowerBase":2} included a useless weight parameter.`)
        })

        it("gives a good error when a coefficient weight is provided but there's only one submetric", () => {
            const submetrics: Submetric[] = [
                {
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Metric with only one submetric {"weightAsCoefficient":2} included a useless weight parameter.`)
        })
    })

    it("gives a good error for metrics with duplicate submetrics", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_POWER_BASE ]: 2 as ParameterValue,
            },
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_POWER_BASE ]: 2 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetrics [{"sum":true,"aAsPowerBase":2},{"sum":true,"aAsPowerBase":2}] contain duplicates and thus are useless.`)
    })
})
