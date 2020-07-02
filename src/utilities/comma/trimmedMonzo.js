const computeTrimmedMonzo = monzo => {
    const trimmedMonzo = monzo.slice()

    while (trimmedMonzo[trimmedMonzo.length - 1] === 0) {
        trimmedMonzo.pop()
    }

    return trimmedMonzo
}

module.exports = {
    computeTrimmedMonzo,
}
