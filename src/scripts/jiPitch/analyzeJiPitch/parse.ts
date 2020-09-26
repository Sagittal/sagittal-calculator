import { program } from "commander"
import { Abs, Exponent, Integer, Io, isInteger, isUndefined, Max, Prime, RationalNum } from "../../../general"
import { ApotomeSlope, computeAas, computeAte, JiPitchAnalysis, N2D3P9, parsePitch } from "../../../sagittal"
import { FindCommasSettings, parseFindCommasSettings } from "../findCommas"

const parseJiPitch = (): RationalNum => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: RationalNum
    if (jiPitchText) {
        const pitch = parsePitch(jiPitchText)

        if (!isUndefined(pitch.monzo) || !isUndefined(pitch.ratio) || isInteger(pitch.decimal!)) {
            jiPitch = pitch as RationalNum
        } else {
            throw new Error("JI pitches must be given as monzos, ratios, or integers.")
        }

        // When provided via specific flags, they are pre-parsed (in readOptions.ts).
    } else if (program.monzo) {
        jiPitch = { monzo: program.monzo }
    } else if (program.ratio) {
        jiPitch = { ratio: program.ratio }
    } else if (program.commaName) {
        jiPitch = { monzo: program.commaName }
    } else if (program.integer) {
        jiPitch = { decimal: program.integer }
    } else {
        throw new Error("Unable to parse JI pitch.")
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
        findCommasSettings.maxAte = ate as Max<Abs<Integer & Exponent<3 & Prime>>>
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
