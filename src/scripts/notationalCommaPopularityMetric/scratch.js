// console.log(ourCandidateMetric([7,5]))


// const computeRho = sed => {
//     const n = realPopularities.length
//     const rho = 1 - ((6 * sed) / (n * (n ** 2 - 1)))
// }

/*
let maxRho = 0
let k = 1
let tries = 0
let dir = 1
while (tries < 1000) {
    tries++

    const ourApproximatePopularities = computeOurPopularities(popularities)
    const ourRanks = computeOurRanks(ourApproximatePopularities)
    const sed = computeSumOfSquares(ourRanks, popularities)

    const rho = 1 - ((6 * sed) / (n * (n ** 2 - 1)))

    if (rho > maxRho) {
        maxRho = rho
    } else {
        dir = dir * -1
    }

    k = k + (dir * k * 2 ** -tries)
}
console.log(maxRho, k)
 */
