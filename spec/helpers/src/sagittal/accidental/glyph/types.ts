import {Maybe} from "../../../../../../src/general/code"
import {Flavor} from "../../../../../../src/sagittal/accidental/flavor"
import {Ascii, Smiley, Unicode} from "../../../../../../src/sagittal/accidental/glyph"

interface GlyphExpectation<T extends Maybe<Flavor> = undefined> {
    ascii: Ascii<T>,
    unicode: Unicode<T>,
    smiley: Smiley<T>,
}

export {
    GlyphExpectation,
}
