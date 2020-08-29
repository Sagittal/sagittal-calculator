import { Maybe } from "../code"

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

type Row = IO[] & { _RowBrand: "Row" }
type Column = IO[] & { _ColBrand: "Col" }
type Table = Row[]

interface ComputeAlignedRowCellOptions {
    columnJustification: Justification,
    columnWidth: number,
}

interface AlignTableOptions {
    justification?: JustificationOption
    colors?: ColorMethod[],
}

type ColorMethod = "green" | "red" | "yellow" | "cyan" | "blue" | "white" | "magenta"

// TODO: no good place to put this, but tslint is deprecated now; use typescript-eslint
//  https://github.com/typescript-eslint/typescript-eslint
//  https://github.com/typescript-eslint/tslint-to-eslint-config
//  note that you'll have to rewrite your custom rules. this might help:
//  https://timdeschryver.dev/blog/migrating-a-tslint-rule-to-eslint-with-typescript-eslint

export {
    ColorMethod,
    HexColor,
    Justification,
    JustificationOption,
    Formatted,
    ComputeAlignedRowCellOptions,
    AlignTableOptions,
    Filename,
    IO,
    Row,
    Column,
    Table,
    Char,
}
