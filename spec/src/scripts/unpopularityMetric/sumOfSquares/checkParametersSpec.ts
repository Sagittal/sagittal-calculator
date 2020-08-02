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

    describe("base and exponent", () => {
        it("gives a good error when a is tried to be used both as a base and an exponent", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_EXPONENT ]: 2 as ParameterValue,
                    [ Parameter.A_AS_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aAsExponent":2,"aAsBase":2} cannot specify a to be both an exponent and a base.`)
        })

        it("gives a good error when j is tried to be used both as a base and an exponent", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.J_AS_EXPONENT ]: 2 as ParameterValue,
                    [ Parameter.J_AS_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsExponent":2,"jAsBase":2} cannot specify j to be both an exponent and a base.`)
        })

        it("gives a good error when k is tried to be used both as a base and an exponent", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.K_AS_EXPONENT ]: 2 as ParameterValue,
                    [ Parameter.K_AS_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kAsExponent":2,"kAsBase":2} cannot specify k to be both an exponent and a base.`)
        })

        it("gives a good error when weight is tried to be used both as a base and an exponent", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.WEIGHT_AS_EXPONENT ]: 2 as ParameterValue,
                    [ Parameter.WEIGHT_AS_BASE ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightAsExponent":2,"weightAsBase":2} cannot specify weight to be both an exponent and a base.`)
        })
    })

    describe("exponent and coefficient", () => {
        it("gives a good error when a is tried to be used both as an exponent and a coefficient", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.A_AS_EXPONENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aAsCoefficient":2,"aAsExponent":2} cannot specify a to be both a coefficient and an exponent.`)
        })

        it("gives a good error when j is tried to be used both as an exponent and a coefficient", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.J_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.J_AS_EXPONENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsCoefficient":2,"jAsExponent":2} cannot specify j to be both a coefficient and an exponent.`)
        })

        it("gives a good error when k is tried to be used both as an exponent and a coefficient", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.K_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.K_AS_EXPONENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kAsCoefficient":2,"kAsExponent":2} cannot specify k to be both a coefficient and an exponent.`)
        })

        it("gives a good error when weight is tried to be used both as an exponent and a coefficient", () => {
            const submetrics = [
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.WEIGHT_AS_EXPONENT ]: 2 as ParameterValue,
                },
            ]

            expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightAsCoefficient":2,"weightAsExponent":2} cannot specify weight to be both a coefficient and an exponent.`)
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
})
