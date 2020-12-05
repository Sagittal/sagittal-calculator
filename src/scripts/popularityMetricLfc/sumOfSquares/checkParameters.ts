import {computeDeepDistinct, isUndefined, stringify} from "@sagittal/general"
import {PopularityParameterId, Submetric} from "./types"

const checkSubmetricsForInvalidParameterCombinations = (submetrics: Submetric[]): void => {
    if (submetrics.length === 1) {
        const submetric = submetrics[0]
        if (
            !isUndefined(submetric[PopularityParameterId.WEIGHT_AS_COEFFICIENT]) ||
            !isUndefined(submetric[PopularityParameterId.WEIGHT_AS_POWER_BASE]) ||
            !isUndefined(submetric[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]) ||
            !isUndefined(submetric[PopularityParameterId.WEIGHT_AS_POWER_EXPONENT])
        ) {
            throw new Error(`Metric with only one submetric ${stringify(submetric)} included a moot weight parameter.`)
        }
    }

    if (computeDeepDistinct(submetrics).length < submetrics.length) {
        throw new Error(`Submetrics ${stringify(submetrics)} contain duplicates and thus are moot.`)
    }

    submetrics.forEach((submetric: Submetric): void => {
        // Non-one operation parameter count
        if (
            !submetric[PopularityParameterId.SUM]
            && !submetric[PopularityParameterId.COUNT]
            && !submetric[PopularityParameterId.MAX]
        ) {
            throw new Error(`Submetric ${stringify(submetric)} has no provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[PopularityParameterId.SUM] && submetric[PopularityParameterId.COUNT]) {
            throw new Error(`Submetric ${stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[PopularityParameterId.SUM] && submetric[PopularityParameterId.MAX]) {
            throw new Error(`Submetric ${stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[PopularityParameterId.COUNT] && submetric[PopularityParameterId.MAX]) {
            throw new Error(`Submetric ${stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }

        // Canceling-out bases
        if (
            !isUndefined(submetric[PopularityParameterId.A_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[PopularityParameterId.A_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify a to be both a logarithm base and a power base.`)
        }
        if (
            !isUndefined(submetric[PopularityParameterId.J_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[PopularityParameterId.J_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify j to be both a logarithm base and a power base.`)
        }
        if (
            !isUndefined(submetric[PopularityParameterId.K_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[PopularityParameterId.K_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify k to be both a logarithm base and a power base.`)
        }
        if (
            !isUndefined(submetric[PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]) &&
            !isUndefined(submetric[PopularityParameterId.WEIGHT_AS_POWER_BASE])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify weight to be both a logarithm base and a power base.`)
        }

        // As coefficients, j and k
        if (
            !isUndefined(submetric[PopularityParameterId.J_AS_COEFFICIENT]) &&
            !isUndefined(submetric[PopularityParameterId.K_AS_COEFFICIENT])
        ) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify both j and k of the same type (coefficient).`)
        }

        // Denominator-only parameters without the non-denominator-only equivalents
        if (!isUndefined(submetric[PopularityParameterId.B]) && isUndefined(submetric[PopularityParameterId.W])) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify b without w.`)
        }
        if (!isUndefined(submetric[PopularityParameterId.U]) && isUndefined(submetric[PopularityParameterId.X])) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify u without x.`)
        }
        if (!isUndefined(submetric[PopularityParameterId.V]) && isUndefined(submetric[PopularityParameterId.Y])) {
            throw new Error(`Submetric ${stringify(submetric)} cannot specify v without y.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterCombinations,
}
