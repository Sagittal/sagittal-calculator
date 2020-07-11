import { INA_SIZES } from "./intervals"
import { Cents, Proportion } from "../../utilities/types"
import { Level } from "./types"

const computeInaDistance = (distance: Cents, level: Level): Proportion => {
    return distance / INA_SIZES[ level ] as Proportion
}

export {
    computeInaDistance,
}
