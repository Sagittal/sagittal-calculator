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

type IO = string & { _IOBrand: "IO" }
type Formatted<T> = IO & { _FormattedBrand: T }

interface ComputeAlignedRowCellOptions {
    columnJustification: Justification,
    columnWidth: number,
}

interface AlignTableOptions {
    justification?: JustificationOption
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
}
