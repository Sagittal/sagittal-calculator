const {computeSumOfSquaresGivenParameters} = require("./sumOfSquaresGivenParameters")

const computeSumOfSquaresGivenCombinedAdjustments = combinedAdjustments => {
    const parameters = {
        soapfar: { // todo: we lost the default 1 weight on here (old comment was: the default prime content unpopularity submetric, to which other things are essentially relative, but for consistency giving it a weight too)
            adjustments: combinedAdjustments.soapfar,
            submetricType: { // todo: i feel like we should probably extract these as constants
                withRepetition: true,
                operation: "SUM",
                usePrimeIndex: false,
            }
        },
        soapf: {
            adjustments: combinedAdjustments.soapf,
            submetricType: {
                withRepetition: false,
                operation: "SUM",
                usePrimeIndex: false,
            }
        },
        coapfar: {
            adjustments: combinedAdjustments.coapfar,
            submetricType: {
                withRepetition: true,
                operation: "COUNT",
                usePrimeIndex: false,
            }
        },
        coapf: {
            adjustments: combinedAdjustments.coapf,
            submetricType: {
                withRepetition: false,
                operation: "COUNT",
                usePrimeIndex: false,
            }
        },
        soapifar: {
            adjustments: combinedAdjustments.soapifar,
            submetricType: {
                withRepetition: true,
                operation: "SUM",
                usePrimeIndex: true,
            }
        },
        soapif: {
            adjustments: combinedAdjustments.soapif,
            submetricType: {
                withRepetition: false,
                operation: "SUM",
                usePrimeIndex: true,
            }
        },
        coapifar: {
            adjustments: combinedAdjustments.coapifar,
            submetricType: {
                withRepetition: true,
                operation: "COUNT",
                usePrimeIndex: true,
            }
        },
        coapif: {
            adjustments: combinedAdjustments.coapif,
            submetricType: {
                withRepetition: false,
                operation: "COUNT",
                usePrimeIndex: true,
            }
        },
        gcf: {
            adjustments: {
                weight: 0, // todo: will need to be fixed?
            }
        }
    }

    let sumOfSquares = computeSumOfSquaresGivenParameters(parameters)

    return sumOfSquares
}

module.exports = {
    computeSumOfSquaresGivenCombinedAdjustments,
}
