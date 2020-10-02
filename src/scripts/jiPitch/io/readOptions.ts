import { program } from "commander"
import {
    Comma,
    CommandFlag,
    IntegerDecimal,
    Io,
    parseInteger,
    parseMonzo,
    parseQuotient,
    Real,
    RealMonzo,
    RealQuotient,
} from "../../../general"
import { computeCommaFromCommaNameQuotientAndSizeCategoryName, parseCommaName, parsePitch } from "../../../sagittal"

const readJiPitchOptions = (): void => {
    program
        .option(
            `-${CommandFlag.MONZO}, --monzo <monzo>`,
            "monzo",
            (monzoIo: string): RealMonzo => parseMonzo(monzoIo as Io),
        )
        .option(
            `-${CommandFlag.QUOTIENT}, --quotient <quotient>`,
            "quotient",
            (quotientIo: string): RealQuotient => parseQuotient(quotientIo as Io),
        )
        .option(
            `-${CommandFlag.COMMA_NAME}, --comma-name <commaName>`,
            "comma name",
            (commaNameIo: string): Comma => {
                return computeCommaFromCommaNameQuotientAndSizeCategoryName(parseCommaName(commaNameIo as Io))
            },
        )
        .option(
            `-${CommandFlag.INTEGER}, --integer <integer>`,
            "integer",
            (integerText: string): IntegerDecimal => parseInteger(integerText),
        )
}

const readFindCommasOptions = (): void => {
    program
        .option(
            `-${CommandFlag.LOWER_BOUND}, --lower-bound <lowerBound>`,
            "lower bound",
            (pitchIo: string): Real => parsePitch(pitchIo as Io))
        .option(
            `-${CommandFlag.UPPER_BOUND}, --upper-bound <upperBound>`,
            "upper bound",
            (pitchIo: string): Real => parsePitch(pitchIo as Io),
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
