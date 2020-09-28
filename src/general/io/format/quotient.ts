import { computeSuperQuotient, Quotient } from "../../math"
import { Formatted } from "./types"

const formatQuotient = <T extends Quotient>(
    inputQuotient: T, { directed }: { directed: boolean } = { directed: true },
): Formatted<T> => {
    const [numerator, denominator] = directed ? inputQuotient : computeSuperQuotient(inputQuotient)

    return directed ?
        `${numerator}/${denominator}` as Formatted<T> :
        `${denominator}:${numerator}` as Formatted<T>
}

export {
    formatQuotient,
}

/*
5/4 valid directed quotient (super)      4/5 valid directed quotient (sub)
[5, 4] as Quotient                             [4, 5] as Quotient

5:4 does not exist                          4:5 valid undirected quotient
                                            [5, 4] as Quotient<Undirected>
 */
