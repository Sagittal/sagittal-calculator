import { program } from "commander"
import {
    Abs,
    ANY_MONZO_CHARS,
    Comma,
    computeMonzoFromInteger,
    Exponent,
    Formatted,
    IDENTIFYING_COMMA_NAME_CHARS,
    Integer,
    Io,
    JiPitch,
    Max,
    Monzo,
    Name,
    parseInteger,
    parseMonzo,
    parseRatio,
    Prime,
    Ratio,
} from "../../../general"
import {
    ApotomeSlope,
    computeAas,
    computeAte,
    computeMonzoFrom23FreeClassAndSizeCategoryName,
    JiPitchAnalysis,
    N2D3P9,
    parseCommaName,
} from "../../../sagittal"
import { FindCommasSettings, parseFindCommasSettings } from "../findCommas"

const parseJiPitch = (): JiPitch => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: JiPitch
    if (jiPitchText) {
        if (jiPitchText.match(IDENTIFYING_COMMA_NAME_CHARS)) {
            const { commaNameRatio, sizeCategoryName } = parseCommaName(jiPitchText as Name<Comma>)
            jiPitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName({ commaNameRatio, sizeCategoryName }) }
        } else if (jiPitchText.includes("/")) {
            jiPitch = { ratio: parseRatio(jiPitchText as Formatted<Ratio>) }
        } else if (jiPitchText.match(ANY_MONZO_CHARS)) {
            jiPitch = { monzo: parseMonzo(jiPitchText as Formatted<Monzo>) }
        } else {
            const integer = parseInteger(jiPitchText)
            jiPitch = { monzo: computeMonzoFromInteger(integer) }
        }
    } else if (program.monzo) {
        jiPitch = { monzo: program.monzo }
    } else if (program.ratio) {
        jiPitch = { ratio: program.ratio }
    } else if (program.commaName) {
        jiPitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName(program.commaName) }
    } else if (program.integer) {
        jiPitch = { monzo: computeMonzoFromInteger(program.integer) }
    } else {
        throw new Error("Unable to determine monzo for JI pitch.")
    }

    return jiPitch
}

const parseNotatingCommasSettings = (
    jiPitchAnalysis: JiPitchAnalysis,
): FindCommasSettings => {
    const findCommasSettings = parseFindCommasSettings()

    const aas = computeAas(jiPitchAnalysis)
    if (aas > findCommasSettings.maxAas) {
        findCommasSettings.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    const ate = computeAte(jiPitchAnalysis)
    if (ate > findCommasSettings.maxAte) {
        findCommasSettings.maxAte = ate as Max<Abs<3 & Integer & Exponent<Prime>>>
    }

    const n2d3p9 = jiPitchAnalysis.twoThreeFreeClassAnalysis.n2d3p9
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        findCommasSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasSettings
}

export {
    parseJiPitch,
    parseNotatingCommasSettings,
}
