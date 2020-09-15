import { Cents, Multiplier } from "../../../../general"
import { Ina, INA_SIZES, JiNotationLevel } from "../../../../sagittal"

const computeInaDistance = (distance: Cents, jiNotationLevel: JiNotationLevel): Multiplier<Ina> =>
    distance / INA_SIZES[ jiNotationLevel ] as Multiplier<Ina>

export {
    computeInaDistance,
}
