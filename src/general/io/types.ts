import { Maybe } from "../code"
import { Count } from "../types"

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Maybe<Justification>>

type HexColor = string & { _HexColorBrand: "HexColor" }
type Filename = string & { _FileBrand: "File" }

type Char = string & { _CharBrand: "Char" }

type IO = string & { _IOBrand: "IO" }
type Formatted<T> = IO & { _FormattedBrand: T }

type Row<T = void, Header extends "Header" | void = void> =
    IO[]
    & { _RowBrand: "Row" }
    & (T extends void ? {} : { _RowOfBrand: T })
    & (Header extends "Header" ? { _HeaderBrand: "Header" } : {})
type Column<T = void> = IO[] & { _ColumnBrand: "Column" } & (T extends void ? {} : { _ColumnOfBrand: T })
type Table<T = void> = Array<Row<T>>

interface ComputeAlignedRowCellOptions {
    columnJustification: Justification,
    columnWidth: number,
}

interface FormatTableOptions {
    justification?: JustificationOption
    colors?: ColorMethod[],
    headerRowCount?: Count<Row<unknown, "Header">>,
}

type ColorMethod = "green" | "red" | "yellow" | "cyan" | "blue" | "white" | "magenta"

// TODO: no good place to put this, but tslint is deprecated now; use typescript-eslint
//  https://github.com/typescript-eslint/typescript-eslint
//  https://github.com/typescript-eslint/tslint-to-eslint-config
//  note that you'll have to rewrite your custom rules. this might help:
//  https://timdeschryver.dev/blog/migrating-a-tslint-rule-to-eslint-with-typescript-eslint

interface IoSettings {
    noWrite: boolean,
    forForum: boolean,
}

export {
    ColorMethod,
    HexColor,
    Justification,
    JustificationOption,
    Formatted,
    ComputeAlignedRowCellOptions,
    FormatTableOptions,
    Filename,
    IO,
    Row,
    Column,
    Table,
    Char,
    IoSettings,
}
