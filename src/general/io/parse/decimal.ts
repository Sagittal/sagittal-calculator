import { RealDecimal } from "../../math"
import { Io } from "../types"

const parseDecimal = (decimalIo: Io): RealDecimal => {
    return parseFloat(decimalIo) as RealDecimal
}

export {
    parseDecimal,
}
