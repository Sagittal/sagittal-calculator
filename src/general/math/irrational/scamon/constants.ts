import { Monzo, Quotient } from "../../numeric"

const SQRT_SCALER = [1, 2] as Quotient

const IRRATIONAL_SCAMON_BASE_MONZO = [1] as Monzo<{ rational: true }>

export {
    IRRATIONAL_SCAMON_BASE_MONZO,
    SQRT_SCALER,
}
