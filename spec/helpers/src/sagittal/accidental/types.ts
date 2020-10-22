import {Accent, Ascii, Compatible, CoreName, Smiley, Unicode} from "../../../../../src/sagittal/accidental"

interface GlyphExpectation {
    name: CoreName | Accent | Compatible,
    ascii: Ascii,
    unicode: Unicode,
    smiley: Smiley,
}

interface AccidentalExpectation {
    evoAscii: Ascii,
    revoAscii: Ascii,
    evoUnicode: Unicode,
    revoUnicode: Unicode,
}

export {
    GlyphExpectation,
    AccidentalExpectation,
}
