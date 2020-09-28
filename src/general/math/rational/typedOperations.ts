import { IntegerDecimal } from "./num"

const integerDivide = <T extends number>(dividend: T, divisor: T): T & IntegerDecimal =>
    floor(dividend / divisor) as T & IntegerDecimal

const floor = <T extends number>(number: T): T & IntegerDecimal =>
    Math.floor(number) as T & IntegerDecimal

const ceil = <T extends number>(number: T): T & IntegerDecimal =>
    Math.ceil(number) as T & IntegerDecimal

export {
    integerDivide,
    floor,
    ceil,
}
