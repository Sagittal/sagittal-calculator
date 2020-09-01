import { Maybe } from "../../code"
import { Count } from "../../types"
import { ColorMethod, Formatted } from "../types"

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Maybe<Justification>>

type Row<T = void, Header extends "Header" | void = void> =
    Array<Formatted<unknown>>
    & { _RowBrand: "Row" }
    & (T extends void ? {} : { _RowOfBrand: T })
    & (Header extends "Header" ? { _HeaderBrand: "Header" } : {})
type Column<T = void> =
    Array<Formatted<unknown>>
    & { _ColumnBrand: "Column" }
    & (T extends void ? {} : { _ColumnOfBrand: T })
type Table<T = void> = Array<Row<T>>

interface ComputeJustifiedCellOptions {
    columnJustification: Justification,
    columnWidth: number,
}

type FormatTableOptions = {
    justification: JustificationOption
    colors: Maybe<Array<ColorMethod>>,
    headerRowCount: Count<Row<unknown, "Header">>,
}

interface ComputeTableForForumStuffOptions {
    index: number,
    colors: Maybe<Array<ColorMethod>>,
    headerRowCount: Count<Row<unknown, "Header">>,
}

export {
    Justification,
    JustificationOption,
    ComputeJustifiedCellOptions,
    FormatTableOptions,
    Row,
    Column,
    Table,
    ComputeTableForForumStuffOptions,
}
