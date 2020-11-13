import {program} from "commander"
import {
    Comma,
    Decimal,
    Io,
    Maybe,
    Monzo,
    parseInteger,
    parseMonzo,
    parseQuotient,
    Quotient,
    ScriptFlag,
} from "../../../../general"
import {
    Accidental,
    Ascii,
    computeCommaFromCommaNameQuotientAndSizeCategoryName,
    parseAscii,
    parseCommaName,
} from "../../../../sagittal"

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
                return computeCommaFromCommaNameQuotientAndSizeCategoryName(parseCommaName(commaNameText as Io))
            },
        )
        .option(
            `-${ScriptFlag.ACCIDENTAL}, --accidental <symbol>`,
            "accidental",
            (accidentalText: string): Maybe<Accidental> => parseAscii(accidentalText as Ascii),
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
