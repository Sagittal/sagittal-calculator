import { Io } from "../../../../general"

const unformatParameters = (io: Io): Io => {
    return io
        .replace(/sumOfSquares/g, "\"sumOfSquares\"")
        .replace(/submetrics/g, "\"submetrics\"")
        .replace(/name/g, "\"name\"")
        .replace(/\[ Parameter\.WEIGHT_AS_COEFFICIENT \]/g, "\"weightAsCoefficient\"")
        .replace(/\[ Parameter\.WEIGHT_AS_LOGARITHM_BASE \]/g, "\"weightAsLogarithmBase\"")
        .replace(/\[ Parameter\.WEIGHT_AS_POWER_EXPONENT \]/g, "\"weightAsPowerExponent\"")
        .replace(/\[ Parameter\.WEIGHT_AS_POWER_BASE \]/g, "\"weightAsPowerBase\"")
        .replace(/\[ Parameter\.K_AS_COEFFICIENT \]/g, "\"kAsCoefficient\"")
        .replace(/\[ Parameter\.K_AS_LOGARITHM_BASE \]/g, "\"kAsLogarithmBase\"")
        .replace(/\[ Parameter\.K_AS_POWER_EXPONENT \]/g, "\"kAsPowerExponent\"")
        .replace(/\[ Parameter\.K_AS_POWER_BASE \]/g, "\"kAsPowerBase\"")
        .replace(/\[ Parameter\.J_AS_COEFFICIENT \]/g, "\"jAsCoefficient\"")
        .replace(/\[ Parameter\.J_AS_LOGARITHM_BASE \]/g, "\"jAsLogarithmBase\"")
        .replace(/\[ Parameter\.J_AS_POWER_EXPONENT \]/g, "\"jAsPowerExponent\"")
        .replace(/\[ Parameter\.J_AS_POWER_BASE \]/g, "\"jAsPowerBase\"")
        .replace(/\[ Parameter\.A_AS_COEFFICIENT \]/g, "\"aAsCoefficient\"")
        .replace(/\[ Parameter\.A_AS_LOGARITHM_BASE \]/g, "\"aAsLogarithmBase\"")
        .replace(/\[ Parameter\.A_AS_POWER_EXPONENT \]/g, "\"aAsPowerExponent\"")
        .replace(/\[ Parameter\.A_AS_POWER_BASE \]/g, "\"aAsPowerBase\"")
        .replace(/\[ Parameter\.W \]/g, "\"w\"")
        .replace(/\[ Parameter\.B \]/g, "\"b\"")
        .replace(/\[ Parameter\.X \]/g, "\"x\"")
        .replace(/\[ Parameter\.U \]/g, "\"u\"")
        .replace(/\[ Parameter\.Y \]/g, "\"y\"")
        .replace(/\[ Parameter\.V \]/g, "\"v\"")
        .replace(/\[ Parameter\.USE_NUMINATOR \]/g, "\"useNuminator\"")
        .replace(/\[ Parameter\.MODIFIED_COUNT \]/g, "\"modifiedCount\"")
        .replace(/\[ Parameter\.USE_PRIME_INDEX \]/g, "\"usePrimeIndex\"")
        .replace(/\[ Parameter\.WITHOUT_REPETITION \]/g, "\"withoutRepetition\"")
        .replace(/\[ Parameter\.SUM \]/g, "\"sum\"")
        .replace(/\[ Parameter\.COUNT \]/g, "\"count\"")
        .replace(/\[ Parameter\.MAX \]/g, "\"max\"")
        .replace(/ as \w+/g, "")
        .replace(/\,(?!\s*?[\{\[\"\'\w])/g, "") as Io
}

export {
    unformatParameters,
}
