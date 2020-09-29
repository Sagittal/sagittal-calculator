import { Decimal, IntegerDecimal, NumTypeParameters, RationalDecimal, round } from "../../math"
import { IO_PRECISION } from "../constants"
import { Formatted } from "./types"

const alignFormattedDecimal: {
    <T extends NumTypeParameters>(formattedDecimal: Formatted<IntegerDecimal<T>>): Formatted<IntegerDecimal<T>>
    <T extends NumTypeParameters>(formattedDecimal: Formatted<RationalDecimal<T>>): Formatted<RationalDecimal<T>>
    <T extends NumTypeParameters>(formattedDecimal: Formatted<Decimal<T>>): Formatted<Decimal<T>>
} = <T extends NumTypeParameters>(
    formattedDecimal: Formatted<Decimal<T>>,
): Formatted<Decimal<T>> => {
    while (formattedDecimal.length < 7) {
        formattedDecimal = " " + formattedDecimal as Formatted<Decimal<T>>
    }

    return formattedDecimal
}

const formatDecimal = <T extends NumTypeParameters>(
    decimal: Decimal<T>,
    { align }: { align?: boolean } = {},
): Formatted<Decimal<T>> => {
    const roundedDecimal = round(decimal, IO_PRECISION)
        .toFixed(3)
        .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<Decimal<T>>

    return align ?
        alignFormattedDecimal(roundedDecimal) :
        roundedDecimal
}

const formatIntegerDecimal = <T extends NumTypeParameters>(
    integerDecimal: IntegerDecimal<T>,
    { align }: { align?: boolean } = {},
): Formatted<IntegerDecimal<T>> => {
    const stringifiedIntegerDecimal = integerDecimal.toString()

    return align ?
        alignFormattedDecimal(stringifiedIntegerDecimal + "    " as Formatted<IntegerDecimal<T>>) :
        stringifiedIntegerDecimal as Formatted<IntegerDecimal<T>>
}

export {
    alignFormattedDecimal,
    formatDecimal,
    formatIntegerDecimal,
}
