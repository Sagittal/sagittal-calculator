import {Name, NumericProperties, Quotient, Scamon} from "../../../../general"

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: SizeCategoryName,
    abbreviation: SizeCategoryAbbreviation,
}

type SizeCategoryBound<T extends NumericProperties = {}> = {
    name: Name<SizeCategoryBound>,
    pitch: Scamon<T & {rational: false}>,
}

enum SizeCategoryName {
    UNISON = "unison",
    SCHISMINA = "schismina",
    SCHISMA = "schisma",
    KLEISMA = "kleisma",
    COMMA = "Comma",
    SMALL_DIESIS = "Small-Diesis",
    MEDIUM_DIESIS = "Medium-Diesis",
    LARGE_DIESIS = "Large-Diesis",
    SMALL_SEMITONE = "Small-Semitone",
    MEDIUM_SEMITONE = "Medium-Semitone",
    LARGE_SEMITONE = "Large-Semitone",
    APOTOME = "Apotome",
    SCHISMA_PLUS_APOTOME = "schisma-plus-Apotome",
    KLEISMA_PLUS_APOTOME = "kleisma-plus-Apotome",
    COMMA_PLUS_APOTOME = "Comma-plus-Apotome",
    SMALL_DIESIS_PLUS_APOTOME = "Small-Diesis-plus-Apotome",
    MEDIUM_DIESIS_PLUS_APOTOME = "Medium-Diesis-plus-Apotome",
    LARGE_DIESIS_PLUS_APOTOME = "Large-Diesis-plus-Apotome",
    SMALL_SEMITONE_PLUS_APOTOME = "Small-Semitone-plus-Apotome",
    MEDIUM_SEMITONE_PLUS_APOTOME = "Medium-Semitone-plus-Apotome",
    LARGE_SEMITONE_PLUS_APOTOME = "Large-Semitone-plus-Apotome",
    DOUBLE_APOTOME = "double-Apotome",
}

enum SizeCategoryAbbreviation {
    UNISON = "u",
    SCHISMINA = "n",
    SCHISMA = "s",
    KLEISMA = "k",
    COMMA = "C",
    SMALL_DIESIS = "S",
    MEDIUM_DIESIS = "M",
    LARGE_DIESIS = "L",
    SMALL_SEMITONE = "SS",
    MEDIUM_SEMITONE = "MS",
    LARGE_SEMITONE = "LS",
    APOTOME = "A",
    SCHISMA_PLUS_APOTOME = "s+A",
    KLEISMA_PLUS_APOTOME = "k+A",
    COMMA_PLUS_APOTOME = "C+A",
    SMALL_DIESIS_PLUS_APOTOME = "S+A",
    MEDIUM_DIESIS_PLUS_APOTOME = "M+A",
    LARGE_DIESIS_PLUS_APOTOME = "L+A",
    SMALL_SEMITONE_PLUS_APOTOME = "SS+A",
    MEDIUM_SEMITONE_PLUS_APOTOME = "MS+A",
    LARGE_SEMITONE_PLUS_APOTOME = "LS+A",
    DOUBLE_APOTOME = "A+A",
}

type CommaNameOptions = Partial<{
    directed: boolean,
    factored: boolean,
    abbreviated: boolean
}>

// This quotient does not stipulate being super,
// Which is maybe an argument for us not going with directed comma names after all.
// I.e. if a comma's 2,3-free class was just part of its name, that might be nice.
// Do we know whether it's possible for in a size category to have both a e.g. 1/5 and a 5/1, though?
// If so, this wouldn't work, or in other words, this could not get away with being a 2,3-free class,
// And so shouldn't try to be the comma's 2,3-free class.
// Note, however, that when you return the 2's and 3's to this to make it comma-sized, of the size of its name,
// It WILL be super! This is a subtle but critical point.
// You can observe this difference in ordering in commaName.ts and two3FreeClass.ts
type CommaNameQuotient<T extends NumericProperties = {}> =
    Quotient<T & {rational: true, rough: 3}>
    & {_CommaNameQuotientBrand: boolean}

interface ParsedCommaName {
    commaNameQuotient: CommaNameQuotient,
    sizeCategoryName: SizeCategoryName,
}

export {
    SizeCategory,
    SizeCategoryOptions,
    SizeCategoryName,
    SizeCategoryAbbreviation,
    CommaNameOptions,
    CommaNameQuotient,
    ParsedCommaName,
    SizeCategoryBound,
}
