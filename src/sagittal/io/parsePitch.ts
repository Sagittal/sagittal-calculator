import {
    ANY_CENTS_CHARS,
    ANY_MONZO_CHARS,
    ANY_QUOTIENT_CHARS,
    computeNumberFromCents,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    Num,
    parseCents,
    parseDecimal,
    parseMonzo,
    parseQuotient,
} from "../../general"
import { computeMonzoFrom23FreeClassAndSizeCategoryName, parseCommaName } from "../ji"

const parsePitch = (pitchIo: Io): Num => {
    let pitch: Num
    if (pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const { commaNameQuotient, sizeCategoryName } = parseCommaName(pitchIo)
        pitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName({ commaNameQuotient, sizeCategoryName }) }
    } else if (pitchIo.match(ANY_QUOTIENT_CHARS)) {
        pitch = { quotient: parseQuotient(pitchIo) }
    } else if (pitchIo.match(ANY_MONZO_CHARS)) {
        pitch = { monzo: parseMonzo(pitchIo) }
    } else if (pitchIo.match(ANY_CENTS_CHARS)) {
        pitch = { decimal: computeNumberFromCents(parseCents(pitchIo)) }
    } else {
        pitch = { decimal: parseDecimal(pitchIo) }
    }

    return pitch
}

export {
    parsePitch,
}
