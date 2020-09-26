import { Decimal } from "../../math"
import { Io } from "../types"

const parseDecimal = (decimalIo: Io): Decimal => {
    return parseFloat(decimalIo) as Decimal
}

export {
    parseDecimal,
}
