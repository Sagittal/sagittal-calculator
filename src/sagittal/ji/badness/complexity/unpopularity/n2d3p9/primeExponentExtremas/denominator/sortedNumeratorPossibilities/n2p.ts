import {computeRationalDecimalGpf, Decimal, Numerator} from "@sagittal/general"
import {computeN2} from "./n2"
import {N2P} from "./types"

const computeN2P = (numerator: Numerator & Decimal<{integer: true}>): N2P =>
    computeN2(numerator) * computeRationalDecimalGpf(numerator) as N2P

export {
    computeN2P,
}
