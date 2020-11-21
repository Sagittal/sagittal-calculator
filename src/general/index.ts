export {
    DEFAULT_PRECISION,
    computeDeepDistinct,
    computeExtensionBase,
    computePlusOrMinusRange,
    computeRange,
    computeTrimmedArray,
    concat,
    deepClone,
    deepEquals,
    dig,
    doOnNextEventLoop,
    ExtensionBaseType,
    isCloseTo,
    isNumber,
    isUndefined,
    Maybe,
    merge,
    now,
    KeyPath,
    Range,
    rank,
    Rank,
    Ranked,
    RankStrategy,
    shallowClone,
    isArray,
    shuffle,
    sort,
    ZERO_ONE_INDEX_DIFF,
    indexOfFinalElement,
    finalElement,
    increment,
    decrement,
    isEmpty,
    setAt,
    Obj,
    RecordKey,
    NOT_FOUND,
    Precision,
    MAX_JS_PRECISION,
    isObject,
    deepMap,
    offset,
} from "./code"
export {
    sumTexts,
    alignFormattedDecimal,
    IDENTIFYING_COMMA_NAME_CHARS,
    IDENTIFYING_MONZO_CHARS,
    IDENTIFYING_ACCIDENTAL_CHARS,
    Basis,
    BLANK,
    clearLogFiles,
    colorize,
    ColorMethod,
    Column,
    ScriptFlag,
    computePx,
    Filename,
    formatIntegerDecimal,
    formatMonzo,
    formatDecimal,
    formatQuotient,
    formatTable,
    Formatted,
    formatTime,
    HexColor,
    Io,
    IO_PRECISION,
    ioSettings,
    join,
    LogTarget,
    NEWLINE,
    setupScriptAndIo,
    parseMonzo,
    parse23FreeClass,
    parseQuotient,
    Px,
    removeColor,
    Row,
    saveLog,
    Scale,
    setLogTargets,
    SPACE,
    stringify,
    COMMA,
    SUPERSCRIPT_NUMBERS,
    TAB,
    Table,
    splitFieldTitlesIntoRowsBySpaces,
    time,
    readLines,
    split,
    TableFormat,
    formatPitch,
    parseCents,
    IDENTIFYING_CENTS_CHARS,
    IDENTIFYING_QUOTIENT_CHARS,
    formatCents,
    parseInteger,
    parseDecimal,
    Justification,
    JustificationOption,
    Char,
    TimePrecision,
    DOT_OPERATOR,
    NUMERIC_CHARS,
    Cell,
    MERGED_CELL_INDICATOR,
} from "./io"
export {
    abs,
    Abs,
    Base,
    BASE_2,
    ceil,
    Combination,
    Combinations,
    computeCombinations,
    computeDistributions,
    isMonzoSub,
    computeRationalMonzoFromRationalQuotient,
    computePrimeCount,
    computeQuotientFromMonzo,
    computeRoughRationalMonzo,
    computeSuperMonzo,
    computeTriangularNumber,
    Copfr,
    count,
    subtract,
    Direction,
    DistributionBin,
    dividesEvenly,
    Exponent,
    FIVE_PRIME_INDEX,
    THREE_ROUGHNESS,
    FIVE_ROUGHNESS,
    floor,
    QuotientPartType,
    integerDivide,
    invertMonzo,
    log,
    max,
    Max,
    min,
    Min,
    mod,
    isMonzoSuper,
    NumericProperties,
    multiply,
    negative,
    ONE,
    pow,
    Power,
    Prime,
    PRIMES,
    round,
    Sopfr,
    sum,
    sumMonzos,
    computeSuperQuotient,
    THREE_PRIME_INDEX,
    THREE_SMOOTHNESS,
    Distribution,
    computeRoughRationalQuotient,
    computeSubQuotient,
    TWO_PRIME_INDEX,
    add,
    computeDecimalFromMonzo,
    areMonzosEqual,
    Mean,
    computeLowestTermsRationalQuotient,
    Monzo,
    Quotient,
    isDecimalInteger,
    computeRationalDecimalGpf,
    isIntegerDecimalRough,
    computeAngle,
    radiansToDegrees,
    Coordinates,
    doForEachRationalMonzo,
    computeDecimalFromQuotient,
    isQuotientRational,
    computeRationalDecimalCopfr,
    isMonzoRational,
    Decimal,
    Numerator,
    Denominator,
    QuotientPart,
    computeRationalMonzoFromRationalDecimal,
    computeRationalMonzoCopfr,
    computeRationalMonzoSopfr,
    computeRationalMonzoSmoothness,
    EMPTY_MONZO,
    reciprocal,
    MeanType,
    areScamonsEqual,
    computeSuperScamon,
    isScamonGreater,
    isScamonLesser,
    isScamonGreaterOrEqual,
    isScamonLesserOrEqual,
    isScamonSub,
    isScamonUnison,
    isScamonRational,
    halveScamon,
    computeScamonFromDecimal,
    Scamon,
    HALF_SCALER,
    computeRationalScamonCopfr,
    computeRationalScamonSopfr,
    computeScamonFromMonzo,
    computeScamonFromQuotient,
    addScamons,
    areRationalScamonsEqual,
    computeRationalScamonFromRationalMonzo,
    isRationalScamonSub,
    isRationalScamonUnison,
    addRationalScamons,
    computeIrrationalDecimalFromScamon,
    computeRationalScamonGeometricMean,
    isRationalScamonRough,
    computeRationalScamonSmoothness,
    isRationalScamonSmooth,
    computeRationalQuotientFromRationalScamon,
    invertScamon,
    multiplyScamon,
    isLowestTerms,
    invertQuotient,
    subtractRationalScamons,
    Val,
    computeMonzoMapping,
    computePatentVal,
    isEven,
    computeRationalDecimalCopf,
    scaleScamon,
    divide,
    Multiplier,
    Sum,
    Divisor,
    sumRationalScamons,
} from "./math"
export {
    Cents,
    CENTS_PER_OCTAVE,
    dividePitch,
    subtractPitch,
    Zone,
    UNISON,
    computePitchFromCents,
    COMMA_POPULARITIES,
    ScalaPopularityStat,
    Comma,
    Two3FreeClass,
    compute23FreeClass,
    THREE_PRIME_LIMIT,
    Apotome,
    computeCentsFromPitch,
    compute23FreeClassName,
    format23FreeClass,
    TWO_3_FREE,
    TWO_3_FREE_CLASS_SIGN,
    PYTHAGOREAN_COMMA,
    PYTHAGOREAN_LIMMA,
    PYTHAGOREAN_SCHISMA,
    PYTHAGOREAN_COMPLEX_KLEISMA,
    PYTHAGOREAN_LARGE_DIESIS,
    PYTHAGOREAN_WHOLE_TONE,
    THIRTYONE_THREE_COMMA,
    CommaMean,
    OCTAVE_WINDOW,
    APOTOME,
    SCHISMA,
    SCHISMINA,
    SEPTIMAL_COMMA,
    SEPTIMAL_KLEISMA,
    SYNTONIC_COMMA,
} from "./music"
export {Count, Ed, Extrema, Index, Ms, Name, Step, Window, Of, Offset} from "./types"
export {
    Grade,
    Parameter,
    DynamicParameterScope,
    ParameterScope,
    ParameterScopes,
    computeParameterValues,
    computePossibilities,
} from "./lfc"
