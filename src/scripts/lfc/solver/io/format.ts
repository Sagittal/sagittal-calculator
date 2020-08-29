import { IO } from "../../../../general"
import { scopesToSearch, solverStatus } from "../../globals"
import { computeSortedBestMetrics } from "./sort"

const formatBestMetrics = (): IO => {
    const sortedBestMetrics = computeSortedBestMetrics()

    return JSON.stringify(sortedBestMetrics, undefined, 4)
        .replace(/\"sumOfSquares\"/g, "sumOfSquares")
        .replace(/\"submetrics\"/g, "submetrics")
        .replace(/\"name\"/g, "name")
        .replace(/\"weightAsCoefficient\"/g, "[ Parameter.WEIGHT_AS_COEFFICIENT ]")
        .replace(/\"weightAsLogarithmBase\"/g, "[ Parameter.WEIGHT_AS_LOGARITHM_BASE ]")
        .replace(/\"weightAsPowerExponent\"/g, "[ Parameter.WEIGHT_AS_POWER_EXPONENT ]")
        .replace(/\"weightAsPowerBase\"/g, "[ Parameter.WEIGHT_AS_POWER_BASE ]")
        .replace(/\"kAsCoefficient\"/g, "[ Parameter.K_AS_COEFFICIENT ]")
        .replace(/\"kAsLogarithmBase\"/g, "[ Parameter.K_AS_LOGARITHM_BASE ]")
        .replace(/\"kAsPowerExponent\"/g, "[ Parameter.K_AS_POWER_EXPONENT ]")
        .replace(/\"kAsPowerBase\"/g, "[ Parameter.K_AS_POWER_BASE ]")
        .replace(/\"jAsCoefficient\"/g, "[ Parameter.J_AS_COEFFICIENT ]")
        .replace(/\"jAsLogarithmBase\"/g, "[ Parameter.J_AS_LOGARITHM_BASE ]")
        .replace(/\"jAsPowerExponent\"/g, "[ Parameter.J_AS_POWER_EXPONENT ]")
        .replace(/\"jAsPowerBase\"/g, "[ Parameter.J_AS_POWER_BASE ]")
        .replace(/\"aAsCoefficient\"/g, "[ Parameter.A_AS_COEFFICIENT ]")
        .replace(/\"aAsLogarithmBase\"/g, "[ Parameter.A_AS_LOGARITHM_BASE ]")
        .replace(/\"aAsPowerExponent\"/g, "[ Parameter.A_AS_POWER_EXPONENT ]")
        .replace(/\"aAsPowerBase\"/g, "[ Parameter.A_AS_POWER_BASE ]")
        .replace(/\"w\"/g, "[ Parameter.W ]")
        .replace(/\"b\"/g, "[ Parameter.B ]")
        .replace(/\"x\"/g, "[ Parameter.X ]")
        .replace(/\"u\"/g, "[ Parameter.U ]")
        .replace(/\"y\"/g, "[ Parameter.Y ]")
        .replace(/\"v\"/g, "[ Parameter.V ]")
        .replace(/\"useNuminator\"/g, "[ Parameter.USE_NUMINATOR ]")
        .replace(/\"modifiedCount\"/g, "[ Parameter.MODIFIED_COUNT ]")
        .replace(/\"usePrimeIndex\"/g, "[ Parameter.USE_PRIME_INDEX ]")
        .replace(/\"withoutRepetition\"/g, "[ Parameter.WITHOUT_REPETITION ]")
        .replace(/\"sum\"/g, "[ Parameter.SUM ]")
        .replace(/\"count\"/g, "[ Parameter.COUNT ]")
        .replace(/\"max\"/g, "[ Parameter.MAX ]") as IO
}

const formatSearchedAndPopulated = (): IO =>
    `| populated ${solverStatus.populatedScopeCount} | searched ${solverStatus.searchedScopeCount} | in the queue ${scopesToSearch.length}` as IO

const formatPercentage = (a: number, b: number): IO =>
    `${a}/${b} (${(100 * a / b).toPrecision(3)}%)` as IO

export {
    formatBestMetrics,
    formatSearchedAndPopulated,
    formatPercentage,
}
