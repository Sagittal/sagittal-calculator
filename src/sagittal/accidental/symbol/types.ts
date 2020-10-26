import {Flacco} from "../flacco"

enum Aim {
    UP = "up",
    DOWN = "down",
}

enum Shafts {
    SINGLE = "single",
    DOUBLE = "double",
    TRIPLE = "triple",
    EX = "ex",
}

interface Sagittal extends Flacco {
    aim: Aim,
    shafts: Shafts,
}

interface NullSagittal {}

type Core = Omit<Sagittal, "arm">

export {
    Core,
    Aim,
    Sagittal,
    NullSagittal,
    Shafts,
}
