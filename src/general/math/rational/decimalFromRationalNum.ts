import { isUndefined } from "../../code"
import { Decimal } from "../types"
import { computeDecimalFromMonzo } from "./monzo"
import { computeDecimalFromRatio } from "./ratio"
import { RationalNum, RationalNumTypeParameters } from "./types"

const computeDecimalFromRationalNum = <T extends RationalNumTypeParameters = { potentiallyIrrational: false }>(
    { decimal, ratio, monzo }: RationalNum,
): Decimal<T> => {
    if (isUndefined(decimal)) {
        if (!isUndefined(ratio)) {
            decimal = computeDecimalFromRatio(ratio)
        } else if (!isUndefined(monzo)) {
            decimal = computeDecimalFromMonzo(monzo)
        }
    }

    return decimal as Decimal<T>
}

export {
    computeDecimalFromRationalNum,
}
