import {program} from "commander"
import {Comma, Filename, Grade, ioSettings, LogTarget, saveLog, setupScriptAndIo, Sum, time} from "../../../general"
import {CommaClassId, Notation} from "../../../sagittal"
import {ScriptGroup} from "../../types"
import {EXCLUDED_COMMAS} from "../constants"
import {complexityMetricLfcScriptGroupSettings} from "../globals"
import {computeZoneBadnessGrade} from "../zoneBadnessGrade"
import {computeZoneCommaEntries} from "../zoneCommas"

// TODO: BADNESS & COMPLEXITY: SCRIPT GROUP NAMING
//  Rename script group to badness; put the I of LPEI on all the metrics but set U to 0 or whatever
//  Technically, badness is a metric which is beyond complexity, but because this script is so similar to the LFC
//  For complexity and shares many of its script flags, it just made sense for it to live here.
//  Although script flags are agnostic to script group; I think you meant the global settings object
//  I think that if I ever get around to pulling in the "perfecter" type recursive search stuff from the other LFC
//  At that time we'd be interested in this perfecting a badness metric, since on the forum we spoke of "skipping"
//  Right to that. Although I can also imagine we'd also want to pin down an ideal complexity metric, because actually
//  Error can just be scaled with `u`. Nonetheless, since badness contains complexity, I think this should become
//  Badness metric LFC. Although for parallelism I'd prefer if we just had one LFC for each... but it can't be denied
//  That the process for finding them is so similar. Maybe just make it complexityAndBadnessMetricLfc?

// TODO: BADNESS & COMPLEXITY: LOCAL MINIMA
//  Btw, when it comes to pulling in the perfecter stuff:
//  We did actually get 11 ties for one of the metrics, but I still think local minima would replace the "ties" stuff

setupScriptAndIo(ScriptGroup.COMPLEXITY_METRIC_LFC as Filename, [LogTarget.ALL])

let jiNotationBadnessGrade = 0 as Sum<Grade<Notation>>

complexityMetricLfcScriptGroupSettings.zoneCommaEntries = computeZoneCommaEntries(!!program.secondaryCommaZones)

saveLog("Badness grades per zone (* identifies the actual comma for each zone)\n", LogTarget.DETAILS)
complexityMetricLfcScriptGroupSettings.zoneCommaEntries
    .forEach(([commaClassId, commas]: [CommaClassId, Comma[]]): void => {
        if (EXCLUDED_COMMAS.includes(commaClassId)) return

        const zoneBadnessGrade = computeZoneBadnessGrade([commaClassId, commas])
        jiNotationBadnessGrade = jiNotationBadnessGrade + zoneBadnessGrade as Sum<Grade<Notation>>
    })

saveLog(`\nJI NOTATION'S BADNESS GRADE WAS: ${jiNotationBadnessGrade}`, LogTarget.FINAL)

if (ioSettings.time) saveLog(`\ntook ${time()}`, LogTarget.FINAL)
