import { IntegerDecimal } from "../../math"

const parseInteger = (integerIo: string): IntegerDecimal => {
    return parseInt(integerIo) as IntegerDecimal
}

export {
    parseInteger,
}
