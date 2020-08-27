import { computeIsCloseTo, deepEquals, Integer, isUndefined } from "../../src/general"
import CustomEqualityTester = jasmine.CustomEqualityTester
import CustomMatcher = jasmine.CustomMatcher
import CustomMatcherFactories = jasmine.CustomMatcherFactories
import CustomMatcherResult = jasmine.CustomMatcherResult
import MatchersUtil = jasmine.MatchersUtil

const precisionMessage: (precision?: Integer) => string =
    (precision?: Integer): string =>
        isUndefined(precision) ? "" : `, with precision ${precision}`

const failWith: (message: string) => CustomMatcherResult =
    (message: string): CustomMatcherResult => ({
        message,
        pass: false,
    })

const doAssertions = (logicFunc: () => void): CustomMatcherResult => {
    try {
        logicFunc()

        return { pass: true }
    } catch (e) {
        return failWith(e.toString())
    }
}

const assert = (condition: boolean, message: string): void => {
    if (condition) {
        return
    }
    throw message
}

const testIsCloseTo = <T extends number>(actual: T, expected: T, precision?: Integer, negate?: boolean, message?: string): void => {
    const isClose: boolean = computeIsCloseTo(actual, expected, precision)

    if (negate) {
        assert(
            !isClose,
            message ||
            `expected ${JSON.stringify(actual)} not to be close to ${JSON.stringify(expected)}${precisionMessage(precision)}`,
        )
    } else {
        assert(
            isClose,
            message || `expected ${JSON.stringify(actual)} to be close to ${JSON.stringify(expected)}${precisionMessage(precision)}`,
        )
    }
}

const arraysHaveSameContents = <T>(arrayOne: T[], arrayTwo: T[]) => {
    if (arrayOne.length !== arrayTwo.length) {
        return false
    }

    return arrayOne.every(elementOne =>
        arrayTwo.some(elementTwo =>
            deepEquals(elementOne, elementTwo)))
}

const arraysAreCloseUpThroughExpected = <T extends number>(expected: T[], actual: T[], precision?: Integer, negate?: boolean, message?: string): void => {
    expected.forEach((expectedElement: T, index: number): void => {
        const actualElement: T = actual[ index ]

        testIsCloseTo(actualElement, expectedElement, precision, negate, message)
    })
}

const customMatchers: CustomMatcherFactories = {
    toBeCloseToTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T, expected: T, precision?: Integer, negate: boolean = false, message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                testIsCloseTo(actual, expected, precision, negate, message)
            }),
    }),
    toBeCloseToArray: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision?: Integer, negate?: boolean, message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    actual.length === expected.length,
                    message || `Expected actual's ${actual.length} length to be ${expected.length}`,
                )

                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    toBeCloseSoFar: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision?: Integer, negate?: boolean, message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    // depth 1: any order, thenceforth: enforced order (deep equal)
    toBeArrayWithDeepEqualContents: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                expected.forEach(expectedResultElement => {
                    assert(actual.length === expected.length, `Arrays did not have the same length, so there is no way they could have the same members.`)
                    assert(
                        actual.some(resultElement => {
                            return deepEquals(resultElement, expectedResultElement)
                        }),
                        `This expected element was not found: ${JSON.stringify(expectedResultElement)}`,
                    )
                })
            }),
    }),
    // depth 1: any order, depth 2: any order, thenceforth: enforced order (deep equal)
    toBeSameCombinationsAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[][], expected: T[][], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                expected.forEach(expectedResultElement => {
                    assert(actual.length === expected.length, `Arrays did not have the same length, so there is no way they could have the same members.`)
                    assert(
                        actual.some(resultElement => {
                            return arraysHaveSameContents(resultElement, expectedResultElement)
                        }),
                        `The actual array was searched but no element was found which had the same contents as this expected element: ${JSON.stringify(expectedResultElement)}`,
                    )
                })
            }),
    }),
    // depth 1: any order, depth 2: enforced order, depth 3: any order, thenceforth: enforced order (deep equal)
    toBeSameDistributionsAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[][][], expected: T[][][], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                expected.forEach((expectedResultElement: T[][]) => {
                    assert(actual.length === expected.length, `Arrays did not have the same length, so there is no way they could have the same members.`)
                    assert(
                        actual.some(resultElement => {
                            return resultElement.every((resultElementElement: T[], index) => {
                                return arraysHaveSameContents(resultElementElement, expectedResultElement[ index ])
                            })
                        }),
                        `This expected element was not found: ${JSON.stringify(expectedResultElement)}`,
                    )
                })
            }),
    }),
    toBeArrayIncludingDeepEqual: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                expected.forEach(expectedResultElement => {
                    assert(
                        actual.some(resultElement => {
                            return deepEquals(resultElement, expectedResultElement)
                        }),
                        `This expected element was not found: ${JSON.stringify(expectedResultElement)}`,
                    )
                })
            }),
    }),
}

beforeAll((): void => {
    jasmine.addMatchers(customMatchers)
})
