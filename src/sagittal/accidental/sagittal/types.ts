import {ArmId, Flacco, HeadId} from "../flacco"

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

interface NullSagittal {}

type Core = Omit<Sagittal, "arm">

type GetSagittalOptions = Partial<{
    armId: ArmId,
    against: boolean,
    headId: HeadId,
    shafts: Shafts,
    down: boolean,
}>

export {
    Core,
    Sagittal,
    NullSagittal,
    Shafts,
    GetSagittalOptions,
}
