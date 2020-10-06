import { program } from "commander"
import {
    Comma,
    CommandFlag,
    Decimal,
    Io,
    Monzo,
    parseInteger,
    parseMonzo,
    parseQuotient,
    Pitch,
    Quotient,
} from "../../../general"
import { computeCommaFromCommaNameQuotientAndSizeCategoryName, parseCommaName, parsePitch } from "../../../sagittal"

const readJiPitchOptions = (): void => {
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
            (integerText: string): Decimal<{ integer: true }> => parseInteger(integerText as Io),
        )
}

const readFindCommasOptions = (): void => {
    program
        .option(
            `-${CommandFlag.LOWER_BOUND}, --lower-bound <lowerBound>`,
            "lower bound",
            (pitchIo: string): Pitch => parsePitch(pitchIo as Io))
        .option(
            `-${CommandFlag.UPPER_BOUND}, --upper-bound <upperBound>`,
            "upper bound",
            (pitchIo: string): Pitch => parsePitch(pitchIo as Io),
        )
        .option(`-${CommandFlag.MAX_AAS}, --max-aas <maxAas>`, "max AAS", parseFloat)
        .option(`-${CommandFlag.MAX_ATE}, --max-ate <maxAte>`, "max ATE", parseInt)
        .option(`-${CommandFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`, "max prime limit", parseInt)
        .option(
            `-${CommandFlag.MAX_2_3_FREE_SOPFR}, --max-2-3-free-sopfr <max23FreeSopfr>`,
            "max 2,3-free sopfr",
            parseInt)
        .option(
            `-${CommandFlag.MAX_2_3_FREE_COPFR}, --max-2-3-free-copfr <max23FreeCopfr>`,
            "max 2,3-free copfr",
            parseInt,
        )
        .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 <maxN2d3p9>`, "max n2d3p9", parseFloat)
}

export {
    readJiPitchOptions,
    readFindCommasOptions,
}
