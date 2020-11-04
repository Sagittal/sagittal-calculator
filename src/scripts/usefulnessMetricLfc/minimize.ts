import {Comma, count, LogTarget, Min, saveLog, stringify, Sum} from "../../general"
import {CommaClassId} from "../../sagittal"
import {EXCLUDED_COMMAS} from "./constants"
import {computeUsefulnessMetricScoreForCommaZone} from "./metricScoreForZone"
import {computeUsefulnessParameterSets} from "./parameters"
import {
    UsefulnessMetric,
    UsefulnessMetricFamilyId,
    UsefulnessMetricScoreForZone,
    UsefulnessParameterId,
    UsefulnessParameterSet,
} from "./types"
import {computeZoneCommaEntries} from "./zoneCommas"

// TODO: usefulness - probably acceptable to eliminate this "ties" functionality as it is unlikely to ever tie
//  Though in its place won't you want essentially the local minima functionality?
//  Well actually we did get 11 ties for one of the metrics, but I still think local minima would be better now

const logUsefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore = (
    [
        usefulnessMetricFamilyId,
        {metric, parameters},
    ]: [UsefulnessMetricFamilyId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}],
): void => {
    saveLog(`\nRUNNING FOR USEFULNESS METRIC FAMILY ${usefulnessMetricFamilyId}`, LogTarget.PROGRESS)

    const usefulnessParameterSets = computeUsefulnessParameterSets(parameters)
    const countUsefulnessParameterSetsForUsefulnessMetricFamily = count(usefulnessParameterSets)

    let minMetricScore = Infinity as Min<Sum<UsefulnessMetricScoreForZone>>
    let usefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore = [] as UsefulnessParameterSet[]

    usefulnessParameterSets.forEach((usefulnessParameterSet: UsefulnessParameterSet, index: number): void => {
        let metricScore = 0 as Sum<UsefulnessMetricScoreForZone>

        const zoneCommaEntries = computeZoneCommaEntries()
        zoneCommaEntries.forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
            if (EXCLUDED_COMMAS.includes(commaClassId)) return

            const usefulnessMetricScoreForCommaZone =
                computeUsefulnessMetricScoreForCommaZone([commaClassId, commas], metric, usefulnessParameterSet)
            saveLog(
                `usefulness metric score for ${commaClassId}: ${usefulnessMetricScoreForCommaZone}`,
                LogTarget.DETAILS,
            )
            metricScore = metricScore + usefulnessMetricScoreForCommaZone as Sum<UsefulnessMetricScoreForZone>
        })

        if (metricScore === minMetricScore) {
            usefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore.push(usefulnessParameterSet)
        } else if (metricScore < minMetricScore) {
            minMetricScore = metricScore as Min<Sum<UsefulnessMetricScoreForZone>>
            usefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore = [usefulnessParameterSet]
        }

        saveLog(`Usefulness parameter set (${index}/${countUsefulnessParameterSetsForUsefulnessMetricFamily}): ${stringify(usefulnessParameterSet)} -> metric score ${metricScore}`, LogTarget.PROGRESS)
    })

    saveLog(`Usefulness parameter sets for usefulness metric family ${usefulnessMetricFamilyId} which minimize its metric score, all bringing it to ${minMetricScore} (count of ties ${count(usefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore)}): ${stringify(usefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore)}`, LogTarget.FINAL)
}

export {
    logUsefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore,
}
