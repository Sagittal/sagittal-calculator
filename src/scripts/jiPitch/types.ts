import {Maybe, SortBy} from "@sagittal/general"
import {CommaNameOptions} from "@sagittal/system"

interface JiPitchScriptGroupSettings {
    sortBy?: SortBy,
    commaNameOptions: CommaNameOptions,
    excludedFields: JiPitchScriptGroupField[],
    orderedFields: Maybe<JiPitchScriptGroupField[]>,
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

enum CommaField {
    QUOTIENT = "quotient",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
    COMMA_CLASS = "commaClass",
    NAME = "name",
    SIZE_CATEGORY = "sizeCategory"
}

enum JiPitchesOrFindCommasField {
    QUOTIENT = "quotient",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
    COMMA_CLASS = "commaClass",
    NAME = "name",
    SIZE_CATEGORY = "sizeCategory",
    TWO_3_FREE_PRIME_LIMIT = "two3FreePrimeLimit",
    TWO_3_FREE_CLASS_NAME = "two3FreeClassName",
    TWO_3_FREE_COPFR = "two3FreeCopfr",
    TWO_3_FREE_SOPFR = "two3FreeSopfr",
    N2D3P9 = "n2d3p9",
}

type JiPitchScriptGroupField = JiPitchField | Two3FreeClassField | CommaField | JiPitchesOrFindCommasField

export {
    JiPitchScriptGroupSettings,
    JiPitchField,
    Two3FreeClassField,
    CommaField,
    JiPitchesOrFindCommasField,
    JiPitchScriptGroupField,
}
