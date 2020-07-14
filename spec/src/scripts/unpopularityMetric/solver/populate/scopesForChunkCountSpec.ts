// import {populateScopesForChunkCount} from "../../../../../src/scripts/unpopularityMetric/solver/initialScopes"
import { Count } from "../../../../../../src/general"
import { debug } from "../../../../../../src/scripts/unpopularityMetric/debug"
import { Chunk } from "../../../../../../src/scripts/unpopularityMetric/solver"
// import {PARAMETER, SUBMETRIC_TYPE} from "../../../../../src/scripts/unpopularityMetric/constants"
// import {INITIAL_PARAMETER_SCOPES} from "../../../../../src/scripts/unpopularityMetric/solver/constants"
// import {deepEquals} from "../../../../../src/utilities/deepEquals"
// import {arraysHaveSameContents} from "../../../../../src/utilities/arraysHaveSameContents"
//
import { populateScopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCount"

describe("populateScopesForChunkCount", () => {
    it("runs without error", () => {
        const chunkCount = 0 as Count<Chunk>
        debug.all = false

        populateScopesForChunkCount(chunkCount)
    })
//     it("given a chunk count, returns all possible combinations of those parameters - works for 1", () => {
//         const chunkCount = 1
//
//         const result = populateScopesForChunkCount(chunkCount, {quiet: true})
//
//         expect(result).toEqual(jasmine.arrayWithExactContents([
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//         ]))
//     })
//
//     it("given a chunk count, returns all possible combinations of those parameters - works for 2", () => {
//         const chunkCount = 2
//
//         const result = populateScopesForChunkCount(chunkCount, {quiet: true})
//
//         const expectedResult = [
//             // 7
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // 6
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // 5
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // 4
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // 3
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // 2
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//             ],
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // 1
//             [
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF},
//                 {[Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF},
//             ],
//
//             // SOAPFAR (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPFAR,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // SOAPF (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPF,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // COAPFAR (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPFAR,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // COAPF (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.COAPF,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // SOAPIFAR (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIFAR,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // SOAPIF (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.SOAPIF,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // GPF (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//
//             // GPIF (15)
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.K]: INITIAL_PARAMETER_SCOPES[Parameter.K],
//                     [Parameter.K_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.J]: INITIAL_PARAMETER_SCOPES[Parameter.J],
//                     [Parameter.J_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_BASE]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.A]: INITIAL_PARAMETER_SCOPES[Parameter.A],
//                     [Parameter.A_IS_EXPONENT]: true,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.W]: INITIAL_PARAMETER_SCOPES[Parameter.W],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.X]: INITIAL_PARAMETER_SCOPES[Parameter.X],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.Y]: INITIAL_PARAMETER_SCOPES[Parameter.Y],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.V]: INITIAL_PARAMETER_SCOPES[Parameter.V],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.MODIFIED_COUNT]: INITIAL_PARAMETER_SCOPES[Parameter.MODIFIED_COUNT],
//                 },
//             ],
//         ]
//
//         expect(result.length).toEqual(expectedResult.length) // TODO: but what is that count? hardcode it too for reference
//         expectedResult.forEach(expectedResultElement => {
//             expect(result.some(resultElement => {
//                 return deepEquals(resultElement, expectedResultElement)
//             })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
//         })
//     })
//
//     it("given a chunk count, returns all possible combinations of those parameters - works for 3", () => {
//         const chunkCount = 3
//
//         const result = populateScopesForChunkCount(chunkCount, {quiet: true})
//
//         expect(result.length).toEqual(
//             56 +    // all combinations of 3 submetrics w/ 0 parameters each = 8 choose 3 =      (8!)/((3!)(5!))           = 56
//             1080 +  // all combinations of 2 submetrics w/ 1 parameter  each = 8 choose 2 w/re = ((2+8-1)!)/((2!)((8-1)!)) = 36, but that times 15 choose 1      =  15, so 36*15 = 540, but then that times 2 bc for each one you can assign the parameter to either one of the two submetrics, so 540*2=1080
//             960,    // all combinations of 1 submetric  w/ 2 parameters each = 8 choose 1 =      (8!)/((1!)(7!))           =  8, but that times 15 choose 2 w/re = 120, so 120*8 = 960
//         )
//         const exampleResultElements = [
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                 },
//             ],
//             [
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPIF,
//                 },
//                 {
//                     [Parameter.SUBMETRIC_TYPE]: SubmetricType.GPF,
//                     [Parameter.T]: INITIAL_PARAMETER_SCOPES[Parameter.T],
//                 },
//             ],
//         ]
//         exampleResultElements.forEach(expectedResultElement => {
//             expect(result.some(resultElement => {
//                 return arraysHaveSameContents(resultElement, expectedResultElement)
//             })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
//         })
//     })
//
//     it("given a chunk count, returns all possible combinations of those parameters - works for 4", () => {
//         const chunkCount = 4
//
//         const result = populateScopesForChunkCount(chunkCount, {quiet: true})
//
//         expect(result.length).toEqual(
//             70 +    // all combinations of 4 submetrics w/ 0 parameters = 8 choose 4      =  70
//             5400 +  // all combinations of 3 submetrics w/ 1 parameter  = 8 choose 3 w/re = 120, but that times 15 choose 1      =  15, so 120* 15 = 1800, but then that times 3 because you could assign the parameter to any of the 3 submetrics, so 1800*3=5400
//             17280 + // all combinations of 2 submetrics w/ 2 parameters = 8 choose 2 w/re =  36, but that times 15 choose 2 w/re = 120, so  36*120 = 4320, but then that times 4 because you could both both parameters on the first submetric, both on the second submetric, or one on each, or the other way of assigning one on each, so 4320*4=17280
//             5440,   // all combinations of 1 submetric  w/ 3 parameters = 8 choose 1      =   8, but that times 15 choose 3 w/re = 680, so   8*680 = 5440
//         )
//     })
})
