import {
    ANY_CENTS_CHARS,
    ANY_MONZO_CHARS,
    ANY_RATIO_CHARS,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    parseCents,
    parseMonzo,
    parseRatio,
    Pitch,
} from "../../general"
import { computeMonzoFrom23FreeClassAndSizeCategoryName, parseCommaName } from "../ji"

const parsePitch = (pitchIo: Io): Pitch => {
    let pitch: Pitch
    if (pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const { commaNameRatio, sizeCategoryName } = parseCommaName(pitchIo)
        // TODO: this, by comma name, is the only reason this has to live in here.
        //  because comma name is sagittal-specific.
        //  perhaps you should rename this to account for that, like, parsePotentiallyComma or something?
        //  or break out everything here that doesn't HAVE to live in sagittal/ elsewhere?
        pitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName({ commaNameRatio, sizeCategoryName }) }
    } else if (pitchIo.match(ANY_RATIO_CHARS)) {
        pitch = { ratio: parseRatio(pitchIo) }
    } else if (pitchIo.match(ANY_MONZO_CHARS)) {
        pitch = { monzo: parseMonzo(pitchIo) }
    } else if (pitchIo.match(ANY_CENTS_CHARS)) {
        pitch = { cents: parseCents(pitchIo) }
    } else {
        pitch = { decimal: parseFloat(pitchIo) }
    }

    return pitch
}

export {
    parsePitch,
}
