import { Cents, Multiplier } from "../../../../general"
import { Ina, INA_SIZES, Level } from "../../../../sagittal"

const computeInaDistance = (distance: Cents, level: Level): Multiplier<Ina> =>
    distance / INA_SIZES[ level ] as Multiplier<Ina>

export {
    computeInaDistance,
}
