import {Maybe} from "../../code"
import {Count} from "../../types"
import {Formatted} from "../format"
import {Char, ColorMethod} from "../types"

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Maybe<Justification> | Array<Maybe<Justification>>

type TableProperties = Partial<{
    of: unknown,
    header: boolean,
}>

type Cell<T extends TableProperties = {}> = Maybe<Formatted<T["of"]>>
type Row<T extends TableProperties = {}> =
    Array<Cell<T>>
    & {_RowBrand: boolean}
    & (T extends {of: unknown} ? {} : {_RowOfBrand: T["of"]})
    & (T extends {header: true} ? {_HeaderBrand: boolean} : {})
type Column<T extends TableProperties = {}> =
    Array<Cell<T>>
    & {_ColumnBrand: boolean}
    & (T extends {of: unknown} ? {} : {_ColumnOfBrand: T["of"]})
    & (T extends {header: true} ? {_HeaderBrand: boolean} : {})

type Table<T = void> = Array<Row<{of: T}>>

interface JustifiedCellOptions {
    columnJustification: Maybe<Justification>,
    columnWidth: Count<Char>,
}

type FormatTableOptions<T> = {
    justification: JustificationOption,
    colors: Maybe<Array<Maybe<ColorMethod>>>,
    headerRowCount: Count<Row<{of: T, header: true}>>,
}

enum TableFormat {
    FORUM = "forum",
    FORUM_WITH_SPLIT_QUOTIENTS = "forumWithSplitQuotients",
    TERMINAL = "terminal",
    SPREADSHEET = "spreadsheet",
}

export {
    Justification,
    JustificationOption,
    JustifiedCellOptions,
    FormatTableOptions,
    Cell,
    Row,
    Column,
    Table,
    TableFormat,
}
