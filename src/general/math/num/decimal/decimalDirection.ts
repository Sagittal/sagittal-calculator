import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumTypeParameters } from "../types"
import { DecimalNotDefaultingToPotentiallyIrrational } from "./types"

const isSuperDecimal = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
): decimal is DecimalNotDefaultingToPotentiallyIrrational<T & { direction: Direction.SUPER }> => {
    return decimal > MULTIPLICATIVE_IDENTITY
}

const isSubDecimal = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
): decimal is DecimalNotDefaultingToPotentiallyIrrational<T & { direction: Direction.SUB }> => {
    return decimal < MULTIPLICATIVE_IDENTITY
}

const isUnisonDecimal = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
): decimal is DecimalNotDefaultingToPotentiallyIrrational<T & { direction: Direction.SUB }> => {
    return decimal === MULTIPLICATIVE_IDENTITY
}

const invertDecimal: {
    <T extends NumTypeParameters & { direction: Direction.SUPER }>(
        decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
    ): DecimalNotDefaultingToPotentiallyIrrational<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumTypeParameters & { direction: Direction.SUB }>(
        decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
    ): DecimalNotDefaultingToPotentiallyIrrational<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumTypeParameters>(
        decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
    ): DecimalNotDefaultingToPotentiallyIrrational<T & { integer: false }>,
} = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T & { integer: false }> => {
    return 1 / decimal as DecimalNotDefaultingToPotentiallyIrrational<T & { integer: false }>
}

export {
    isSubDecimal,
    isSuperDecimal,
    isUnisonDecimal,
    invertDecimal,
}
