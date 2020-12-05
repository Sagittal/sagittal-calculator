import {abs, Scamon, THREE_PRIME_INDEX} from "@sagittal/general"
import {Ate} from "./types"

const computeAte = (jiPitch: Scamon<{rational: true}>): Ate =>
    abs(jiPitch.monzo[THREE_PRIME_INDEX] || 0) as Ate

export {
    computeAte,
}
