import { computeTrimmedArray, deepEquals } from "../../../code"
import { RealMonzo } from "./types"

const equalRealMonzos = (realMonzoA: RealMonzo, realMonzoB: RealMonzo): boolean =>
    deepEquals(computeTrimmedArray(realMonzoA), computeTrimmedArray(realMonzoB))

export {
    equalRealMonzos,
}
