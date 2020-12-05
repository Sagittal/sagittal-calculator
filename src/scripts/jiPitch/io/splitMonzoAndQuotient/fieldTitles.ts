import {
    BLANK,
    Count,
    Exponent,
    formatIntegerDecimal,
    Io,
    ioSettings,
    Max,
    MERGED_CELL_INDICATOR,
    Prime,
    PRIMES,
    TableFormat,
    TWO_3_FREE_CLASS_SIGN,
} from "@sagittal/general"
import {JiPitchesOrFindCommasField, JiPitchField, Two3FreeClassField} from "../../types"
import {
    JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES,
    JI_PITCH_FIELD_TITLES,
    TWO_3_FREE_CLASS_FIELD_TITLES,
} from "../fieldTitles"
import {
    INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE,
    INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE,
} from "./constants"

// Note the strong parallelism between this method and maybeAppendAdditionalColumnIndicesForSplitField
const splitMonzoAndQuotientFieldTitles = (
    fieldTitles: Io[],
    {
        recognizeNameTitleAsBeingFor23FreeClass = false,
        maxMonzoLength = 0 as Max<Count<Exponent<Prime>>>,
    }: {maxMonzoLength?: Max<Count<Exponent<Prime>>>, recognizeNameTitleAsBeingFor23FreeClass?: boolean},
): Io[] => {
    const splitFieldTitles = [] as Io[]

    const maybeMerge = (
        ioSettings.tableFormat === TableFormat.FORUM
        || ioSettings.tableFormat === TableFormat.FORUM_WITH_SPLIT_QUOTIENTS
    ) ? `${MERGED_CELL_INDICATOR} ` : BLANK

    fieldTitles.forEach((fieldTitle: Io): void => {
        if (fieldTitle === JI_PITCH_FIELD_TITLES[JiPitchField.MONZO]) {
            splitFieldTitles.push(
                `monzo ${INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE}` as Io,
                ...PRIMES.slice(0, maxMonzoLength).map((prime: Prime): string => `${maybeMerge}${formatIntegerDecimal(prime)}`) as Io[],
                `${maybeMerge}${INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE}`,
            )
        } else if (ioSettings.tableFormat !== TableFormat.FORUM) {
            if (fieldTitle === JI_PITCH_FIELD_TITLES[JiPitchField.QUOTIENT]) {
                splitFieldTitles.push("quotient n" as Io, `${maybeMerge}/` as Io, `${maybeMerge}d` as Io)
            } else if (
                fieldTitle === JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES[JiPitchesOrFindCommasField.TWO_3_FREE_CLASS_NAME]
            ) {
                const sign = ioSettings.tableFormat === TableFormat.FORUM_WITH_SPLIT_QUOTIENTS ?
                    "[latex]_{\\scriptsize{2,3}}[/latex]" :
                    TWO_3_FREE_CLASS_SIGN
                splitFieldTitles.push("2,3-free class n" as Io, `${maybeMerge}${maybeMerge}/` as Io, `${maybeMerge}${maybeMerge}d` as Io, `${maybeMerge}${maybeMerge}${sign}` as Io)
            } else if (
                fieldTitle === TWO_3_FREE_CLASS_FIELD_TITLES[Two3FreeClassField.TWO_3_FREE_CLASS_NAME]
                && recognizeNameTitleAsBeingFor23FreeClass
            ) {
                const sign = ioSettings.tableFormat === TableFormat.FORUM_WITH_SPLIT_QUOTIENTS ?
                    "[latex]_{\\scriptsize{2,3}}[/latex]" :
                    TWO_3_FREE_CLASS_SIGN
                splitFieldTitles
                    .push("name n" as Io, `${maybeMerge}/` as Io, `${maybeMerge}d` as Io, `${maybeMerge}${sign}` as Io)
            } else {
                splitFieldTitles.push(fieldTitle)
            }
        } else {
            splitFieldTitles.push(fieldTitle)
        }
    })

    return splitFieldTitles
}

export {
    splitMonzoAndQuotientFieldTitles,
}
