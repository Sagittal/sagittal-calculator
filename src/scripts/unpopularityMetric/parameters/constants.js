const LOCKED_AT_ZERO = {center: 0, count: 1}
const LOCKED_AT_ONE = {center: 1, count: 1}
const CHECK_NUMERIC_BOOLEAN = {center: 0.5, range: 1, count: 2}

const SUBMETRIC_NAME = {
    SOAPFAR: "soapfar",
    SOAPF: "soapf",
    COAPFAR: "coapfar",
    COAPF: "coapf",
    SOAPIFAR: "soapifar",
    SOAPIF: "soapif",
    COAPIFAR: "coapifar",
    COAPIF: "coapif",
    GPF: "gpf",
    GPIF: "gpif",
}

const SUBMETRIC_OPERATION = {
    SUM: "sum",
    COUNT: "count",
    MAX: "max",
}

const SUBMETRIC_TYPE = {
    [SUBMETRIC_NAME.SOAPFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: false,
        name: SUBMETRIC_NAME.SOAPFAR,
    },
    [SUBMETRIC_NAME.SOAPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: false,
        name: SUBMETRIC_NAME.SOAPF,
    },
    [SUBMETRIC_NAME.COAPFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.COUNT,
        usePrimeIndex: false,
        name: SUBMETRIC_NAME.COAPFAR,
    },
    [SUBMETRIC_NAME.COAPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.COUNT,
        usePrimeIndex: false,
        name: SUBMETRIC_NAME.COAPF,
    },
    [SUBMETRIC_NAME.SOAPIFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: true,
        name: SUBMETRIC_NAME.SOAPIFAR,
    },
    [SUBMETRIC_NAME.SOAPIF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: true,
        name: SUBMETRIC_NAME.SOAPIF,
    },
    [SUBMETRIC_NAME.COAPIFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.COUNT,
        usePrimeIndex: true,
        name: SUBMETRIC_NAME.COAPIFAR,
    },
    [SUBMETRIC_NAME.COAPIF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.COUNT,
        usePrimeIndex: true,
        name: SUBMETRIC_NAME.COAPIF,
    },
    [SUBMETRIC_NAME.GPF]: {
        operation: SUBMETRIC_OPERATION.MAX,
        usePrimeIndex: false,
        name: SUBMETRIC_NAME.GPF,
    },
    [SUBMETRIC_NAME.GPIF]: {
        operation: SUBMETRIC_OPERATION.MAX,
        usePrimeIndex: true,
        name: SUBMETRIC_NAME.GPIF,
    },
}

// todo: whoa i think it breaks it if y is 0 and t is -1... there should be a test that throws an error and catches that... there might be some other conditions too
const ADJUSTMENT = {
    WEIGHT: "weight",                                   // submetric coefficient
    K: "k",                                             // diminuator coefficient
    A: "a",                                             // prime power or base
    A_IS_BASE_NOT_POWER: "aIsBaseNotPower",             // use the prime power or base as a base
    W: "w",                                             // prime constant (applied after applying power or base)
    X: "x",                                             // prime constant (applied before applying power or base)
    Y: "y",                                             // term power
    V: "v",                                             // term constant (applied before applying power, for non-zero terms)
    T: "t",                                             // term constant (applied after applying power)
    NUMERATOR_IS_NUMINATOR: "numeratorIsNuminator",     // numinator is determined by the original ratio's numerator, not the greater of the two results of calling the submetric on the original ratio's numerator and denominator
}

module.exports = {
    LOCKED_AT_ZERO,
    LOCKED_AT_ONE,
    CHECK_NUMERIC_BOOLEAN,
    SUBMETRIC_TYPE,
    SUBMETRIC_NAME,
    SUBMETRIC_OPERATION,
    ADJUSTMENT,
}
