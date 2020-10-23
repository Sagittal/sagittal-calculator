import {Head, Symbolic} from "../flacco"

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

interface Symbol extends Symbolic {
    core?: Core,
}

export {
    Core,
    Aim,
    Symbol,
    Shafts,
}
