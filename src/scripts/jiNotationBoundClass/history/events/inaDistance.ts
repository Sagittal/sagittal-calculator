import {Abs, Cents, Multiplier} from "../../../../general"
import {Ina, INA_CENTS_SIZES, JiNotationLevelId} from "../../../../sagittal"

const computeInaDistance = (distance: Abs<Cents>, jiNotationLevel: JiNotationLevelId): Multiplier<Ina> =>
    distance / INA_CENTS_SIZES[jiNotationLevel] as Multiplier<Ina>

export {
    computeInaDistance,
}
