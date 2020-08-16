import {
    computeCentsFromRatio,
    computeN2D3P9,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeTrimmedMonzo,
    deepEquals,
    invertMonzo,
    Monzo,
    N2D3P9,
    presentRatio,
    round,
} from "../../../general"
import { computeSmileyFromAscii, JI_SYMBOLS, JiSymbol } from "../../../notations"

const computeNotatingSymbols = (monzo: Monzo) => { // TODO: this might be handy to just have available outside of here, tested and such
    const notatingSymbols: JiSymbol[] = []

    JI_SYMBOLS.forEach(symbol => {
        const fiveRoughPrimaryCommaMonzo = computeRoughNumberMonzo(symbol.primaryComma.monzo, 5)

        if (deepEquals(monzo, fiveRoughPrimaryCommaMonzo) || deepEquals(monzo, invertMonzo(fiveRoughPrimaryCommaMonzo))) {
            notatingSymbols.push(symbol)
        }
    })

    return notatingSymbols
}

// http://forum.sagittal.org/viewtopic.php?p=2243#p2243
const primeExponentRanges = [
    [-2, -1, 0, 1, 2, 3, 4, 5, 6],  // 5
    [-2, -1, 0, 1, 2, 3, 4],        // 7
    [-1, 0, 1, 2],                  // 11
    [-1, 0, 1, 2],                  // 13
    [-1, 0, 1],                     // 17
    [-1, 0, 1],                     // 19
    [-1, 0, 1],                     // 23
    [0, 1],                         // 29
    [0, 1],                         // 31
    [0, 1],                         // 37
    [0, 1],                         // 41
    [0, 1],                         // 43
    [0, 1],                         // 47
]

const results = [] as Array<{ output: string, n2d3p9: N2D3P9 }>

primeExponentRanges[ 0 ].forEach(five => {
    primeExponentRanges[ 1 ].forEach(seven => {
        primeExponentRanges[ 2 ].forEach(eleven => {
            primeExponentRanges[ 3 ].forEach(thirteen => {
                primeExponentRanges[ 4 ].forEach(seventeen => {
                    primeExponentRanges[ 5 ].forEach(nineteen => {
                        primeExponentRanges[ 6 ].forEach(twentythree => {
                            primeExponentRanges[ 7 ].forEach(twentynine => {
                                primeExponentRanges[ 8 ].forEach(thirtyone => {
                                    primeExponentRanges[ 9 ].forEach(thirtyseven => {
                                        primeExponentRanges[ 10 ].forEach(fortyone => {
                                            primeExponentRanges[ 11 ].forEach(fortythree => {
                                                primeExponentRanges[ 12 ].forEach(fortyseven => {
                                                    const monzo = computeTrimmedMonzo([0, 0, five, seven, eleven, thirteen, seventeen, nineteen, twentythree, twentynine, thirtyone, thirtyseven, fortyone, fortythree, fortyseven] as Monzo)

                                                    if (computeCentsFromRatio(computeRatioFromMonzo(monzo)) < 0) return

                                                    const n2d3p9 = round(computeN2D3P9(monzo), 2)

                                                    if (n2d3p9 < 136) {
                                                        const ratio = presentRatio(computeRatioFromMonzo(monzo))
                                                        const notatingSymbols = computeNotatingSymbols(monzo)
                                                        const smileys = notatingSymbols.map(symbol => computeSmileyFromAscii(symbol.ascii)).join(" ")

                                                        results.push({
                                                            output: `[tr][td]${ratio}[/td][td]${n2d3p9}[/td][td]${smileys}[/td][/tr]`,
                                                            n2d3p9,
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

console.log("count of results with N2D3P9 < 136", results.length) // todo if tested (and save debug logs and shared setup etc) could follow Dave's formulas to give an arbitrary cut-off

results.sort((result, nextResult) =>
    result.n2d3p9 - nextResult.n2d3p9)

console.log(`[table]`)
console.log(`[tr][th]ratio[/th][th]N2D3P9[/th][th]symbol[/th][/tr]`)
results.forEach(result => {
    console.log(result.output)
})
console.log(`[/table]`)
