import { Maybe } from "../../code"
import { Count } from "../../types"
import { Formatted } from "../format"
import { Char, ColorMethod } from "../types"

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Maybe<Justification>>

type TableTypeParameters = Partial<{
    of: unknown,
    header: boolean,
}>

type Row<T extends TableTypeParameters = {}> =
    Array<Maybe<Formatted<T["of"]>>>
    & { _RowBrand: boolean }
    & (T extends { of: unknown } ? {} : { _RowOfBrand: T["of"] })
    & (T extends { header: true } ? { _HeaderBrand: boolean } : {})
type Column<T extends TableTypeParameters = {}> =
    Array<Maybe<Formatted<T["of"]>>>
    & { _ColumnBrand: boolean }
    & (T extends { of: unknown } ? {} : { _ColumnOfBrand: T["of"] })
    & (T extends { header: true } ? { _HeaderBrand: boolean } : {})

type Table<T = void> = Array<Row<{ of: T }>>

interface JustifiedCellOptions {
    columnJustification: Justification,
    columnWidth: Count<Char>,
}

type FormatTableOptions<T> = {
    justification: JustificationOption
    colors: Maybe<Array<Maybe<ColorMethod>>>,
    headerRowCount: Count<Row<{ of: T, header: true }>>,
}

interface TableForForumRowPartsOptions<T> {
    index: number,
    colors: Maybe<Array<Maybe<ColorMethod>>>,
    headerRowCount: Count<Row<{ of: T, header: true }>>,
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
    Row,
    Column,
    Table,
    TableForForumRowPartsOptions,
    TableFormat,
}
