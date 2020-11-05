import {program} from "commander"
import {Comma, ScriptFlag, ioSettings, LogTarget, Max, Min, saveLog, Scamon, stringify, time} from "../../../general"
import {
    CommaClassId,
    computeJiNotationCaptureZone,
    computeSecondaryCommaZone,
    formatCommaClass,
    JiNotationLevelId,
    JI_NOTATION,
} from "../../../sagittal"
import {CommasOptions, computeCommas, computeFindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {applySharedJiPitchScriptSetup} from "./shared"

program
    .option(`-${ScriptFlag.EXTREME_CAPTURE_ZONES}, --extreme-capture-zones`, "find commas in each comma's capture zone for the Extreme precision level notation, rather than the default behavior of the comma's secondary comma zone")

applySharedJiPitchScriptSetup()

const findCommasSettings = computeFindCommasSettings()

const zoneCommas = JI_NOTATION.reduce(
    (
        zoneCommas: Record<CommaClassId, Comma[]>,
        commaClassId: CommaClassId,
    ): Record<CommaClassId, Comma[]> => {
        saveLog(formatCommaClass(commaClassId, {name: true}), LogTarget.PROGRESS)

        const [lowerBound, upperBound] = program.extremeCaptureZones ?
            computeJiNotationCaptureZone(commaClassId, JiNotationLevelId.EXTREME) :
            computeSecondaryCommaZone(commaClassId)

        const options: CommasOptions = {
            ...jiPitchScriptGroupSettings,
            ...findCommasSettings,
        }
        if (lowerBound) options.lowerBound = lowerBound as Min<Scamon>
        if (lowerBound) options.upperBound = upperBound as Max<Scamon>
        return {
            ...zoneCommas,
            [commaClassId]: computeCommas(options),
        }
    },
    {} as Record<CommaClassId, Comma[]>,
)

saveLog(stringify(zoneCommas, {multiline: true}), LogTarget.FINAL)

if (ioSettings.time) saveLog(`\nFINDING ZONE COMMAS TOOK ${time()}`, LogTarget.FINAL)
