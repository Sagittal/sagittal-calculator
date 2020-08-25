enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | Array<Justification | undefined>

export {
    Justification,
    JustificationOption,
}
