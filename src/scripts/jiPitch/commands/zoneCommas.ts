import {program} from "commander"
import {Comma, CommandFlag, ioSettings, LogTarget, Max, Min, saveLog, Scamon, stringify, time} from "../../../general"
import {
    CommaClassId,
    computeJiNotationCaptureZone,
    computeSecondaryCommaZone,
    formatCommaClass,
    JiNotationLevelId,
    JI_NOTATION,
} from "../../../sagittal"
import {CommasOptions, computeCommas, parseFindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {readFindCommasOptions} from "../io"
import {applySharedPitchCommandSetup} from "./shared"

readFindCommasOptions()

program
    .option(`-${CommandFlag.EXTREME_CAPTURE_ZONES}, --extreme-capture-zones`, "find commas in the comma's capture zone for the Extreme precision level notation, rather than the default behavior of the comma's secondary comma zone")

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

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

if (ioSettings.time) {
    saveLog(
        `\nFINDING USEFULNESS PARAMETER SETS FOR USEFULNESS METRICS MAXIMIZING COUNT MOST USEFUL TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
