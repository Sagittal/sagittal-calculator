import { computeTrimmedArray, deepEquals } from "../../../code"
import { Monzo } from "./types"

const equalMonzos = (monzoA: Monzo, monzoB: Monzo): boolean =>
    deepEquals(computeTrimmedArray(monzoA), computeTrimmedArray(monzoB))

export {
    equalMonzos,
}
