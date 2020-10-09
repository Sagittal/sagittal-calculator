import { program } from "commander"
import {
    Abs,
    computeRationalMonzoFromRationalDecimal,
    computeRationalMonzoFromRationalQuotient,
    Decimal,
    Exponent,
    formatPitch,
    Io,
    isScamonRational,
    Max,
    Prime,
    Scamon,
} from "../../../general"
import { ApotomeSlope, computeAas, computeAte, JiPitchAnalysis, N2D3P9, parsePitch } from "../../../sagittal"
import { FindCommasSettings, parseFindCommasSettings } from "../findCommas"

const parseJiPitch = (): Scamon<{ rational: true }> => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: Scamon<{ rational: true }>
    if (jiPitchText) {
        const pitch = parsePitch(jiPitchText)

        if (isScamonRational(pitch)) {
            jiPitch = pitch
        } else {
            throw new Error(`JI pitches must be rational. This pitch was ${formatPitch(pitch)}`)
        }

        // When provided via specific flags, they are pre-parsed (in readOptions.ts).
    } else if (program.monzo) {
        jiPitch = { monzo: program.monzo } as Scamon<{ rational: true }>
    } else if (program.quotient) {
        jiPitch = { monzo: computeRationalMonzoFromRationalQuotient(program.quotient) } as Scamon<{ rational: true }>
    } else if (program.commaName) {
        jiPitch = program.commaName
    } else if (program.integer) {
        jiPitch = { monzo: computeRationalMonzoFromRationalDecimal(program.integer) } as Scamon<{ rational: true }>
    } else {
        throw new Error("Unable to parse JI pitch.")
    }

    return jiPitch
}

const parseNotatingCommasSettings = (
    { pitch, two3FreeClassAnalysis }: JiPitchAnalysis,
): FindCommasSettings => {
    const findCommasSettings = parseFindCommasSettings()

    const aas = computeAas(pitch)
    if (aas > findCommasSettings.maxAas) {
        findCommasSettings.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    const ate = computeAte(pitch)
    if (ate > findCommasSettings.maxAte) {
        findCommasSettings.maxAte = ate as Max<Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>>
    }

    const n2d3p9 = two3FreeClassAnalysis.n2d3p9
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        findCommasSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasSettings
}

export {
    parseJiPitch,
    parseNotatingCommasSettings,
}
