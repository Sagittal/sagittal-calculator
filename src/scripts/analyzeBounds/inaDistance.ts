import { Cents, Proportion } from "../../general"
import { INA_SIZES, Level } from "../../sagittal"

const computeInaDistance = (distance: Cents, level: Level): Proportion =>
    distance / INA_SIZES[ level ] as Proportion

export {
    computeInaDistance,
}
