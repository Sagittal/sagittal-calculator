const computeReducedMonzo = monzo => {
    const reducedMonzo = monzo.slice()

    while (reducedMonzo[reducedMonzo.length - 1] === 0) {
        reducedMonzo.pop()
    }

    return reducedMonzo
}

module.exports = {
    computeReducedMonzo,
}
