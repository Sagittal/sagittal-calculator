import {
    computeRationalMonzoFromRationalDecimal,
    computeRationalMonzoFromRationalQuotient,
    formatPitch,
    Io,
    isScamonRational,
    Scamon,
} from "@sagittal/general"
import {computeJiPitchFromAccidental} from "@sagittal/system"
import {program} from "commander"
import {parsePitch} from "./pitch"
import {PitchFormat} from "./types"

const parseJiPitch = (jiPitchIo: Io, pitchFormat: PitchFormat = PitchFormat.UNKNOWN): Scamon<{rational: true}> => {
    let jiPitch: Scamon<{rational: true}>

    if (pitchFormat === PitchFormat.UNKNOWN) {
        const pitch = parsePitch(jiPitchIo, pitchFormat)

        if (isScamonRational(pitch)) {
            jiPitch = pitch
        } else {
            throw new Error(`JI pitches must be rational. This pitch was ${formatPitch(pitch)}`)
        }
    } else if (pitchFormat === PitchFormat.MONZO) {
        jiPitch = {monzo: program.monzo} as Scamon<{rational: true}>
    } else if (pitchFormat === PitchFormat.QUOTIENT) {
        jiPitch = {monzo: computeRationalMonzoFromRationalQuotient(program.quotient)} as Scamon<{rational: true}>
    } else if (pitchFormat === PitchFormat.COMMA_NAME) {
        jiPitch = program.commaName
    } else if (pitchFormat === PitchFormat.ACCIDENTAL) {
        jiPitch = computeJiPitchFromAccidental(program.accidental)
    } else if (pitchFormat === PitchFormat.INTEGER) {
        jiPitch = {monzo: computeRationalMonzoFromRationalDecimal(program.integer)} as Scamon<{rational: true}>
    } else {
        throw new Error(`Unknown pitch format: ${pitchFormat}`)
    }

    return jiPitch
}

export {
    parseJiPitch,
}
