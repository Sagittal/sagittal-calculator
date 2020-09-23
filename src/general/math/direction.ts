import { isUndefined } from "../code"
import { MULTIPLICATIVE_IDENTITY } from "./constants"
import {
    computeIsSubMonzo,
    computeIsSubRatio,
    computeIsSuperMonzo,
    computeIsSuperRatio,
    computeIsUnisonMonzo,
    computeIsUnisonRatio,
    invertMonzo,
    invertRatio,
    Monzo,
    Ratio,
} from "./rational"
import { reciprocal } from "./typedOperations"
import { Direction, Numeric, NumericType, NumericTypeParameters } from "./types"

const computeIsSuperNumber = <T extends NumericTypeParameters, U extends NumericType<T>>(
    numericType: U,
): numericType is U & NumericType<T & { direction: Direction.SUPER }> => {
    const { monzo, ratio, number } = numericType

    return (!isUndefined(number) && number > MULTIPLICATIVE_IDENTITY) ||
        (!isUndefined(ratio) && computeIsSuperRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSuperMonzo(monzo))
}

const computeIsSubNumber = <T extends NumericTypeParameters, U extends NumericType<T>>(
    numericType: U,
): numericType is U & NumericType<T & { direction: Direction.SUB }> => {
    const { monzo, ratio, number } = numericType

    return (!isUndefined(number) && number < MULTIPLICATIVE_IDENTITY) ||
        (!isUndefined(ratio) && computeIsSubRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsSubMonzo(monzo))
}

const computeIsUnisonNumber = <T extends NumericTypeParameters, U extends NumericType<T>>(
    numericType: U,
): numericType is U & NumericType<T & { direction: Direction.UNISON }> => {
    const { monzo, ratio, number } = numericType

    return (!isUndefined(number) && number === MULTIPLICATIVE_IDENTITY) ||
        (!isUndefined(ratio) && computeIsUnisonRatio(ratio)) ||
        (!isUndefined(monzo) && computeIsUnisonMonzo(monzo))
}

const computeSuperNumber = <T extends NumericTypeParameters, U extends NumericType<T>>(
    numericType: U,
): Exclude<U, NumericType> & NumericType<Omit<T, "_DirectionBrand"> & { direction: Direction.SUPER }> => {
    const isSubNumber = computeIsSubNumber(numericType)

    let superNumber: Exclude<U, NumericType> & NumericType<T & { direction: Direction.SUPER }> =
        {} as Exclude<U, NumericType> & NumericType<T & { direction: Direction.SUPER }>
    if (isSubNumber) {
        const { monzo, ratio, number } = numericType
        if (!isUndefined(ratio)) {
            superNumber.ratio = invertRatio(ratio) as Ratio<T>
        }
        if (!isUndefined(monzo)) {
            superNumber.monzo = invertMonzo(monzo) as Monzo<T>
        }
        if (!isUndefined(number)) {
            superNumber.number = reciprocal(number) as Numeric<T>
        }
    } else {
        superNumber =
            numericType as Exclude<U, NumericType> & NumericType<T & { direction: Direction.SUPER }>
    }

    return superNumber
}

export {
    computeIsSubNumber,
    computeIsSuperNumber,
    computeIsUnisonNumber,
    computeSuperNumber,
}
