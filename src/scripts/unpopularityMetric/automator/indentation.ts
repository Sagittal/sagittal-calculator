const computeIndentation = depth => {
    return Array(depth * 2 + 1).join(" ")
}

export {
    computeIndentation,
}
