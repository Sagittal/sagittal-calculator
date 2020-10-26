import {deepEquals, isUndefined, stringify} from "../../../general"
import {HeadId} from "../flacco"
import {getCore} from "./core"
import {Aim, Sagittal, Shafts} from "./types"

const apotomeShift = (sagittal: Sagittal): Sagittal => {
    if (sagittal.core?.aim === Aim.DOWN) {
        throw new Error(`Do not shift symbols aiming down; tried to shift ${stringify(sagittal)}`)
    }
    if (sagittal.core?.shafts === Shafts.TRIPLE || sagittal.core?.shafts === Shafts.EX) {
        throw new Error(`Do not shift symbols which are already in the 2nd apotome section ${stringify(sagittal)}`)
    }

    if (isUndefined(sagittal.core) || deepEquals(sagittal.core, getCore(HeadId.BARE_SHAFT))) {
        return {...sagittal, core: getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE)}
    }

    return {
        ...sagittal,
        core: {
            ...sagittal.core,
            shafts: sagittal.core.shafts === Shafts.SINGLE ? Shafts.TRIPLE : Shafts.EX,
        },
    }
}

export {
    apotomeShift,
}
