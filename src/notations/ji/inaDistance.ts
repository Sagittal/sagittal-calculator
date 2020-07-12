import { INA_SIZES } from "./intervals"
import { Cents, Proportion } from "../../utilities/types"
import { Level } from "./types"

const computeInaDistance = (distance: Cents, level: Level): Proportion => {
    return distance / INA_SIZES[ level ] as Proportion // todo: hey one of these proportions is actually a Sum<Proportion> hwich is really weird but hey that's what it is, like the total inaDistance on an analyzed history or something
}

export {
    computeInaDistance,
}
