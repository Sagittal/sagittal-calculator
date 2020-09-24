import { Integer } from "./types"

const integerDivide = <T extends number>(dividend: T, divisor: T): T & Integer =>
    floor(dividend / divisor) as T & Integer

const floor = <T extends number>(number: T): T & Integer =>
    Math.floor(number) as T & Integer

const ceil = <T extends number>(number: T): T & Integer =>
    Math.ceil(number) as T & Integer

export {
    integerDivide,
    floor,
    ceil,
}
