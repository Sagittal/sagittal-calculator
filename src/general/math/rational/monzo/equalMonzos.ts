import { computeTrimmedArray, deepEquals } from "../../../code"
import { MonzoNotDefaultingToRational } from "./types"

const equalMonzos = (
    monzoA: MonzoNotDefaultingToRational,
    monzoB: MonzoNotDefaultingToRational,
): boolean => {
    return deepEquals(computeTrimmedArray(monzoA), computeTrimmedArray(monzoB))
}

export {
    equalMonzos,
}
