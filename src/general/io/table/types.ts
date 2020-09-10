import { Maybe } from "../../code"
import { Count } from "../../types"
import { ColorMethod, Formatted, Io } from "../types"

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Maybe<Justification>>

type RowTypeParameters = Partial<{
    of: unknown,
    header: boolean,
}>

type Row<T extends RowTypeParameters = {}> =
    Array<Formatted>
    & { _RowBrand: "Row" }
    & (T extends { of: unknown } ? {} : { _RowOfBrand: Pick<T, "of"> })
    & (T extends { header: true } ? { _HeaderBrand: "Header" } : {})
type Column<T = void> =
    Array<Formatted>
    & { _ColumnBrand: "Column" }
    & (T extends void ? {} : { _ColumnOfBrand: T })
type Table<T = void> = Array<Row<{ of: T }>>

interface JustifiedCellOptions {
    columnJustification: Justification,
    columnWidth: number,
}

type FormatTableOptions<T> = {
    justification: JustificationOption
    colors: Maybe<Array<Maybe<ColorMethod>>>,
    headerRowCount: Count<Row<{ of: T, header: true }>>,
}

interface TableForForumStuffOptions<T> {
    index: number,
    colors: Maybe<Array<Maybe<ColorMethod>>>,
    headerRowCount: Count<Row<{ of: T, header: true }>>,
}

export {
    Justification,
    JustificationOption,
    JustifiedCellOptions,
    FormatTableOptions,
    Row,
    Column,
    Table,
    TableForForumStuffOptions,
}
