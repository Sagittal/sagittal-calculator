const round = <T extends number>(number: T, precision = 0): T => {
    const rounder = 10 ** precision

    return Math.round(number * rounder) / rounder as T
}

export {
    round,
}
