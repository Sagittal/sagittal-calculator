import {Comma, count, increment, LogTarget, saveLog, stringify} from "../../general"
import {CommaClassId} from "../../sagittal"
import {EXCLUDED_COMMAS} from "./constants"
import {isCommaMostUsefulInZone} from "./isCommaMostUsefulInZone"
import {computeUsefulnessParameterSets} from "./parameters"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId, UsefulnessParameterSet} from "./types"
import {computeZoneCommaEntries} from "./zoneCommas"

// TODO: of course this is pretty not DRY with the minimize.module. You might want to consolidate
//  And when you do, test cover the exclusion of 14641 and 19/4375

const logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount = (
    [
        usefulnessMetricId,
        {metric, parameters},
    ]: [UsefulnessMetricId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}],
): void => {
    saveLog(`\nRUNNING FOR USEFULNESS METRIC ${usefulnessMetricId}`, LogTarget.PROGRESS)

    const usefulnessParameterSets = computeUsefulnessParameterSets(parameters)
    const countUsefulnessParameterSets = count(usefulnessParameterSets)

    let maxMatchCount = 0
    let usefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount = [] as UsefulnessParameterSet[]

    usefulnessParameterSets.forEach((usefulnessParameterSet: UsefulnessParameterSet, index: number): void => {
        let matchCount = 0

        const zoneCommaEntries = computeZoneCommaEntries()

        zoneCommaEntries.forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
            if (EXCLUDED_COMMAS.includes(commaClassId)) return

            const isMostUseful = isCommaMostUsefulInZone(
                [commaClassId, commas],
                metric,
                usefulnessParameterSet,
            )

            if (isMostUseful) matchCount = increment(matchCount)
        })

        if (matchCount === maxMatchCount) {
            usefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount.push(usefulnessParameterSet)
        } else if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount
            usefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount = [usefulnessParameterSet]
        }

        saveLog(`Usefulness parameter set (${index}/${countUsefulnessParameterSets}): ${stringify(usefulnessParameterSet)} -> count most useful ${matchCount}`, LogTarget.PROGRESS)
    })

    saveLog(`Usefulness parameter sets for usefulness metric ${usefulnessMetricId} which maximize the match count, all bringing it to ${maxMatchCount} (count of ties ${count(usefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount)}): ${stringify(usefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount)}`, LogTarget.FINAL)
}

export {
    logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount,
}
