import { ColorMethod } from "../../types"
import { Maybe } from "../code"

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Maybe<Justification>>

type Px = number & { _PxBrand: "Px" }

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

export {
    Px,
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
