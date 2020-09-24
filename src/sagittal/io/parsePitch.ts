import {
    ANY_CENTS_CHARS,
    ANY_MONZO_CHARS,
    ANY_RATIO_CHARS,
    Cents,
    Comma,
    Formatted,
    IDENTIFYING_COMMA_NAME_CHARS,
    Monzo,
    Name,
    parseCents,
    parseMonzo,
    parseRatio,
    Pitch,
    Ratio,
} from "../../general"
import { computeMonzoFrom23FreeClassAndSizeCategoryName, parseCommaName } from "../ji"

const parsePitch = (pitchText: string): Pitch => {
    let pitch: Pitch
    if (pitchText.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const { commaNameRatio, sizeCategoryName } = parseCommaName(pitchText as Name<Comma>)
        // TODO: this, by comma name, is the only reason this has to live in here.
        //  because comma name is sagittal-specific.
        //  perhaps you should rename this to account for that, like, parsePotentiallyComma or something?
        //  or break out everything here that doesn't HAVE to live in sagittal/ elsewhere?
        pitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName({ commaNameRatio, sizeCategoryName }) }
    } else if (pitchText.match(ANY_RATIO_CHARS)) {
        pitch = { ratio: parseRatio(pitchText as Formatted<Ratio<{ potentiallyUnreduced: true }>>) }
    } else if (pitchText.match(ANY_MONZO_CHARS)) {
        pitch = { monzo: parseMonzo(pitchText as Formatted<Monzo>) }
    } else if (pitchText.match(ANY_CENTS_CHARS)) {
        pitch = { cents: parseCents(pitchText as Formatted<Cents>) }
    } else {
        pitch = { decimal: parseFloat(pitchText) }
    }

    return pitch
}

export {
    parsePitch,
}
