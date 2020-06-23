const computeEventDistance = (event, index, history) => {
    return Math.abs(index === 0 ? 0 : history[index - 1].position - event.position)
}

module.exports = {
    computeEventDistance,
}
