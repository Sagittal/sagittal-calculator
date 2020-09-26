import { isUndefined } from "../../../code"
import { RationalNum } from "../../rational"
import { NumTypeParameters } from "../types"
import { computeDecimalFromMonzo } from "./decimalFromMonzo"
import { computeDecimalFromRatio } from "./decimalFromRatio"
import { Decimal } from "./types"

const computeDecimalFromRationalNum = <T extends NumTypeParameters>(
    { decimal, ratio, monzo }: RationalNum<T>,
): Decimal<T> => {
    let decimalOutput
    if (isUndefined(decimal)) {
        if (!isUndefined(ratio)) {
            decimalOutput = computeDecimalFromRatio(ratio)
        } else if (!isUndefined(monzo)) {
            decimalOutput = computeDecimalFromMonzo(monzo)
        }
    } else {
        decimalOutput = decimal
    }

    return decimalOutput as Decimal<T>
}

export {
    computeDecimalFromRationalNum,
}
