import { Cents, Proportion } from "../../../general"
import { INA_SIZES } from "./intervals"
import { Level } from "./types"

const computeInaDistance = (distance: Cents, level: Level): Proportion =>
    distance / INA_SIZES[ level ] as Proportion

export {
    computeInaDistance,
}
