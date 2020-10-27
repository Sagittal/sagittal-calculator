import {Comma, saveLog, stringify} from "../../../general"
import {
    CommaClassId,
    computeCommaName,
    computeSecondaryCommaZone,
    formatCommaClass,
    getCommaClass,
    JI_NOTATION,
} from "../../../sagittal"
import {computeCommas, parseFindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {readFindCommasOptions} from "../io"
import {applySharedPitchCommandSetup} from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

const secondaryCommaZoneCommas = JI_NOTATION.reduce(
    (
        secondaryCommaZoneCommas: Record<CommaClassId, Comma[]>,
        commaClassId: CommaClassId,
    ): Record<CommaClassId, Comma[]> => {
        const commaClass = getCommaClass(commaClassId)
        const commaName = computeCommaName(commaClass.pitch)

        // TODO: SHOULD FORMAT COMMA CLASS ACTUALLY ALSO SPIT OUT THE NAME (OR MAYBE TAKE OPTION TO DO SO?)
        saveLog(`\n\n${formatCommaClass(commaClassId)} ${commaName}\n\n`)

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
