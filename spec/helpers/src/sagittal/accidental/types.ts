import {Accent, Ascii, Compatible, Smiley, Unicode} from "../../../../../src/sagittal/accidental"

interface GlyphExpectation {
    name: string | Accent | Compatible,
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
