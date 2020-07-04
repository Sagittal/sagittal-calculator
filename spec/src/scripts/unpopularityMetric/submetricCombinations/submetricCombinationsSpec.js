const {computeSubmetricCombinations} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/submetricCombinations")
const {PARAMETER, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/constants")

describe("submetricCombinations", () => {
    it("given configs for submetrics' parameters, will return all combinations of submetrics to check", () => {
        const configs = [
            {
                [PARAMETER.A]: {center: 2, range: 2, count: 3},
                [PARAMETER.K]: {center: 0, range: 4, count: 2},
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                [PARAMETER.A]: {center: 1.5, range: 2, count: 2},
                [PARAMETER.W]: 3.3,
            },
        ]

        const result = computeSubmetricCombinations(configs)

        const expectedResult = [
            [
                {
                    [PARAMETER.A]: 1,
                    [PARAMETER.K]: -2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
            [
                {
                    [PARAMETER.A]: 1,
                    [PARAMETER.K]: -2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.W]: 3.3,
                }
            ],

            [
                {
                    [PARAMETER.A]: 1,
                    [PARAMETER.K]: 2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
            [
                {
                    [PARAMETER.A]: 1,
                    [PARAMETER.K]: 2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.W]: 3.3,
                }
            ],



            [
                {
                    [PARAMETER.A]: 2,
                    [PARAMETER.K]: -2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
            [
                {
                    [PARAMETER.A]: 2,
                    [PARAMETER.K]: -2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.W]: 3.3,
                }
            ],

            [
                {
                    [PARAMETER.A]: 2,
                    [PARAMETER.K]: 2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
            [
                {
                    [PARAMETER.A]: 2,
                    [PARAMETER.K]: 2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.W]: 3.3,
                }
            ],



            [
                {
                    [PARAMETER.A]: 3,
                    [PARAMETER.K]: -2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
            [
                {
                    [PARAMETER.A]: 3,
                    [PARAMETER.K]: -2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.W]: 3.3,
                }
            ],

            [
                {
                    [PARAMETER.A]: 3,
                    [PARAMETER.K]: 2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
            [
                {
                    [PARAMETER.A]: 3,
                    [PARAMETER.K]: 2,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.W]: 3.3,
                }
            ],
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })

    it("supports providing more than one submetric with the same submetric type", () => {
        const configs = [
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                [PARAMETER.A]: {center: 1.5, range: 2, count: 2},
                [PARAMETER.K]: 0.5,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                [PARAMETER.A]: {center: 1, range: 2, count: 2},
                [PARAMETER.K]: 0,
            },
        ]

        const result = computeSubmetricCombinations(configs)

        const expectedResult = [
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.K]: 0.5,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0,
                    [PARAMETER.K]: 0,
                }
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.K]: 0.5,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0,
                    [PARAMETER.K]: 0,
                }
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 0.5,
                    [PARAMETER.K]: 0.5,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2,
                    [PARAMETER.K]: 0,
                }
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2.5,
                    [PARAMETER.K]: 0.5,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: 2,
                    [PARAMETER.K]: 0,
                }
            ],
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })
})
