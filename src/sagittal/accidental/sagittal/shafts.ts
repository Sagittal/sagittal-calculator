import {Maybe} from "@sagittal/general"
import {Shafts} from "./types"

const areShaftsEven = (shafts: Shafts): boolean =>
    shafts === Shafts.DOUBLE || shafts === Shafts.EX

const isMultiShaft = (shafts: Maybe<Shafts>): boolean =>
    shafts === Shafts.DOUBLE || shafts === Shafts.TRIPLE || shafts === Shafts.EX

export {
    areShaftsEven,
    isMultiShaft,
}
