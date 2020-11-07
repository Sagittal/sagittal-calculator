import {program} from "commander"
import {Comma, Filename, ioSettings, LogTarget, saveLog, Score, setupScriptAndIo, Sum, time} from "../../../general"
import {Badness, CommaClassId} from "../../../sagittal"
import {ScriptGroup} from "../../types"
import {EXCLUDED_COMMAS} from "../constants"
import {complexityMetricLfcScriptGroupSettings} from "../globals"
import {computeZoneBadnessScore} from "../zoneBadnessScore"
import {computeZoneCommaEntries} from "../zoneCommas"

// TODO: Rename script group to badness; put the I of LPEI on all the metrics but set U to 0 or whatever
//  Technically, badness is a metric which is beyond complexity, but because this script is so similar to the LFC
//  For complexity and shares many of its script flags, it just made sense for it to live here.
//  Although script flags are agnostic to script group; I think you meant the global settings object

setupScriptAndIo(ScriptGroup.COMPLEXITY_METRIC_LFC as Filename, [LogTarget.ALL])

let jiNotationBadnessScore = 0 as Sum<Score<Badness>>

complexityMetricLfcScriptGroupSettings.zoneCommaEntries = computeZoneCommaEntries(!!program.secondaryCommaZones)

saveLog("Badness scores per zone (* identifies the actual comma for each zone)\n")
complexityMetricLfcScriptGroupSettings.zoneCommaEntries
    .forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
        if (EXCLUDED_COMMAS.includes(commaClassId)) return

        const zoneBadnessScore = computeZoneBadnessScore([commaClassId, commas])
        jiNotationBadnessScore = jiNotationBadnessScore + zoneBadnessScore as Sum<Score<Badness>>
    })

saveLog(`\nJI NOTATION'S BADNESS SCORE WAS: ${jiNotationBadnessScore}`, LogTarget.FINAL)

if (ioSettings.time) saveLog(`\ntook ${time()}`, LogTarget.FINAL)
