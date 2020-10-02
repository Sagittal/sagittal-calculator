import { Step } from "../../../types"
import { Prime } from "../../rational"
import { Exponent } from "../../types"
import { RealMonzo, Val } from "./types"

const computeMonzoMapping = (monzo: RealMonzo, val: Val): Step => {
    return monzo.reduce(
        (step: Step, primeExponent: Exponent<Prime>, index: number): Step => {
            return step + primeExponent * val[ index ] as Step
        },
        0 as Step,
    )
}

export {
    computeMonzoMapping,
}
