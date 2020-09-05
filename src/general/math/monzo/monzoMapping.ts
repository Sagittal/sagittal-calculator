import { Step } from "../../types"
import { Monzo, Val } from "./types"

const computeMonzoMapping = (monzo: Monzo, val: Val): Step => {
    return monzo.reduce(
        (memo, term, index) => {
            return memo + term * val[ index ] as Step
        },
        0 as Step,
    )
}

export {
    computeMonzoMapping,
}
