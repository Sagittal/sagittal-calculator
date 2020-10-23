import {Orientation} from "./types"

const reorient = (orientation: Orientation): Orientation =>
    orientation === Orientation.WITH ? Orientation.AGAINST : Orientation.WITH

export {
    reorient,
}
