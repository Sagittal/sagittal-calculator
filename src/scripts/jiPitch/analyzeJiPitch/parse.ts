import { program } from "commander"
import {
    ANY_MONZO_CHARS,
    Comma,
    computeMonzoFromInteger,
    Formatted,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    JiPitch,
    Monzo,
    Name,
    parseInteger,
    parseMonzo,
    parseRatio,
    Ratio,
} from "../../../general"
import { computeMonzoFrom23FreeClassAndSizeCategoryName, parseCommaName } from "../../../sagittal"

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

export {
    parseJiPitch,
}
