import {Comma, Filename, Grade, ioSettings, LogTarget, saveLog, setupScriptAndIo, Sum, time} from "@sagittal/general"
import {CommaClassId, Notation} from "@sagittal/system"
import {program} from "commander"
import {ScriptGroup} from "../../types"
import {EXCLUDED_COMMAS} from "../constants"
import {complexityAndBadnessMetricLfcScriptGroupSettings} from "../globals"
import {computeZoneBadnessGrade} from "../zoneBadnessGrade"
import {computeZoneCommaEntries} from "../zoneCommas"

setupScriptAndIo(ScriptGroup.COMPLEXITY_AND_BADNESS_METRIC_LFC as Filename, [LogTarget.ALL])

let jiNotationBadnessGrade = 0 as Sum<Grade<Notation>>

complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries =
    computeZoneCommaEntries(!!program.secondaryCommaZones)

saveLog("Badness grades per zone (* identifies the actual comma for each zone)\n", LogTarget.DETAILS)
complexityAndBadnessMetricLfcScriptGroupSettings.zoneCommaEntries
    .forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
        if (EXCLUDED_COMMAS.includes(commaClassId)) return

        const zoneBadnessGrade = computeZoneBadnessGrade([commaClassId, commas])
        jiNotationBadnessGrade = jiNotationBadnessGrade + zoneBadnessGrade as Sum<Grade<Notation>>
    })

saveLog(`\nJI NOTATION'S BADNESS GRADE WAS: ${jiNotationBadnessGrade}`, LogTarget.FINAL)

if (ioSettings.time) saveLog(`\ntook ${time()}`, LogTarget.FINAL)
