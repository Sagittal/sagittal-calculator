const combineMonzos = (...monzos) => {
    const maximumMonzoLength = Math.max(...monzos.map(monzo => monzo.length))

    return [...Array(maximumMonzoLength).keys()].map(index => {
        return monzos.reduce(
            (term, monzo) => term + (monzo[index] || 0),
            0,
        )
    })
}

module.exports = {
    combineMonzos,
}
