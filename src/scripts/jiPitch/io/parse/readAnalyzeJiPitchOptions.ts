import {
    Comma,
    Decimal,
    Io,
    Monzo,
    parseInteger,
    parseMonzo,
    parseQuotient,
    Quotient,
    ScriptFlag,
} from "@sagittal/general"
import {
    Accidental,
    Ascii,
    computeCommaFromCommaNameQuotientAndSizeCategory,
    parseAccidental,
    parseCommaName,
} from "@sagittal/system"
import {program} from "commander"

const readAnalyzeJiPitchOptions = (): void => {
    program
        .option(
            `-${ScriptFlag.MONZO}, --monzo <monzo>`,
            "monzo",
            (monzoText: string): Monzo => parseMonzo(monzoText as Io),
        )
        .option(
            `-${ScriptFlag.QUOTIENT}, --quotient <quotient>`,
            "quotient",
            (quotientText: string): Quotient => parseQuotient(quotientText as Io),
        )
        .option(
            `-${ScriptFlag.COMMA_NAME}, --comma-name <commaName>`,
            "comma name",
            (commaNameText: string): Comma => {
                return computeCommaFromCommaNameQuotientAndSizeCategory(parseCommaName(commaNameText as Io))
            },
        )
        .option(
            `-${ScriptFlag.ACCIDENTAL}, --accidental <symbol>`,
            "accidental",
            (accidentalText: string): Accidental => parseAccidental(accidentalText as Ascii),
        )
        .option(
            `-${ScriptFlag.INTEGER}, --integer <integer>`,
            "integer",
            (integerText: string): Decimal<{integer: true}> => parseInteger(integerText as Io),
        )
}

export {
    readAnalyzeJiPitchOptions,
}
