const {computeSumOfSquaresForSubmetrics} = require("../sumOfSquares/sumOfSquaresForSubmetrics")
const {setSumOfSquaresAtCoordinate} = require("./setSumOfSquaresAtCoordinate")

const gatherSumsOfSquares = (sumsOfSquares, submetricCombinations, best, indentation) => {
    let nextBest = best

    submetricCombinations.forEach(({submetrics, coordinate}) => {
        const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

        setSumOfSquaresAtCoordinate(sumOfSquares, sumsOfSquares, coordinate)

        if (sumOfSquares < nextBest.sumOfSquares) {
            nextBest = {sumOfSquares, submetrics}
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics, {logUnpopularities: true})
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            console.log(`${indentation}new best: ${JSON.stringify(nextBest)}`.green)
        }
    })

    return nextBest
}

module.exports = {
    gatherSumsOfSquares
}
