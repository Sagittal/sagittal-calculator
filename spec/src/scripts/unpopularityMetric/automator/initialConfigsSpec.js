const {computeInitialConfigs} = require("../../../../../src/scripts/unpopularityMetric/automator/initialConfigs")
const {PARAMETER, PARAMETER_INITIAL_CONFIGS, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/constants")
const {deepEquals} = require("../../../../../src/utilities/deepEquals")
const {arraysHaveSameContents} = require("../../../../../src/utilities/arraysHaveSameContents")

describe("computeInitialConfigs", () => {
    it("given a chunk count, returns all possible combinations of those parameters - works for 1", () => {
        const chunkCount = 1

        const result = computeInitialConfigs(chunkCount)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],
        ]))
    })

    it("given a chunk count, returns all possible combinations of those parameters - works for 2", () => {
        const chunkCount = 2

        const result = computeInitialConfigs(chunkCount)

        const expectedResult = [
            // 7
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // 6
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // 5
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // 4
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // 3
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // 2
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
            ],
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // 1
            [
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF},
                {[PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF},
            ],

            // SOAPFAR (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // SOAPF (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // COAPFAR (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // COAPF (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // SOAPIFAR (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIFAR,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // SOAPIF (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPIF,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // GPF (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],

            // GPIF (15)
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.K]: PARAMETER_INITIAL_CONFIGS[PARAMETER.K],
                    [PARAMETER.K_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.J]: PARAMETER_INITIAL_CONFIGS[PARAMETER.J],
                    [PARAMETER.J_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_BASE]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.A]: PARAMETER_INITIAL_CONFIGS[PARAMETER.A],
                    [PARAMETER.A_IS_EXPONENT]: true,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.W]: PARAMETER_INITIAL_CONFIGS[PARAMETER.W],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.X]: PARAMETER_INITIAL_CONFIGS[PARAMETER.X],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.Y]: PARAMETER_INITIAL_CONFIGS[PARAMETER.Y],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.V]: PARAMETER_INITIAL_CONFIGS[PARAMETER.V],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.MODIFIED_COUNT]: PARAMETER_INITIAL_CONFIGS[PARAMETER.MODIFIED_COUNT],
                },
            ],
        ]

        expect(result.length).toEqual(expectedResult.length)
        expectedResult.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return deepEquals(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })

    it("given a chunk count, returns all possible combinations of those parameters - works for 3", () => {
        const chunkCount = 3

        const result = computeInitialConfigs(chunkCount)


        expect(result.length).toEqual(
            56 +    // all combinations of 3 submetrics w/ 0 parameters each = 8 choose 3 =      (8!)/((3!)(5!))           = 56
            1080 +  // all combinations of 2 submetrics w/ 1 parameter  each = 8 choose 2 w/re = ((2+8-1)!)/((2!)((8-1)!)) = 36, but that times 15 choose 1      =  15, so 36*15 = 540, but then that times 2 bc for each one you can assign the parameter to either one of the two submetrics, so 540*2=1080
            960,    // all combinations of 1 submetric  w/ 2 parameters each = 8 choose 1 =      (8!)/((1!)(7!))           =  8, but that times 15 choose 2 w/re = 120, so 120*8 = 960
        )
        const exampleResultElements = [
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                },
            ],
            [
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPIF,
                },
                {
                    [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.GPF,
                    [PARAMETER.T]: PARAMETER_INITIAL_CONFIGS[PARAMETER.T],
                },
            ],
        ]
        exampleResultElements.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return arraysHaveSameContents(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })

    it("given a chunk count, returns all possible combinations of those parameters - works for 4", () => {
        const chunkCount = 4

        const result = computeInitialConfigs(chunkCount)

        expect(result.length).toEqual(
            70 +    // all combinations of 4 submetrics w/ 0 parameters = 8 choose 4      =  70
            5400 +  // all combinations of 3 submetrics w/ 1 parameter  = 8 choose 3 w/re = 120, but that times 15 choose 1      =  15, so 120* 15 = 1800, but then that times 3 because you could assign the parameter to any of the 3 submetrics, so 1800*3=5400
            17280 + // all combinations of 2 submetrics w/ 2 parameters = 8 choose 2 w/re =  36, but that times 15 choose 2 w/re = 120, so  36*120 = 4320, but then that times 4 because you could both both parameters on the first submetric, both on the second submetric, or one on each, or the other way of assigning one on each, so 4320*4=17280
            5440,   // all combinations of 1 submetric  w/ 3 parameters = 8 choose 1      =   8, but that times 15 choose 3 w/re = 680, so   8*680 = 5440
        )
    })
})
