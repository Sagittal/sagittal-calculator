import { program } from "commander"
import {
    Abs,
    computeNumIsRational,
    Exponent,
    formatPitch,
    Integer,
    Io,
    isUndefined,
    LogTarget,
    Max,
    Prime,
    RationalNum,
    saveLog,
} from "../../../general"
import { ApotomeSlope, computeAas, computeAte, JiPitchAnalysis, N2D3P9, parsePitch } from "../../../sagittal"
import { FindCommasSettings, parseFindCommasSettings } from "../findCommas"

const parseJiPitch = (): RationalNum => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: RationalNum
    if (jiPitchText) {
        const pitch = parsePitch(jiPitchText)

        if (computeNumIsRational(pitch)) {
            jiPitch = pitch

            if (!isUndefined(pitch.monzo) || !isUndefined(pitch.ratio)) {
                saveLog(`Warning: JI pitch ${formatPitch(pitch)} provided as decimal or cents, and may not be exactly what you intended.` as Io, LogTarget.ERROR)
            }
        } else {
            throw new Error(`JI pitches must be rational. This pitch was ${formatPitch(pitch)}`)
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
