import { KeyPath } from "../../general"
import { CommaNameOptions } from "../../sagittal"

interface JiPitchScriptGroupSettings {
    sortKey: KeyPath,
    commaNameOptions: CommaNameOptions,
    excludedFields: JiPitchScriptGroupField[],
}

// TODO: CUSTOM COLUMN SORTING
//  Should use these for sorting too... but not sorting the rows, sorting the Columns
//  And you need a map from JiPitchField to KeyPath, so that you can even sort and exclude by 2,3-free class name
//  (I don't think you actually can at the moment)
//  And perhaps sortBy should be sortCommasBy,
//  To help encode that when running analyze-ji-pitch it's only that one table
//  Except also if you're going to introduce the concept of sorting columns perhaps it should be sortCommaRowsBy
//  Another idea would be instead of excluded fields you could just combine the two ideas
//  And give you the ability to provide the exact list of fields you want to see in order
//  The only drawback is that then, if you ever want to just filter one column, you'd have to write out all the others
//  Okay so maybe just provide a new CLI arg
enum JiPitchField {
    RATIO = "ratio",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
}

enum TwoThreeFreeClassField {
    TWO_THREE_FREE_PRIME_LIMIT = "twoThreeFreePrimeLimit",
    TWO_THREE_FREE_CLASS_NAME = "twoThreeFreeClassName",
    TWO_THREE_FREE_COPFR = "twoThreeFreeCopfr",
    TWO_THREE_FREE_SOPFR = "twoThreeFreeSopfr",
    N2D3P9 = "n2d3p9",
}

enum NotatingCommasField {
    RATIO = "ratio",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
    SYMBOL_CLASS = "symbolClass",
    NAME = "name",
}

enum FindCommasField {
    RATIO = "ratio",
    MONZO = "monzo",
    CENTS = "cents",
    APOTOME_SLOPE = "apotomeSlope",
    AAS = "aas",
    ATE = "ate",
    SYMBOL_CLASS = "symbolClass",
    NAME = "name",
    TWO_THREE_FREE_PRIME_LIMIT = "twoThreeFreePrimeLimit",
    TWO_THREE_FREE_CLASS_NAME = "twoThreeFreeClassName",
    TWO_THREE_FREE_COPFR = "twoThreeFreeCopfr",
    TWO_THREE_FREE_SOPFR = "twoThreeFreeSopfr",
    N2D3P9 = "n2d3p9",
}

type JiPitchScriptGroupField = JiPitchField | TwoThreeFreeClassField | NotatingCommasField | FindCommasField

export {
    JiPitchScriptGroupSettings,
    JiPitchField,
    TwoThreeFreeClassField,
    NotatingCommasField,
    FindCommasField,
    JiPitchScriptGroupField,
}
