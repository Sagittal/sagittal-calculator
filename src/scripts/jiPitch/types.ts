import { KeyPath } from "../../general"
import { CommaNameOptions } from "../../sagittal"

interface JiPitchScriptGroupSettings {
    sortKey: KeyPath,
    commaNameOptions: CommaNameOptions,
    excludedFields: JiPitchScriptGroupField[],
}

// TODO: should use these for sorting too... but not sorting the rows, sorting the Columns
//  and you need a map from JiPitchField to KeyPath, so that you can even sort and exclude by 2,3-free class name
//  (I don't think you actually can at the moment)
//  and perhaps sortBy should be sortCommasBy, 
//  to help encode that when running analyze-ji-pitch it's only that one table
//  except also if you're going to introduce the concept of sorting columns perhaps it should be sortCommaRowsBy
//  another idea would be instead of excluded fields you could just combine the two ideas
//  and give you the ability to provide the exact list of fields you want to see in order
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
