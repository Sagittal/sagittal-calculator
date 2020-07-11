import { INA_SIZES } from "./intervals"
import { Cents } from "../../utilities/types"
import { Level } from "./types"

const computeInaDistance = (distance: Cents, level: Level) => {
    return distance / INA_SIZES[ level ]
}

export {
    computeInaDistance,
}
