import { computeTrimmedArray, deepEquals, MAX_JS_PRECISION, Precision } from "../../../code"
import { Monzo } from "./types"

const equalMonzos = (monzoA: Monzo, monzoB: Monzo, precision: Precision = MAX_JS_PRECISION): boolean =>
    deepEquals(computeTrimmedArray(monzoA), computeTrimmedArray(monzoB), precision)

export {
    equalMonzos,
}
