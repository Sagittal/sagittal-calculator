// tslint:disable max-line-length

import { ACCURACY_THRESHOLD, deepEquals, Integer, isCloseTo, isUndefined, stringify } from "../../src/general"
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
    const isClose: boolean = isCloseTo(actual, expected, precision)

    if (negate) {
        assert(
            !isClose,
            message ||
            `Expected ${stringify(actual)} not to be close to ${stringify(expected)}${precisionMessage(precision)}.`,
        )
    } else {
        assert(
            isClose,
            message || `Expected ${stringify(actual)} to be close to ${stringify(expected)}${precisionMessage(precision)}.`,
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

const eachExpectedElementDeepEqualsSomeActualElement = <T>(expectedElements: T[], actual: T[], message?: string) => {
    expectedElements.forEach(expectedElement => {
        assert(
            actual.some(actualElement => {
                return deepEquals(actualElement, expectedElement)
            }),
            message || `This expected element was not found: ${stringify(expectedElement)}.`,
        )
    })
}

const eachExpectedElementHasSameContentsAsSomeActualElement = <T>(expectedElements: T[][], actual: T[][], message?: string) => {
    expectedElements.forEach(expectedElement => {
        assert(
            actual.some(actualElement => {
                return arraysHaveSameContents(actualElement, expectedElement)
            }),
            message || `This expected element was not found: ${stringify(expectedElement)}`,
        )
    })
}

const customMatchers: CustomMatcherFactories = {
    toBeCloseToTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T, expected: T, precision?: Integer, negate?: boolean, message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                testIsCloseTo(actual, expected, precision, negate, message)
            }),
    }),
    toBeCloseToArray: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision?: Integer, negate?: boolean, message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    actual.length === expected.length,
                    message || `Expected actual's length to be ${expected.length}. It was ${actual.length} instead.`,
                )

                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    toBeCloseToObject: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision: Integer = ACCURACY_THRESHOLD, negate?: boolean, message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    deepEquals(actual, expected, precision),
                    message || `Expected ${stringify(actual)} to deep equal ${stringify(expected)} with numeric values within precision ${precision}.`,
                )
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
        compare: <T>(actual: T[], expected: T[], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length, so there is no way they could have the same members.`)
                eachExpectedElementDeepEqualsSomeActualElement(expected, actual, message)
            }),
    }),
    // depth 1: any order, depth 2: any order, thenceforth: enforced order (deep equal)
    toBeSameCombinationsAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[][], expected: T[][], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length, so there is no way they could have the same members.`)
                eachExpectedElementHasSameContentsAsSomeActualElement(expected, actual, message)
            }),
    }),
    // depth 1: any order, depth 2: enforced order, depth 3: any order, thenceforth: enforced order (deep equal)
    toBeSameDistributionsAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[][][], expected: T[][][], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length, so there is no way they could have the same members.`)
                expected.forEach((expectedElement: T[][]) => {
                    assert(
                        actual.some(actualElement => {
                            return actualElement.every((actualElementElement: T[], index) => {
                                return arraysHaveSameContents(actualElementElement, expectedElement[ index ])
                            })
                        }),
                        message || `This expected element was not found: ${stringify(expectedElement)}`,
                    )
                })
            }),
    }),
    // same as toBeArrayWithDeepEqualContents, but without the length match
    toBeArrayIncludingDeepEqual: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[], expected: T[], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                eachExpectedElementDeepEqualsSomeActualElement(expected, actual, message)
            }),
    }),
    // same as toBeSameCombinationsAs, but without the length match
    toBeArrayIncludingCombinations: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[][], expected: T[][], message?: string): CustomMatcherResult =>
            doAssertions((): void => {
                eachExpectedElementHasSameContentsAsSomeActualElement(expected, actual, message)
            }),
    }),
}

beforeAll((): void => {
    jasmine.addMatchers(customMatchers)
})
