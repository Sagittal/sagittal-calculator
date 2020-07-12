import { checkSubmetricsForIssues } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/check"
import { Parameter, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"
import { DynamicParameterValue } from "../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("checkSubmetricsForIssues", () => {
    it("gives a good error when a is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.A ]: 1 as DynamicParameterValue,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric has base 1 and will calculate undefined antivotes.")
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.A ]: -2.23 as DynamicParameterValue,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric has negative base and will calculate undefined antivotes.")
    })

    it("gives a good error when a is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.A_IS_EXPONENT ]: true,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify a to be both an exponent and a base.")
    })

    it("gives a good error when j is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.J_IS_EXPONENT ]: true,
                [ Parameter.J_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify j to be both an exponent and a base.")
    })

    it("gives a good error when k is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.K_IS_EXPONENT ]: true,
                [ Parameter.K_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify k to be both an exponent and a base.")
    })

    it("gives a good error when weight is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.WEIGHT_IS_EXPONENT ]: true,
                [ Parameter.WEIGHT_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify weight to be both an exponent and a base.")
    })

    it("gives a good error when both j and k are included on the same submetrics (because you could always forever increase them together to get the same result)", () => {
        const submetrics = [
            {
                [ Parameter.J ]: 3 as DynamicParameterValue,
                [ Parameter.K ]: 3 as DynamicParameterValue,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify both j and k.")
    })

    // TODO: RELATED PARAMETERS wait shouldn't it be bad if you got [{soapfar,k},{soapfar,j}] ??
    //  okay this one crashes things though for sure: [{"submetricType":"soapf"},{"submetricType":"soapfar","w":{"center":0,"range":12,"resolution":2},"a":{"center":2,"range":4,"resolution":2}}]
    //  I should include x v t still as capabilities but not in generared automatically configs
    //  all these commented out ones lead to bad.
    //  this one froze = [{"submetricType" ="soapf"},{"submetricType" ="soapfar","x" ={"center" =0,"range" =6,"resolution" =2},"a" ={"center" =2,"range" =4,"resolution" =2}}]
    //  In the "related parameters" spec... i think this may only be for soapifar??
    //  i think we actually want a test not that the total SoS is the same, but that each and every ratio is the same
    //  if you can figure out what the relationship is, then you should add a ban for these to the "check" file
})
