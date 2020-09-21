import { program } from "commander"
import {
    Comma,
    CommandFlag,
    Formatted,
    Integer,
    Monzo,
    Name,
    parseInteger,
    parseMonzo,
    parseRatio,
    Ratio,
} from "../../../general"
import { parseCommaName, ParsedCommaName } from "../../../sagittal"

const readJiPitchOptions = (): void => {
    program
        .option(
            `-${CommandFlag.MONZO}, --monzo <monzo>`,
            "monzo",
            (monzoText: string): Monzo => parseMonzo(monzoText as Formatted<Monzo>),
        )
        .option(
            `-${CommandFlag.RATIO}, --ratio <ratio>`,
            "ratio",
            (ratioText: string): Ratio => parseRatio(ratioText as Formatted<Ratio<{ unreduced: true }>>),
        )
        .option(
            `-${CommandFlag.COMMA_NAME}, --comma-name <commaName>`,
            "comma name",
            (commaNameText: string): ParsedCommaName => parseCommaName(commaNameText as Name<Comma>),
        )
        .option(
            `-${CommandFlag.INTEGER}, --integer <integer>`,
            "comma name",
            (integerText: string): Integer => parseInteger(integerText),
        )
}

const readFindCommasOptions = (): void => {
    program
        .option(`-${CommandFlag.MIN_CENTS}, --min-cents <minCents>`, "min cents", parseFloat)
        .option(`-${CommandFlag.MAX_CENTS}, --max-cents <maxCents>`, "max cents", parseFloat)
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
