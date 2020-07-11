const computeCombinations = <T>(array: T[], count: number, { withRepeatedElements = false } = {}): T[][] => {
    if (withRepeatedElements) return computeCombinationsWithRepetitions(array, count)

    const combinations: number[][] = []

    if (count === 0) return []

    const computeRecursiveCombinations = (integer: number, combination: number[]) => {
        if (combination.length === count) {
            combinations.push(combination.slice())

            return
        }

        if (combination.length + array.length - integer + 1 < count) {
            return
        }

        computeRecursiveCombinations(integer + 1, combination)
        combination.push(integer)
        computeRecursiveCombinations(integer + 1, combination)
        combination.pop()
    }

    computeRecursiveCombinations(1, [])

    return combinations.map((combination) => {
        return combination.map(index => {
            return array[ index - 1 ]
        })
    })
}

const computeCombinationsWithRepetitions = <T>(array: T[], count: number): T[][] => {
    const comb = <U>(n: number, ys: U[][]): U[][] => {
        if (0 === n) return ys as U[][]
        if (isNull(ys)) return comb(n - 1, map(pure, array as unknown as U[]))

        return comb(n - 1, concatMap((zs: U[]) => {
            const h = head(zs)
            return map((x: U) => [x].concat(zs), dropWhile(x => x !== h, array as unknown as U[]))
        }, ys))
    }

    return comb(count, [] as T[][])
}

// GENERIC FUNCTIONS ------------------------------------------------------

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = <T, U>(f: (g: T) => U[], array: T[]): U[] =>
    ([] as U[]).concat.apply([] as T[], array.map(f))

// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = <T>(p: (q: T) => boolean, array: T[]): T[] => {
    let i = 0
    for (let lng = array.length;
         (i < lng) && p(array[ i ]); i++) {
    }
    return array.slice(i)
}

const head = <T>(array: T[]): T | undefined  => array.length ? array[ 0 ] : undefined

const isNull = <T>(array: T[]): boolean => array instanceof Array ? array.length < 1 : false

const map = <T, U>(f: (g: T) => U, array: T[]): U[] => array.map(f)

const pure = <T>(x: T): T[] => [x]

export {
    computeCombinations,
}
