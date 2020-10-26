export {NULL_SAGITTAL} from "./constants"
export {flipSagittal} from "./flip"
export {computeApotomeComplement} from "./apotomeComplement"
export {apotomeShift} from "./apotomeShift"
export {getCore} from "./core"
export {Core, Aim, Sagittal, Shafts} from "./types"
export {computeSagittalFromFlacco} from "./sagittalFromFlacco"

// Todo: FLAVOR / SYMBOL / SAGITTAL
//  This module may now actually be "sagittal" not "symbol", but wait to see how things go
//  That'd be just slightly weird, because it'd go sagittal/accidental/sagittal, where the top sagittal means the
//  Capitalized kind, the notation system, while the lower kind means the lower case kind, the individual symbol
//  I suppose it's possible we yet may want to go back to symbol instead of sagittal...
