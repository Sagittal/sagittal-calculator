import { addTexts, concat, Formatted, Row, shallowClone } from "../../../general"
import { AnalyzedRationalPitch } from "../../../sagittal"

const NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW = [
    "symbol  ", // Extra space to attempt to stay lined up with the rational pitch table
    "name",
    "ratio",
    "monzo",
    "cents",
    "apotome slope",
    // this table does not include limit, 5-rough sopfr, or N2D3P9,
    // because they will always be the same for every entry in the table
    // and they are shared already, once each, in the table up above this one, for the rational pitch analysis
] as Row<AnalyzedRationalPitch, "Header">

const FIND_COMMAS_HEADER_ROW: Row<AnalyzedRationalPitch, "Header"> = concat(
    NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW,
    [
        "limit",
        "5-rough sopfr",
        "2,3-free class N2D3P9",
    ] as Row<AnalyzedRationalPitch, "Header">,
)

const TWO_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_SYMBOLS = "        " as Formatted<AnalyzedRationalPitch>
const ONE_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_NAME = "       " as Formatted<AnalyzedRationalPitch>
const EXTRA_COLUMN_ASSUMING_SOME_LONG_RATIOS = "     " as Formatted<AnalyzedRationalPitch>

const computeRationalPitchHeaderRow = (): Row<AnalyzedRationalPitch, "Header"> => {
    const headerRow = shallowClone(FIND_COMMAS_HEADER_ROW)
    headerRow[ 0 ] = TWO_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_SYMBOLS
    headerRow[ 1 ] = ONE_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_NAME

    headerRow[ 2 ] = addTexts(headerRow[ 2 ], EXTRA_COLUMN_ASSUMING_SOME_LONG_RATIOS)

    return headerRow
}

export {
    computeRationalPitchHeaderRow,
    NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW,
    FIND_COMMAS_HEADER_ROW,
}
