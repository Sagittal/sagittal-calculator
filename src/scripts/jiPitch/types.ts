import {KeyPath} from "../../general"
import {CommaNameOptions} from "../../sagittal"

interface JiPitchScriptGroupSettings {
    sortKey: KeyPath,
    commaNameOptions: CommaNameOptions,
    excludedFields: JiPitchScriptGroupField[],
}

enum JiPitchField {
    QUOTIENT = "quotient",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
}

enum Two3FreeClassField {
    TWO_3_FREE_PRIME_LIMIT = "two3FreePrimeLimit",
    TWO_3_FREE_CLASS_NAME = "two3FreeClassName",
    TWO_3_FREE_COPFR = "two3FreeCopfr",
    TWO_3_FREE_SOPFR = "two3FreeSopfr",
    N2D3P9 = "n2d3p9",
}

enum NotatingCommasField {
    QUOTIENT = "quotient",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
    COMMA_CLASS = "commaClass",
    NAME = "name",
}

enum FindCommasField {
    QUOTIENT = "quotient",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
    COMMA_CLASS = "commaClass",
    NAME = "name",
    TWO_3_FREE_PRIME_LIMIT = "two3FreePrimeLimit",
    TWO_3_FREE_CLASS_NAME = "two3FreeClassName",
    TWO_3_FREE_COPFR = "two3FreeCopfr",
    TWO_3_FREE_SOPFR = "two3FreeSopfr",
    N2D3P9 = "n2d3p9",
}

type JiPitchScriptGroupField = JiPitchField | Two3FreeClassField | NotatingCommasField | FindCommasField

export {
    JiPitchScriptGroupSettings,
    JiPitchField,
    Two3FreeClassField,
    NotatingCommasField,
    FindCommasField,
    JiPitchScriptGroupField,
}
