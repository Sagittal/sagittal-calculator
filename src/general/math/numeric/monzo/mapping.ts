import {formatMonzo, formatVal} from "../../../io"
import {Step} from "../../../types"
import {Prime} from "../../rational"
import {Exponent} from "../../types"
import {Monzo, Val} from "./types"

const computeMonzoMapping = (monzo: Monzo, val: Val): Step => {
    if (val.length < monzo.length) {
        throw new Error(`Please provide a val with a prime limit at least as high as the monzo it is mapping. This val ${formatVal(val)} could not map monzo ${formatMonzo(monzo)}.`)
    }

    return monzo.reduce(
        (step: Step, primeExponent: Exponent<Prime>, index: number): Step => {
            return step + primeExponent * val[index] as Step
        },
        0 as Step,
    )
}

export {
    computeMonzoMapping,
}
