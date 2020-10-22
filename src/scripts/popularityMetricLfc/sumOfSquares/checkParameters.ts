import {computeDeepDistinct, isUndefined, stringify} from "../../../general"
import {Parameter, Submetric} from "./types"

const checkSubmetricsForInvalidParameterCombinations = (submetrics: Submetric[]): void => {
    if (submetrics.length === 1) {
        const submetric = submetrics[0]
        if (
            !isUndefined(submetric[Parameter.WEIGHT_AS_COEFFICIENT]) ||
            !isUndefined(submetric[Parameter.WEIGHT_AS_POWER_BASE]) ||
            !isUndefined(submetric[Parameter.WEIGHT_AS_LOGARITHM_BASE]) ||
            !isUndefined(submetric[Parameter.WEIGHT_AS_POWER_EXPONENT])
        ) {
            throw new Error(`Metric with only one submetric ${stringify(submetric)} included a useless weight parameter.`)
        }
    }

    if (computeDeepDistinct(submetrics).length < submetrics.length) {
        throw new Error(`Submetrics ${stringify(submetrics)} contain duplicates and thus are useless.`)
    }

    submetrics.forEach((submetric: Submetric): void => {
        // Non-one operation parameter count
        if (!submetric[Parameter.SUM] && !submetric[Parameter.COUNT] && !submetric[Parameter.MAX]) {
            throw new Error(`Submetric ${stringify(submetric)} has no provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[Parameter.SUM] && submetric[Parameter.COUNT]) {
            throw new Error(`Submetric ${stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[Parameter.SUM] && submetric[Parameter.MAX]) {
            throw new Error(`Submetric ${stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[Parameter.COUNT] && submetric[Parameter.MAX]) {
            throw new Error(`Submetric ${stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }

        // Canceling-out bases
        if (
            !isUndefined(submetric[Parameter.A_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[Parameter.A_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify a to be both a logarithm base and a power base.`)
        }
        if (
            !isUndefined(submetric[Parameter.J_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[Parameter.J_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify j to be both a logarithm base and a power base.`)
        }
        if (
            !isUndefined(submetric[Parameter.K_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[Parameter.K_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify k to be both a logarithm base and a power base.`)
        }
        if (
            !isUndefined(submetric[Parameter.WEIGHT_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[Parameter.WEIGHT_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify weight to be both a logarithm base and a power base.`)
        }

        // As coefficients, j and k
        if (
            !isUndefined(submetric[Parameter.J_AS_COEFFICIENT]) &&
            !isUndefined(submetric[Parameter.K_AS_COEFFICIENT])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify both j and k of the same type (coefficient).`)
        }

        // Denominator-only parameters without the non-denominator-only equivalents
        if (!isUndefined(submetric[Parameter.B]) && isUndefined(submetric[Parameter.W])) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify b without w.`)
        }
        if (!isUndefined(submetric[Parameter.U]) && isUndefined(submetric[Parameter.X])) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify u without x.`)
        }
        if (!isUndefined(submetric[Parameter.V]) && isUndefined(submetric[Parameter.Y])) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify v without y.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterCombinations,
}
