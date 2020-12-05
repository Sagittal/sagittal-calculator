import {BLANK, Io} from "@sagittal/general"

const unformatParameters = (io: Io): Io => {
    return io
        .replace(/sumOfSquares/g, "\"sumOfSquares\"")
        .replace(/submetrics/g, "\"submetrics\"")
        .replace(/name/g, "\"name\"")
        .replace(/\[ PopularityParameterId\.WEIGHT_AS_COEFFICIENT \]/g, "\"weightAsCoefficient\"")
        .replace(/\[ PopularityParameterId\.WEIGHT_AS_LOGARITHM_BASE \]/g, "\"weightAsLogarithmBase\"")
        .replace(/\[ PopularityParameterId\.WEIGHT_AS_POWER_EXPONENT \]/g, "\"weightAsPowerExponent\"")
        .replace(/\[ PopularityParameterId\.WEIGHT_AS_POWER_BASE \]/g, "\"weightAsPowerBase\"")
        .replace(/\[ PopularityParameterId\.K_AS_COEFFICIENT \]/g, "\"kAsCoefficient\"")
        .replace(/\[ PopularityParameterId\.K_AS_LOGARITHM_BASE \]/g, "\"kAsLogarithmBase\"")
        .replace(/\[ PopularityParameterId\.K_AS_POWER_EXPONENT \]/g, "\"kAsPowerExponent\"")
        .replace(/\[ PopularityParameterId\.K_AS_POWER_BASE \]/g, "\"kAsPowerBase\"")
        .replace(/\[ PopularityParameterId\.J_AS_COEFFICIENT \]/g, "\"jAsCoefficient\"")
        .replace(/\[ PopularityParameterId\.J_AS_LOGARITHM_BASE \]/g, "\"jAsLogarithmBase\"")
        .replace(/\[ PopularityParameterId\.J_AS_POWER_EXPONENT \]/g, "\"jAsPowerExponent\"")
        .replace(/\[ PopularityParameterId\.J_AS_POWER_BASE \]/g, "\"jAsPowerBase\"")
        .replace(/\[ PopularityParameterId\.A_AS_COEFFICIENT \]/g, "\"aAsCoefficient\"")
        .replace(/\[ PopularityParameterId\.A_AS_LOGARITHM_BASE \]/g, "\"aAsLogarithmBase\"")
        .replace(/\[ PopularityParameterId\.A_AS_POWER_EXPONENT \]/g, "\"aAsPowerExponent\"")
        .replace(/\[ PopularityParameterId\.A_AS_POWER_BASE \]/g, "\"aAsPowerBase\"")
        .replace(/\[ PopularityParameterId\.W \]/g, "\"w\"")
        .replace(/\[ PopularityParameterId\.B \]/g, "\"b\"")
        .replace(/\[ PopularityParameterId\.X \]/g, "\"x\"")
        .replace(/\[ PopularityParameterId\.U \]/g, "\"u\"")
        .replace(/\[ PopularityParameterId\.Y \]/g, "\"y\"")
        .replace(/\[ PopularityParameterId\.V \]/g, "\"v\"")
        .replace(/\[ PopularityParameterId\.USE_NUMINATOR \]/g, "\"useNuminator\"")
        .replace(/\[ PopularityParameterId\.MODIFIED_COUNT \]/g, "\"modifiedCount\"")
        .replace(/\[ PopularityParameterId\.USE_PRIME_INDEX \]/g, "\"usePrimeIndex\"")
        .replace(/\[ PopularityParameterId\.WITHOUT_REPETITION \]/g, "\"withoutRepetition\"")
        .replace(/\[ PopularityParameterId\.SUM \]/g, "\"sum\"")
        .replace(/\[ PopularityParameterId\.COUNT \]/g, "\"count\"")
        .replace(/\[ PopularityParameterId\.MAX \]/g, "\"max\"")
        .replace(/ as \w+/g, BLANK)
        .replace(/\,(?!\s*?[\{\[\"\'\w])/g, BLANK) as Io
}

export {
    unformatParameters,
}
