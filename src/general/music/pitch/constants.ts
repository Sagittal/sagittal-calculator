import { Monzo, Quotient } from "../../math"
import { Pitch } from "./types"

const SQRT_SCALER = [1, 2] as Quotient

const NON_JI_PITCH_BASE_MONZO = [1] as Monzo<{ rational: true }>

// I wish I could use the EMPTY_MONZO here but it leads to bundling errors
const UNISON = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

export {
    SQRT_SCALER,
    UNISON,
    NON_JI_PITCH_BASE_MONZO,
}
