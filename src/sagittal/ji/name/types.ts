import {Name, NumericProperties, Quotient, Scamon} from "@sagittal/general"

type SizeCategoryBound<T extends NumericProperties = {}> = {
    name: Name<SizeCategoryBound>,
    pitch: Scamon<T & {rational: false}>,
}

enum FactoringMode {
    ALWAYS = "always",
    NEVER = "never",
    THRESHOLD = "threshold",
}

enum SizeCategory {
    UNISON = "unison",
    SCHISMINA = "schismina",
    SCHISMA = "schisma",
    KLEISMA = "kleisma",
    COMMA = "comma",
    SMALL_DIESIS = "smallDiesis",
    MEDIUM_DIESIS = "mediumDiesis",
    LARGE_DIESIS = "largeDiesis",
    SMALL_SEMITONE = "smallSemitone",
    MEDIUM_SEMITONE = "mediumSemitone",
    LARGE_SEMITONE = "largeSemitone",
    APOTOME = "apotome",
    SCHISMA_PLUS_APOTOME = "schismaPlusApotome",
    KLEISMA_PLUS_APOTOME = "kleismaPlusApotome",
    COMMA_PLUS_APOTOME = "commaPlusApotome",
    SMALL_DIESIS_PLUS_APOTOME = "smallDiesisPlusApotome",
    MEDIUM_DIESIS_PLUS_APOTOME = "mediumDiesisPlusApotome",
    LARGE_DIESIS_PLUS_APOTOME = "largeDiesisPlusApotome",
    SMALL_SEMITONE_PLUS_APOTOME = "smallSemitonePlusApotome",
    LIMMA_PLUS_APOTOME = "limmaPlusApotome",
    LARGE_SEMITONE_PLUS_APOTOME = "largeSemitonePlusApotome",
    DOUBLE_APOTOME = "doubleApotome",
}

type SizeCategoryName = string & {_SizeCategoryNameBrand: boolean}
type SizeCategoryAbbreviation = string & {_SizeCategoryAbbreviationBrand: boolean}

type CommaNameOptions = Partial<{
    directed: boolean,
    factoringMode: FactoringMode,
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
    sizeCategory: SizeCategory,
}

interface MaybeComplexOptions {
    sizeCategory: SizeCategory,
    abbreviated: boolean,
}

export {
    SizeCategory,
    SizeCategoryName,
    SizeCategoryAbbreviation,
    CommaNameOptions,
    CommaNameQuotient,
    ParsedCommaName,
    SizeCategoryBound,
    FactoringMode,
    MaybeComplexOptions,
}
