import { Ratio } from "../math"
import { computeUndirectedRatio } from "../music"

const presentRatio = (inputRatio: Ratio, { directed }: { directed: boolean } = { directed: true }): string => {
    const [numerator, denominator] = directed ? inputRatio : computeUndirectedRatio(inputRatio)

    return directed ?
        `${numerator}/${denominator}` :
        `${denominator}:${numerator}`
}

export {
    presentRatio,
}

/*
5/4 valid directed ratio (superunison)      4/5 valid directed ratio (subunison)
[5, 4] as Ratio                             [4, 5] as Ratio

5:4 does not exist                          4:5 valid undirected ratio
                                            [5, 4] as Ratio<Undirected>
 */
