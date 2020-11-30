import {Maybe} from "../../../../../../src/general"
import {Ascii, Smiley, Unicode} from "../../../../../../src/sagittal"
import {Flavor} from "../../../../../../src/sagittal/accidental"

interface GlyphExpectation<T extends Maybe<Flavor> = undefined> {
    ascii: Ascii<T>,
    unicode: Unicode<T>,
    smiley: Smiley<T>,
}

export {
    GlyphExpectation,
}
