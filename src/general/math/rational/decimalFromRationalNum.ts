import { isUndefined } from "../../code"
import { Decimal } from "../types"
import { computeDecimalFromMonzo } from "./monzo"
import { computeDecimalFromRatio } from "./ratio"
import { RationalNum, RationalNumTypeParameters } from "./types"

const computeDecimalFromRationalNum = <T extends RationalNumTypeParameters = { potentiallyIrrational: false }>(
    { decimal, ratio, monzo }: RationalNum,
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
