import { computeSuperQuotient, Quotient } from "../../math"
import { TableFormat } from "../table"
import { Formatted } from "./types"

const formatQuotient = <T extends Quotient>(
    inputQuotient: T,
    { tableFormat, directed = true }: { tableFormat?: TableFormat, directed?: boolean },
): Formatted<T> => {
    const [numerator, denominator] = directed ? inputQuotient : computeSuperQuotient(inputQuotient)

    return directed ?
        tableFormat === TableFormat.FORUM ?
            `[/pre][latex]\\frac{${numerator}}{${denominator}}[/latex][pre]` as Formatted<T> :
            `${numerator}/${denominator}` as Formatted<T> :
        `${denominator}:${numerator}` as Formatted<T>
}

export {
    formatQuotient,
}

/*
5/4 valid directed quotient (super)                 4/5 valid directed quotient (sub)
[5, 4] as Quotient<{ direction: Direction.SUPER}>   [4, 5] as Quotient<{ direction: Direction.SUB }>

5:4 does not exist                                  4:5 valid undirected quotient
                                                    [5, 4] as Quotient
 */
