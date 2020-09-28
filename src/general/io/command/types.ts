// Keep this alphabetical so you can ensure no conflicts.

enum CommandFlag {
    MAX_2_3_FREE_SOPFR = "+",
    MAX_2_3_FREE_COPFR = "#",
    EXCLUDED_FIELDS = "1",
    SYNC = "2",
    MAX_ATE = "3",
    MAX_AAS = "a",
    TABLE_FORMAT = "b",
    NO_COLOR = "c",
    UNDIRECTED_COMMA_NAME = "d",
    NO_USELESS = "e",
    FACTORED_COMMA_NAME = "f",
    COMMA_NAME = "g",
    // "h" reserved for help
    INTEGER = "i",
    MAX_UNIT = "j",
    USE_KNOWN_POPULAR_2_3_FREE_CLASSES = "k",
    LOWER_BOUND = "l",
    MONZO = "m",
    MAX_N2D3P9 = "n",
    ONLY_TOP = "o",
    PRIME_LIMIT = "p",
    USE_BEST_NOTATING_COMMAS = "q",
    QUOTIENT = "r", // TODO: make this q
    SORT_BY = "s",
    LOG_TARGETS = "t",
    UPPER_BOUND = "u",
    UNABBREVIATED_COMMA_NAME = "v",
    NO_WRITE = "w",
    NO_TIME = "x",
    USE_LATE = "y",
    Z = "z",
}

export {
    CommandFlag,
}
