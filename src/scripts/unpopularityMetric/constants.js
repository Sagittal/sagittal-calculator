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
}

const PARAMETER = {
    SUBMETRIC_TYPE: "submetricType",                    // submetric type, which will be used to look up its properties (how it works) when computing antivotes
    WEIGHT: "weight",                                   // submetric coefficient
    WEIGHT_IS_BASE_OR_POWER: "weightIsBaseOrPower",     // use the submetric coefficient instead as a power (1) or base (-1)
    K: "k",                                             // diminuator coefficient
    K_IS_BASE_OR_POWER: "kIsBaseOrPower",               // use the diminuator coefficient instead as a power (1) or base (-1)
    J: "j",                                             // numinator coefficient
    J_IS_BASE_OR_POWER: "jIsBaseOrPower",               // use the numinator coefficient instead as a power (1) or base (-1)
    A: "a",                                             // prime coefficient
    A_IS_BASE_OR_POWER: "aIsBaseOrPower",               // use the prime coefficient instead as a power (1) or base (-1)
    W: "w",                                             // prime constant (applied after applying power or base)
    X: "x",                                             // prime constant (applied before applying power or base)
    Y: "y",                                             // term power
    V: "v",                                             // term constant (applied before applying power, for non-zero terms)
    T: "t",                                             // term constant (applied after applying power)
    NUMERATOR_IS_NUMINATOR: "numeratorIsNuminator",     // numinator is determined by the original ratio's numerator, not the greater of the two results of calling the submetric on the original ratio's numerator and denominator
    MODIFIED_COUNT: "modifiedCount",                    // Dave's trick where 5's get a half-count
}

const USE_AS = {
    BASE: -1,
    COEFFICIENT: 0,
    POWER: 1,
}

const NUMERIC_BOOLEAN = {
    TRUE: 1,
    FALSE: 0,
}

const CHECK_ALL_USES = {center: 0, range: 2, count: 3}
const CHECK_NUMERIC_BOOLEAN = {center: 0.5, range: 1, count: 2}

module.exports = {
    CHECK_ALL_USES,
    CHECK_NUMERIC_BOOLEAN,
    SUBMETRIC_PROPERTIES,
    SUBMETRIC_TYPE,
    SUBMETRIC_OPERATION,
    PARAMETER,
    USE_AS,
    NUMERIC_BOOLEAN,
}
