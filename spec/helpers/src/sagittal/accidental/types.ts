import {Maybe} from "../../../../../src/general/code"
import {Ascii, Flavor, Smiley, Unicode} from "../../../../../src/sagittal/accidental"

interface GlyphExpectation<T extends Maybe<Flavor> = undefined> {
    ascii: Ascii<T>,
    unicode: Unicode<T>,
    smiley: Smiley<T>,
}

interface AccidentalExpectation {
    evo: GlyphExpectation<Flavor.EVO>,
    revo: GlyphExpectation<Flavor.REVO>,
}

export {
    GlyphExpectation,
    AccidentalExpectation,
}
