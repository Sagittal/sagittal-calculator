import { addTexts, concat, Formatted, Row, shallowClone } from "../../../general"
import { AnalyzedComma } from "../../../sagittal"

const NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW = [
    "symbol  ", // Extra space to attempt to stay lined up with the JI pitch table
    "name",
    "ratio",
    "monzo",
    "cents",
    "apotome slope",
    // this table does not include limit, 2,3-free sopfr, or N2D3P9,
    // because they will always be the same for every entry in the table
    // and they are shared already, once each, in the table up above this one, for the JI pitch analysis
] as Row<{ of: AnalyzedComma, header: true }>

const FIND_COMMAS_HEADER_ROW: Row<{ of: AnalyzedComma, header: true }> = concat(
    NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW,
    [
        "limit",
        "2,3-free sopfr",
        "2,3-free class N2D3P9",
    ] as Row<{ of: AnalyzedComma, header: true }>,
)

const TWO_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_SYMBOLS = "        " as Formatted<AnalyzedComma>
const ONE_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_NAME = "       " as Formatted<AnalyzedComma>
const EXTRA_COLUMN_ASSUMING_SOME_LONG_RATIOS = "     " as Formatted<AnalyzedComma>

const computeJiPitchHeaderRow = (): Row<{ of: AnalyzedComma, header: true }> => {
    const headerRow = shallowClone(FIND_COMMAS_HEADER_ROW)
    headerRow[ 0 ] = TWO_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_SYMBOLS
    headerRow[ 1 ] = ONE_TABBED_COLUMN_WIDE_SPACE_INSTEAD_OF_NAME

    headerRow[ 2 ] = addTexts(headerRow[ 2 ], EXTRA_COLUMN_ASSUMING_SOME_LONG_RATIOS)

    return headerRow
}

export {
    computeJiPitchHeaderRow,
    NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW,
    FIND_COMMAS_HEADER_ROW,
}
