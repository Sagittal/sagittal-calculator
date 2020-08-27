type Formatted<T> = string & { _FormattedBrand: T }

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Justification | undefined>

type Px = number & { _PxBrand: "Px" }
type HexColor = string & { _HexColorBrand: "HexColor" }

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
}
