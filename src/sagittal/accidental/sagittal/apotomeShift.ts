import {deepEquals, isUndefined, Maybe, stringify} from "@sagittal/general"
import {HeadId} from "../flacco"
import {APOTOME_CORE, getCore} from "./core"
import {Sagittal, Shafts} from "./types"

const apotomeShift = (sagittal: Maybe<Sagittal>): Sagittal => {
    if (isUndefined(sagittal)) {
        return APOTOME_CORE
    }
    const {arm, ...core} = sagittal
    if (deepEquals(core, getCore(HeadId.BARE_SHAFT))) {
        return {...sagittal, ...APOTOME_CORE}
    }

    if (core.down) {
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
