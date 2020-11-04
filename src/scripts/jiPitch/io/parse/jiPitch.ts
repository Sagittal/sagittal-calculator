import {program} from "commander"
import {
    computeRationalMonzoFromRationalDecimal,
    computeRationalMonzoFromRationalQuotient,
    formatPitch,
    Io,
    isScamonRational,
    Scamon,
} from "../../../../general"
import {parsePitch} from "./pitch"

const parseJiPitch = (): Scamon<{rational: true}> => {
    const jiPitchText = program.args[0] as Io

    let jiPitch: Scamon<{rational: true}>
    if (jiPitchText) {
        const pitch = parsePitch(jiPitchText)

        if (isScamonRational(pitch)) {
            jiPitch = pitch
        } else {
            throw new Error(`JI pitches must be rational. This pitch was ${formatPitch(pitch)}`)
        }

        // When provided via specific flags, they are pre-parsed (in readOptions.ts).
    } else if (program.monzo) {
        jiPitch = {monzo: program.monzo} as Scamon<{rational: true}>
    } else if (program.quotient) {
        jiPitch = {monzo: computeRationalMonzoFromRationalQuotient(program.quotient)} as Scamon<{rational: true}>
    } else if (program.commaName) {
        jiPitch = program.commaName
    } else if (program.integer) {
        jiPitch = {monzo: computeRationalMonzoFromRationalDecimal(program.integer)} as Scamon<{rational: true}>
    } else {
        throw new Error("Unable to parse JI pitch.")
    }

    return jiPitch
}

export {
    parseJiPitch,
}
