import {
    AccentName,
    Ascii,
    Compatible,
    CoreName,
    Smiley,
    Unicode,
} from "../../../../../src/sagittal/accidental"

interface GlyphAnalysis {
    name: CoreName | AccentName | Compatible,
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
