import {Comma, count, increment, LogTarget, saveLog, stringify} from "../../general"
import {CommaClassId} from "../../sagittal"
import {isCommaMostUsefulInZone} from "./isCommaMostUsefulInZone"
import {computeUsefulnessParameterSets} from "./parameters"
import {SECONDARY_COMMA_ZONE_COMMAS_ENTRIES} from "./secondaryCommaZoneCommas"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId, UsefulnessParameterSet} from "./types"

const computeUsefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful = (
    [
        usefulnessMetricId,
        [usefulnessMetric, usefulnessParameterIds],
    ]: [UsefulnessMetricId, [UsefulnessMetric, UsefulnessParameterId[]]],
): void => {
    saveLog(`\nRUNNING FOR USEFULNESS METRIC ${usefulnessMetricId}`, LogTarget.PROGRESS)

    const usefulnessParameterSets = computeUsefulnessParameterSets(usefulnessParameterIds)
    const countUsefulnessParameterSets = count(usefulnessParameterSets)

    let maxCountMostUseful = 0
    let usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful = [] as UsefulnessParameterSet[]

    usefulnessParameterSets.forEach((usefulnessParameterSet: UsefulnessParameterSet, index: number): void => {
        let countMostUseful = 0

        SECONDARY_COMMA_ZONE_COMMAS_ENTRIES.forEach((secondaryCommaZoneCommasEntry: [CommaClassId, Comma[]]): void => {
            const isMostUseful = isCommaMostUsefulInZone(
                secondaryCommaZoneCommasEntry,
                usefulnessMetric,
                usefulnessParameterSet,
            )

            if (isMostUseful) countMostUseful = increment(countMostUseful)
        })

        if (countMostUseful === maxCountMostUseful) {
            usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful.push(usefulnessParameterSet)
        } else if (countMostUseful > maxCountMostUseful) {
            maxCountMostUseful = countMostUseful
            usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful = [usefulnessParameterSet]
        }

        saveLog(`Usefulness parameter set (${index}/${countUsefulnessParameterSets}): ${stringify(usefulnessParameterSet)} -> count most useful ${countMostUseful}`, LogTarget.PROGRESS)
    })

    saveLog(`Usefulness parameter sets for usefulness metric ${usefulnessMetricId} maximizing count most useful to ${maxCountMostUseful} (count ${count(usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful)}): ${stringify(usefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful)}`, LogTarget.FINAL)
}

export {
    computeUsefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful,
}
