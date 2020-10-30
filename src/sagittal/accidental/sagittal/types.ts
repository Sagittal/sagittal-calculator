import {Flacco} from "../flacco"

enum Shafts {
    SINGLE = "single",
    DOUBLE = "double",
    TRIPLE = "triple",
    EX = "ex",
}

interface Sagittal extends Flacco {
    down?: boolean,
    shafts: Shafts,
}

type Core = Omit<Sagittal, "arm">

export {
    Core,
    Sagittal,
    Shafts,
}
