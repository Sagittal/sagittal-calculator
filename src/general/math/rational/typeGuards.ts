import { dividesEvenly } from "../dividesEvenly"
import { Integer } from "./types"

const isInteger = (candidateInteger: number): candidateInteger is Integer => {
    return dividesEvenly(candidateInteger, 1)
}

export {
    isInteger,
}
