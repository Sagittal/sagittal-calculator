import { dividesEvenly } from "./dividesEvenly"
import { Integer } from "./types"

const isInteger = (number: number): number is Integer => {
    return dividesEvenly(number, 1)
}

export {
    isInteger,
}
