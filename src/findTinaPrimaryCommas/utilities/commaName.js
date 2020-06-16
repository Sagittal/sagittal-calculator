const computeCommaName = (monzo, {directed = true, factored = false, abbreviated = true}) => {
    const noTwosOrThreesMonzo = monzo.slice()
    noTwosOrThreesMonzo[0] = 0
    noTwosOrThreesMonzo[1] = 0
    const ratio = computeRatioFromMonzo(noTwosOrThreesMonzo)

    /*
    const SUPERSCRIPT_NUMS: string[] = [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹' ]
        const TYPES: string[] = [ 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L' ]
        const COMMAS: Integer[][] = [ [ 1 ], [ 455 ], [ 65, 77 ], [ 5, 19 ], [ 5 ], [ 91 ], [ 19, 4375 ], [ 19 ], [ 49, 55 ], [ 385 ], [ 11, 13 ], [ 11, 31 ], [ 5, 7 ], [ 5, 343 ], [ 85 ], [ 1225 ], [ 7, 25 ], [ 343 ], [ 17 ], [ 14641 ], [ 7, 11 ], [ 275 ], [ 13, 49 ], [ 8575 ], [ 11, 35 ], [ 143 ], [ 5, 17 ], [ 11, 23 ], [ 7, 125 ], [ 245 ], [ 17 ], [ 7, 143 ], [ 7, 25 ], [ 1225 ], [ 23 ], [ 169 ], [ 11, 49 ], [ 11, 31 ], [ 7, 17 ], [ 5, 91 ], [ 25 ], [ 19 ], [ 253 ], [ 91 ], [ 5 ], [ 875 ], [ 13, 25 ], [ 19, 25 ], [ 1 ], [ 4375 ], [ 5, 77 ], [ 13, 125 ], [ 5, 19 ], [ 13 ], [ 35 ], [ 77 ], [ 11, 65 ], [ 65 ], [ 7 ], [ 625 ], [ 11, 13 ], [ 325 ], [ 5, 7 ], [ 3125 ], [ 11, 85 ], [ 7, 19 ], [ 7, 55 ], [ 55 ], [ 11, 91 ], [ 23, 125 ], [ 7, 11 ], [ 13, 17 ], [ 17, 25 ], [ 7, 247 ], [ 25, 49 ], [ 31 ], [ 49 ], [ 5, 17 ], [ 47 ], [ 11, 23 ], [ 11 ], [ 245 ], [ 5, 23 ], [ 7, 13 ], [ 11, 17 ], [ 5, 11 ], [ 1001 ], [ 23 ], [ 25, 91 ], [ 125 ], [ 35 ], [ 7, 17 ], [ 5, 91 ], [ 25 ], [ 175 ], [ 5, 13 ], [ 17, 49 ], [ 13, 19 ], [ 25, 77 ], [ 13, 25 ], [ 5, 13 ], [ 175 ], [ 37 ], [ 11, 325 ], [ 13 ], [ 35 ], [ 125 ], [ 11, 19 ], [ 65 ], [ 7 ], [ 625 ], [ 5, 11 ], [ 11, 17 ], [ 5, 23 ], [ 7, 275 ], [ 11 ], [ 11, 85 ], [ 7, 65 ], [ 49 ], [ 31 ], [ 55 ], [ 11, 91 ], [ 595 ], [ 5, 49 ], [ 5, 49 ], [ 595 ], [ 11, 91 ], [ 55 ], [ 31 ], [ 49 ], [ 7, 65 ], [ 11, 85 ], [ 11 ], [ 7, 275 ], [ 5, 23 ], [ 11, 17 ], [ 5, 11 ], [ 625 ], [ 7 ], [ 65 ], [ 11, 19 ], [ 125 ], [ 35 ], [ 13 ], [ 11, 325 ], [ 37 ], [ 175 ], [ 5, 13 ], [ 13, 25 ] ].map((stuff: number[]): Integer[] => stuff.map((t: number): Integer => as.Integer(t)))

        COMMAS.forEach((comma: Integer[], commaIndex: number): void => {
            const commaResult: string[] = comma.map((commaSide: Integer): string => {
                const monzo: Monzo = primeFactorize(commaSide)
                const thing: string[] = []

                monzo.forEach((term: Integer, termIndex: number): void => {
                    if (term === 0) {
                        return
                    }

                    if (term === 1) {
                        thing.push(`${PRIMES[ termIndex ]}`)
                    }

                    if (term > 1) {
                        thing.push(`${PRIMES[ termIndex ]}${SUPERSCRIPT_NUMS[ term ]}`)
                    }
                })

                return thing.join('.')
            })

            const finalResult: string = `${commaResult.join(':')}${TYPES[ commaIndex ]}`

            console.log(finalResult)
        })
     */
}

module.exports = {
    computeCommaName,
}
