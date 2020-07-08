const computeCombinations = (array, count, {withRepeatedElements = false} = {}) => {
    if (withRepeatedElements) return computeCombinationsWithRepetitions(array, count)

    const combinations = []

    if (count === 0) return combinations

    const computeRecursiveCombinations = (integer, combination) => {
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

    return combinations.map(combination => {
        return combination.map(index => {
            return array[index - 1]
        })
    })
}

const computeCombinationsWithRepetitions = (xs, k) => {
    const comb = (n, ys) => {
        if (0 === n) return ys;
        if (isNull(ys)) return comb(n - 1, map(pure, xs));

        return comb(n - 1, concatMap(zs => {
            const h = head(zs);
            return map(x => [x].concat(zs), dropWhile(x => x !== h, xs));
        }, ys));
    };
    return comb(k, []);
};

// GENERIC FUNCTIONS ------------------------------------------------------

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) => [].concat.apply([], xs.map(f));

// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = (p, xs) => {
    let i = 0;
    for (let lng = xs.length;
         (i < lng) && p(xs[i]); i++) {}
    return xs.slice(i);
};

// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = (m, n) =>
    Array.from({
        length: Math.floor(n - m) + 1
    }, (_, i) => m + i);

// head :: [a] -> Maybe a
const head = xs => xs.length ? xs[0] : undefined;

// isNull :: [a] -> Bool
const isNull = xs => (xs instanceof Array) ? xs.length < 1 : undefined;

// length :: [a] -> Int
const length = xs => xs.length;

// map :: (a -> b) -> [a] -> [b]
const map = (f, xs) => xs.map(f);

// pure :: a -> [a]
const pure = x => [x];

// show :: a -> String
const show = x => JSON.stringify(x, null, 2);

module.exports = {
    computeCombinations,
}
