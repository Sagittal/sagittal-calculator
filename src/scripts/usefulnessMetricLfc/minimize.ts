import {Comma, count, LogTarget, saveLog, stringify} from "../../general"
import {CommaClassId} from "../../sagittal"
import {EXCLUDED_COMMAS} from "./constants"
import {computeUsefulnessParameterSets} from "./parameters"
import {computeSquaredUsefulnessScoreDistanceFromBestUsefulnessScoreInZone} from "./squaredUsefulnessScoreDistanceFromBestUsefulnessScoreInZone"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId, UsefulnessParameterSet} from "./types"
import {computeZoneCommaEntries} from "./zoneCommas"

const logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares = (
    [
        usefulnessMetricId,
        {metric, parameters},
    ]: [UsefulnessMetricId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}],
): void => {
    saveLog(`\nRUNNING FOR USEFULNESS METRIC ${usefulnessMetricId}`, LogTarget.PROGRESS)

    const usefulnessParameterSets = computeUsefulnessParameterSets(parameters)
    const countUsefulnessParameterSets = count(usefulnessParameterSets)

    let minSumOfSquares = Infinity
    // TODO: probably acceptable to eliminate this "ties" functionality as it is unlikely to ever tie
    //  Though in its place won't you want essentially the local minima functionality?
    //  Well actually we did get 11 ties for one of the metrics, but I still think local minima would be better now
    let usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful = [] as UsefulnessParameterSet[]

    usefulnessParameterSets.forEach((usefulnessParameterSet: UsefulnessParameterSet, index: number): void => {
        let sumOfSquares = 0

        const zoneCommaEntries = computeZoneCommaEntries()

        zoneCommaEntries.forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
            if (EXCLUDED_COMMAS.includes(commaClassId)) return

            const squaredDistanceFromMostUsefulCommaInZone =
                computeSquaredUsefulnessScoreDistanceFromBestUsefulnessScoreInZone(
                    [commaClassId, commas],
                    metric,
                    usefulnessParameterSet,
                )

            // TODO: add command line option for excluding any distances > 1
            //  See: http://forum.sagittal.org/viewtopic.php?p=2575#p2575
            sumOfSquares = sumOfSquares + squaredDistanceFromMostUsefulCommaInZone
        })

        if (sumOfSquares === minSumOfSquares) {
            usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful.push(usefulnessParameterSet)
        } else if (sumOfSquares < minSumOfSquares) {
            minSumOfSquares = sumOfSquares
            usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful = [usefulnessParameterSet]
        }

        saveLog(`Usefulness parameter set (${index}/${countUsefulnessParameterSets}): ${stringify(usefulnessParameterSet)} -> sum of squares ${sumOfSquares}`, LogTarget.PROGRESS)
    })

    saveLog(`Usefulness parameter sets for usefulness metric ${usefulnessMetricId} which minimize the sum of squares, all bringing it to ${minSumOfSquares} (count of ties ${count(usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful)}): ${stringify(usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful)}`, LogTarget.FINAL)
}

export {
    logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares,
}
