// count of prime factors > 3
const computeCopfgtt = monzo => {
    return monzo.reduce(
        (copfgtt, term, index) => {
            if (index < 2) return 0

            return copfgtt + Math.abs(term)
        },
        0,
    )
}

module.exports = {
    computeCopfgtt,
}
