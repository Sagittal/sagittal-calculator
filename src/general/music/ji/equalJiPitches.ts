import { equalRationals } from "../../math"
import { JiPitch } from "./types"

const equalJiPitches = (jiPitchA: JiPitch, jiPitchB: JiPitch): boolean => {
    return equalRationals(jiPitchA, jiPitchB)
}

export {
    equalJiPitches,
}
