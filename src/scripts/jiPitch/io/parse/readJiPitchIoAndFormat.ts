import {Io} from "@sagittal/general"
import {program} from "commander"
import {PitchFormat} from "./types"

const readJiPitchIoAndFormat = (): [Io, PitchFormat] => {
    const jiPitchIo = program.args[0] as Io

    if (jiPitchIo) {
        return [jiPitchIo, PitchFormat.UNKNOWN]

        // When provided via specific flags, they are pre-parsed (in readOptions.ts).
    } else if (program.monzo) {
        return [program.monzo, PitchFormat.MONZO]
    } else if (program.quotient) {
        return [program.quotient, PitchFormat.QUOTIENT]
    } else if (program.commaName) {
        return [program.commaName, PitchFormat.COMMA_NAME]
    } else if (program.accidental) {
        return [program.accidental, PitchFormat.ACCIDENTAL]
    } else if (program.integer) {
        return [program.integer, PitchFormat.INTEGER]
    } else {
        throw new Error("Unable to read JI pitch.")
    }
}

export {
    readJiPitchIoAndFormat,
}
