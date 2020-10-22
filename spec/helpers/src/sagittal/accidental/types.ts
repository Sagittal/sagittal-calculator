import {Accent, Ascii, Compatible, CoreName, Smiley, Unicode} from "../../../../../src/sagittal/accidental"

// TODO: Call these sorts of things Expectations, not Analyses
interface GlyphAnalysis {
    name: CoreName | Accent | Compatible,
    ascii: Ascii,
    unicode: Unicode,
    smiley: Smiley,
}

interface AccidentalAnalysis {
    evoAscii: Ascii,
    revoAscii: Ascii,
    evoUnicode: Unicode,
    revoUnicode: Unicode,
}

export {
    GlyphAnalysis,
    AccidentalAnalysis,
}
