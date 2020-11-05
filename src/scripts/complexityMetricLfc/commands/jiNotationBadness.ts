import {Comma, Filename, ioSettings, LogTarget, saveLog, setupCommandAndIo, Sum, time} from "../../../general"
import {Badness, CommaClassId} from "../../../sagittal"
import {Score, ScriptGroup} from "../../types"
import {EXCLUDED_COMMAS} from "../constants"
import {computeZoneBadnessScore} from "../zoneBadnessScore"
import {computeZoneCommaEntries} from "../zoneCommas"

// Technically, badness is a metric which is beyond complexity, but because this script is so similar to the LFC
// For complexity and shares many of its command line options, it just made sense for it to live here.

setupCommandAndIo(ScriptGroup.COMPLEXITY_METRIC_LFC as Filename, [LogTarget.ALL])

let jiNotationBadnessScore = 0 as Sum<Score<Badness>>

const zoneCommaEntries = computeZoneCommaEntries()
zoneCommaEntries.forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
    if (EXCLUDED_COMMAS.includes(commaClassId)) return

    const zoneBadnessScore = computeZoneBadnessScore([commaClassId, commas])
    saveLog(`badness score for ${commaClassId}'s zone: ${zoneBadnessScore}`, LogTarget.DETAILS)
    jiNotationBadnessScore = jiNotationBadnessScore + zoneBadnessScore as Sum<Score<Badness>>
})

saveLog(`JI notation's badness score was: ${jiNotationBadnessScore}`, LogTarget.FINAL)

if (ioSettings.time) saveLog(`\ntook ${time()}`, LogTarget.FINAL)