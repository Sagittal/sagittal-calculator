const computeIndentation = (depth: number) => {
    return Array(depth * 2 + 1).join(" ")
}

export {
    computeIndentation,
}
