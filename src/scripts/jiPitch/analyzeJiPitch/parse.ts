import { program } from "commander"
import {
    Abs,
    Exponent,
    formatPitch,
    IntegerDecimal,
    Io,
    isRatio,
    isUndefined,
    LogTarget,
    Max,
    Prime,
    Ratio,
    saveLog,
} from "../../../general"
import { ApotomeSlope, computeAas, computeAte, JiPitchAnalysis, N2D3P9, parsePitch } from "../../../sagittal"
import { FindCommasSettings, parseFindCommasSettings } from "../findCommas"

const parseJiPitch = (): Ratio => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: Ratio
    if (jiPitchText) {
        const pitch = parsePitch(jiPitchText)

        if (isRatio(pitch)) {
            jiPitch = pitch

            if (!isUndefined(pitch.monzo) || !isUndefined(pitch.quotient)) {
                saveLog(`Warning: JI pitch ${formatPitch(pitch)} provided as decimal or cents, and may not be exactly what you intended.` as Io, LogTarget.ERROR)
            }
        } else {
            throw new Error(`JI pitches must be rational. This pitch was ${formatPitch(pitch)}`)
        }

        // When provided via specific flags, they are pre-parsed (in readOptions.ts).
    } else if (program.monzo) {
        jiPitch = { monzo: program.monzo }
    } else if (program.quotient) {
        jiPitch = { quotient: program.quotient }
    } else if (program.commaName) {
        jiPitch = program.commaName
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
        findCommasSettings.maxAte = ate as Max<Abs<IntegerDecimal & Exponent<3 & Prime>>>
    }

    const n2d3p9 = jiPitchAnalysis.two3FreeClassAnalysis.n2d3p9
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        findCommasSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasSettings
}

export {
    parseJiPitch,
    parseNotatingCommasSettings,
}
