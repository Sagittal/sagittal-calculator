import {Comma, saveLog, stringify} from "../../../general"
import {CommaClassId, computeSecondaryCommaZone, formatCommaClass, JI_NOTATION} from "../../../sagittal"
import {computeCommas, parseFindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {readFindCommasOptions} from "../io"
import {applySharedPitchCommandSetup} from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

// Todo: need to write another version of this script which goes by Extreme capture zones

const secondaryCommaZoneCommas = JI_NOTATION.reduce(
    (
        secondaryCommaZoneCommas: Record<CommaClassId, Comma[]>,
        commaClassId: CommaClassId,
    ): Record<CommaClassId, Comma[]> => {
        saveLog(`\n\n${formatCommaClass(commaClassId, {name: true})}\n\n`)

        const [lowerBound, upperBound] = computeSecondaryCommaZone(commaClassId)

        return {
            ...secondaryCommaZoneCommas,
            [commaClassId]: computeCommas({
                ...jiPitchScriptGroupSettings, ...findCommasSettings,
                lowerBound,
                upperBound,
            }),
        }
    },
    {} as Record<CommaClassId, Comma[]>,
)

saveLog(stringify(secondaryCommaZoneCommas, {multiline: true}))
