import { program } from "commander"
import { Abs, Exponent, Integer, Io, isUndefined, JiPitch, Max, Prime } from "../../../general"
import { ApotomeSlope, computeAas, computeAte, JiPitchAnalysis, N2D3P9, parsePitch } from "../../../sagittal"
import { FindCommasSettings, parseFindCommasSettings } from "../findCommas"

const parseJiPitch = (): JiPitch => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: JiPitch
    if (jiPitchText) {
        const pitch = parsePitch(jiPitchText)

        // todo: DECIMAL & CENTS
        //  it is possible here that parsePitch can return a pitch which has only cents.
        //  without one of monzo, ratio, or decimal, which won't work for jiPitch.
        //  but that wouldn't be the case if we fix the problem.
        if (!isUndefined(pitch.monzo) || !isUndefined(pitch.ratio) || !isUndefined(pitch.decimal)) {
            jiPitch = pitch as JiPitch
        } else {
            throw new Error("Pitch was given in cents. This is not yet supported for parsing JI pitches.")
        }

        // When provided via specific flags, they are pre-parsed (in readOptions.ts).
    } else if (program.monzo) {
        jiPitch = { monzo: program.monzo }
    } else if (program.ratio) {
        jiPitch = { ratio: program.ratio }
    } else if (program.commaName) {
        jiPitch = { monzo: program.commaName }
    } else if (program.decimal) {
        jiPitch = { decimal: program.decimal }
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
