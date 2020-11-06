import {abs, Cents, round} from "../../../../general"
import {Err} from "./types"

const computeCentsError = (cents: Cents, centUnit: Cents): Err<Cents> => {
    const unrounded = cents / centUnit
    const rounded = round(unrounded)

    return abs(unrounded - rounded) as number as Err<Cents>
}

export {
    computeCentsError,
}
