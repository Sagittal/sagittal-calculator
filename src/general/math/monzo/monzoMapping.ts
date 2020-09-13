import { Step } from "../../types"
import { Exponent, Prime } from "../types"
import { Monzo, Val } from "./types"

const computeMonzoMapping = (monzo: Monzo, val: Val): Step => {
    return monzo.reduce(
        (step: Step, term: Exponent<Prime>, index: number): Step => {
            return step + term * val[ index ] as Step
        },
        0 as Step,
    )
}

export {
    computeMonzoMapping,
}
