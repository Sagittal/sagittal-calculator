// Count Of Prime Factors with Repetition
const computeCopfr = monzo => {
    return monzo.reduce(
        (copfr, term) => {
            return copfr + Math.abs(term)
        },
        0,
    )
}

export {
    computeCopfr,
}
