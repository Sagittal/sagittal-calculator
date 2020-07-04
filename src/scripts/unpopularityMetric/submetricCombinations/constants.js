const CHECK_NUMERIC_BOOLEAN = {center: 0.5, range: 1, count: 2}

const SUBMETRIC_TYPE = {
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

const SUBMETRIC_PROPERTIES = {
    [SUBMETRIC_TYPE.SOAPFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: false,
    },
    [SUBMETRIC_TYPE.SOAPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: false,
    },
    [SUBMETRIC_TYPE.COAPFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.COUNT,
    },
    [SUBMETRIC_TYPE.COAPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.COUNT,
    },
    [SUBMETRIC_TYPE.SOAPIFAR]: {
        withRepetition: true,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: true,
    },
    [SUBMETRIC_TYPE.SOAPIF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.SUM,
        usePrimeIndex: true,
    },
    [SUBMETRIC_TYPE.GPF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.MAX,
        usePrimeIndex: false,
    },
    [SUBMETRIC_TYPE.GPIF]: {
        withRepetition: false,
        operation: SUBMETRIC_OPERATION.MAX,
        usePrimeIndex: true,
    },
} // todo: this file should be moved up a level now

const PARAMETER = {
    SUBMETRIC_TYPE: "submetricType",                    // submetric type, which will be used to look up its properties (how it works) when computing antivotes
    WEIGHT: "weight",                                   // submetric coefficient
    K: "k",                                             // diminuator coefficient
    J: "j",                                             // numinator coefficient
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
    CHECK_NUMERIC_BOOLEAN,
    SUBMETRIC_PROPERTIES,
    SUBMETRIC_TYPE,
    SUBMETRIC_OPERATION,
    PARAMETER,
}
