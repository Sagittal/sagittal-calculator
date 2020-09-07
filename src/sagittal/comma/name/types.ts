interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: SizeCategoryName,
    abbreviation: SizeCategoryAbbreviation,
}

enum SizeCategoryName {
    UNISON = "unison",
    SCHISMINA = "schismina",
    SCHISMA = "schisma" ,
    KLEISMA = "kleisma" ,
    COMMA = "Comma" ,
    SMALL_DIESIS = "Small-Diesis",
    MEDIUM_DIESIS = "Medium-Diesis" ,
    LARGE_DIESIS = "Large-Diesis" ,
    SMALL_SEMITONE = "Small-Semitone" ,
    MEDIUM_SEMITONE = "Medium-Semitone",
    LARGE_SEMITONE = "Large-Semitone",
    APOTOME = "Apotome",
    SCHISMA_PLUS_APOTOME = "schisma-plus-Apotome",
    KLEISMA_PLUS_APOTOME = "kleisma-plus-Apotome",
    COMMA_PLUS_APOTOME = "Comma-plus-Apotome",
    SMALL_DIESIS_PLUS_APOTOME = "Small-Diesis-plus-Apotome",
    MEDIUM_DIESIS_PLUS_APOTOME = "Medium-Diesis-plus-Apotome",
    LARGE_DIESIS_PLUS_APOTOME = "Large-Diesis-plus-Apotome" ,
    SMALL_SEMITONE_PLUS_APOTOME = "Small-Semitone-plus-Apotome",
    MEDIUM_SEMITONE_PLUS_APOTOME = "Medium-Semitone-plus-Apotome",
    LARGE_SEMITONE_PLUS_APOTOME = "Large-Semitone-plus-Apotome" ,
    DOUBLE_APOTOME = "double-Apotome",
}

enum SizeCategoryAbbreviation {
    UNISON = "u",
    SCHISMINA = "n",
    SCHISMA = "s" ,
    KLEISMA = "k" ,
    COMMA = "C" ,
    SMALL_DIESIS = "S",
    MEDIUM_DIESIS = "M" ,
    LARGE_DIESIS = "L" ,
    SMALL_SEMITONE = "SS" ,
    MEDIUM_SEMITONE = "MS",
    LARGE_SEMITONE = "LS",
    APOTOME = "A",
    SCHISMA_PLUS_APOTOME = "s+A",
    KLEISMA_PLUS_APOTOME = "k+A",
    COMMA_PLUS_APOTOME = "C+A",
    SMALL_DIESIS_PLUS_APOTOME = "S+A",
    MEDIUM_DIESIS_PLUS_APOTOME = "M+A",
    LARGE_DIESIS_PLUS_APOTOME = "L+A" ,
    SMALL_SEMITONE_PLUS_APOTOME = "SS+A",
    MEDIUM_SEMITONE_PLUS_APOTOME = "MS+A",
    LARGE_SEMITONE_PLUS_APOTOME = "LS+A" ,
    DOUBLE_APOTOME = "A+A",
}

export {
    SizeCategory,
    SizeCategoryOptions,
    SizeCategoryName,
    SizeCategoryAbbreviation
}
