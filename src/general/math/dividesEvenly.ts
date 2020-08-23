const dividesEvenly = <T extends number, U extends number>(numeral: T, modulus: U): boolean =>
    numeral % modulus === 0

export {
    dividesEvenly,
}
