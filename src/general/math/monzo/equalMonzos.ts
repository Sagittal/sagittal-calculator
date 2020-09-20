import { computeTrimmedArray, deepEquals } from "../../code"
import { PotentiallyIrrationalMonzoParameter } from "./types"

const equalMonzos = (
    monzoA: PotentiallyIrrationalMonzoParameter,
    monzoB: PotentiallyIrrationalMonzoParameter,
): boolean => {
    return deepEquals(computeTrimmedArray(monzoA), computeTrimmedArray(monzoB))
}

export {
    equalMonzos,
}
