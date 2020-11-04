import {program} from "commander"
import {
    Comma,
    CommandFlag,
    Decimal,
    Io,
    Monzo,
    parseInteger,
    parseMonzo,
    parseQuotient,
    Quotient,
} from "../../../../general"
import {computeCommaFromCommaNameQuotientAndSizeCategoryName, parseCommaName} from "../../../../sagittal"

const readAnalyzeJiPitchOptions = (): void => {
    program
        .option(
            `-${CommandFlag.MONZO}, --monzo <monzo>`,
            "monzo",
            (monzoText: string): Monzo => parseMonzo(monzoText as Io),
        )
        .option(
            `-${CommandFlag.QUOTIENT}, --quotient <quotient>`,
            "quotient",
            (quotientText: string): Quotient => parseQuotient(quotientText as Io),
        )
        .option(
            `-${CommandFlag.COMMA_NAME}, --comma-name <commaName>`,
            "comma name",
            (commaNameText: string): Comma => {
                return computeCommaFromCommaNameQuotientAndSizeCategoryName(parseCommaName(commaNameText as Io))
            },
        )
        .option(
            `-${CommandFlag.INTEGER}, --integer <integer>`,
            "integer",
            (integerText: string): Decimal<{integer: true}> => parseInteger(integerText as Io),
        )
}

export {
    readAnalyzeJiPitchOptions,
}
