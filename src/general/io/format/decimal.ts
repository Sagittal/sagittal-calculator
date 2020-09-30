import { IntegerDecimal, NumericProperties, RationalDecimal, RealDecimal, round } from "../../math"
import { IO_PRECISION } from "../constants"
import { Formatted } from "./types"

const alignFormattedDecimal: {
    <T extends NumericProperties>(formattedDecimal: Formatted<IntegerDecimal<T>>): Formatted<IntegerDecimal<T>>
    <T extends NumericProperties>(formattedDecimal: Formatted<RationalDecimal<T>>): Formatted<RationalDecimal<T>>
    <T extends NumericProperties>(formattedDecimal: Formatted<RealDecimal<T>>): Formatted<RealDecimal<T>>
} = <T extends NumericProperties>(
    formattedDecimal: Formatted<RealDecimal<T>>,
): Formatted<RealDecimal<T>> => {
    while (formattedDecimal.length < 7) {
        formattedDecimal = " " + formattedDecimal as Formatted<RealDecimal<T>>
    }

    return formattedDecimal
}

const formatDecimal = <T extends NumericProperties>(
    decimal: RealDecimal<T>,
    { align }: { align?: boolean } = {},
): Formatted<RealDecimal<T>> => {
    const roundedDecimal = round(decimal, IO_PRECISION)
        .toFixed(3)
        .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<RealDecimal<T>>

    return align ?
        alignFormattedDecimal(roundedDecimal) :
        roundedDecimal
}

const formatIntegerDecimal = <T extends NumericProperties>(
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
