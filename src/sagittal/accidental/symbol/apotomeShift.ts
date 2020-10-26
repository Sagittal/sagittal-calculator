import {deepEquals, isUndefined, stringify} from "../../../general"
import {HeadId} from "../flacco"
import {getCore} from "./core"
import {isSagittal} from "./typeGuards"
import {Aim, NullSagittal, Sagittal, Shafts} from "./types"

const apotomeShift = (sagittal: NullSagittal | Sagittal): Sagittal => {
    if (!isSagittal(sagittal)) {
        return {...sagittal, ...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE)}
    }
    const {arm, ...core} = sagittal
    if (deepEquals(core, getCore(HeadId.BARE_SHAFT))) {
        return {...sagittal, ...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE)}
    }

    if (core.aim === Aim.DOWN) {
        throw new Error(`Do not shift symbols aiming down; tried to shift ${stringify(sagittal)}`)
    }
    if (core.shafts === Shafts.TRIPLE || core.shafts === Shafts.EX) {
        throw new Error(`Do not shift symbols which are already in the 2nd apotome section ${stringify(sagittal)}`)
    }

    return {
        ...sagittal,
        shafts: core.shafts === Shafts.SINGLE ? Shafts.TRIPLE : Shafts.EX,
    }
}

export {
    apotomeShift,
}
