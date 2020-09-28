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
        // TODO: this, by comma name, is the only reason this has to live in here.
        //  Because comma name is sagittal-specific.
        //  Perhaps you should rename this to account for that, like, parsePotentiallyComma or something?
        //  Or break out everything here that doesn't HAVE to live in sagittal/ elsewhere?
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
