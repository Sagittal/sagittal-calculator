/*
const minaError = (cents: Cents, mina: Mina): number => {
    const minas = cents / MINA

    return abs(minas - mina)
}

const lpei = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {
        b = DEFAULT_USEFULNESS_PARAMETER_VALUE,
        sP = DEFAULT_USEFULNESS_PARAMETER_VALUE,
        tE = DEFAULT_USEFULNESS_PARAMETER_VALUE,
    }: UsefulnessParameterSet,
    cents: Cents,
    mina: Mina,
): UsefulnessScore => {
    return Math.log2(n2d3p9)
    + (aas / 9.65) ** 1.7
    + 2 ** (ate - 9.65)
    + 0.8 * minaError(cents, mina) as UsefulnessScore
}
*/
// Todo: perhaps you ought to just pull this badness check out into its own script
