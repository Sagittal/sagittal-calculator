import {Flacco, Head} from "../flacco"

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

interface Core extends Head {
    aim: Aim,
    shafts: Shafts,
}

interface Sagittal extends Flacco {
    core?: Core,
}

export {
    Core,
    Aim,
    Sagittal,
    Shafts,
}
