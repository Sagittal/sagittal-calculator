import {ArmId, Flacco, HeadId} from "../flacco"

// Todo: by the same idea as I eliminated orientation, shouldn't I eliminate aim with a down?
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

type GetSagittalOptions = Partial<{
    armId: ArmId,
    against: boolean,
    headId: HeadId,
    shafts: Shafts,
    aim: Aim
}>

export {
    Core,
    Aim,
    Sagittal,
    NullSagittal,
    Shafts,
    GetSagittalOptions,
}
