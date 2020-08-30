import { concat, Row } from "../../../general"
import { AnalyzedRationalPitch } from "../../../sagittal"

const NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW = [
    "symbol",
    // TODO: should include symbol subset
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
        "N2D3P9",
    ] as Row<AnalyzedRationalPitch, "Header">,
)

export {
    NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW,
    FIND_COMMAS_HEADER_ROW,
}
