// TODO: if I'm not using this where I'm doing like mod() === 0... why not? in like "roughness" module
const dividesEvenly = (number: number, modulus: number): boolean =>
    number % modulus === 0

export {
    dividesEvenly,
}
