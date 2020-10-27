import {Io, stringify} from "../../../../general"
import {scopesToSearch, solverStatus} from "../../globals"
import {computeSortedBestMetrics} from "./sort"

const formatBestMetrics = (): Io => {
    const sortedBestMetrics = computeSortedBestMetrics()

    return stringify(sortedBestMetrics, {multiline: true})
        .replace(/\"sumOfSquares\"/g, "sumOfSquares")
        .replace(/\"submetrics\"/g, "submetrics")
        .replace(/\"name\"/g, "name")
        .replace(/\"weightAsCoefficient\"/g, "[ PopularityParameterId.WEIGHT_AS_COEFFICIENT ]")
        .replace(/\"weightAsLogarithmBase\"/g, "[ PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE ]")
        .replace(/\"weightAsPowerExponent\"/g, "[ PopularityParameterId.WEIGHT_AS_POWER_EXPONENT ]")
        .replace(/\"weightAsPowerBase\"/g, "[ PopularityParameterId.WEIGHT_AS_POWER_BASE ]")
        .replace(/\"kAsCoefficient\"/g, "[ PopularityParameterId.K_AS_COEFFICIENT ]")
        .replace(/\"kAsLogarithmBase\"/g, "[ PopularityParameterId.K_AS_LOGARITHM_BASE ]")
        .replace(/\"kAsPowerExponent\"/g, "[ PopularityParameterId.K_AS_POWER_EXPONENT ]")
        .replace(/\"kAsPowerBase\"/g, "[ PopularityParameterId.K_AS_POWER_BASE ]")
        .replace(/\"jAsCoefficient\"/g, "[ PopularityParameterId.J_AS_COEFFICIENT ]")
        .replace(/\"jAsLogarithmBase\"/g, "[ PopularityParameterId.J_AS_LOGARITHM_BASE ]")
        .replace(/\"jAsPowerExponent\"/g, "[ PopularityParameterId.J_AS_POWER_EXPONENT ]")
        .replace(/\"jAsPowerBase\"/g, "[ PopularityParameterId.J_AS_POWER_BASE ]")
        .replace(/\"aAsCoefficient\"/g, "[ PopularityParameterId.A_AS_COEFFICIENT ]")
        .replace(/\"aAsLogarithmBase\"/g, "[ PopularityParameterId.A_AS_LOGARITHM_BASE ]")
        .replace(/\"aAsPowerExponent\"/g, "[ PopularityParameterId.A_AS_POWER_EXPONENT ]")
        .replace(/\"aAsPowerBase\"/g, "[ PopularityParameterId.A_AS_POWER_BASE ]")
        .replace(/\"w\"/g, "[ PopularityParameterId.W ]")
        .replace(/\"b\"/g, "[ PopularityParameterId.B ]")
        .replace(/\"x\"/g, "[ PopularityParameterId.X ]")
        .replace(/\"u\"/g, "[ PopularityParameterId.U ]")
        .replace(/\"y\"/g, "[ PopularityParameterId.Y ]")
        .replace(/\"v\"/g, "[ PopularityParameterId.V ]")
        .replace(/\"useNuminator\"/g, "[ PopularityParameterId.USE_NUMINATOR ]")
        .replace(/\"modifiedCount\"/g, "[ PopularityParameterId.MODIFIED_COUNT ]")
        .replace(/\"usePrimeIndex\"/g, "[ PopularityParameterId.USE_PRIME_INDEX ]")
        .replace(/\"withoutRepetition\"/g, "[ PopularityParameterId.WITHOUT_REPETITION ]")
        .replace(/\"sum\"/g, "[ PopularityParameterId.SUM ]")
        .replace(/\"count\"/g, "[ PopularityParameterId.COUNT ]")
        .replace(/\"max\"/g, "[ PopularityParameterId.MAX ]") as Io
}

const formatSearchedAndPopulated = (): Io =>
    `| populated ${solverStatus.populatedScopeCount} | searched ${solverStatus.searchedScopeCount} | in the queue ${scopesToSearch.length}` as Io

const formatPercentage = (a: number, b: number): Io =>
    `${a}/${b} (${(100 * a / b).toFixed(1)}%)` as Io

export {
    formatBestMetrics,
    formatSearchedAndPopulated,
    formatPercentage,
}
