import { ACCURACY_THRESHOLD, deepRound } from "../../../../src/general/code"

describe("deepRound", (): void => {
    it("rounds all numeric values within the object", (): void => {
        const object = {
            prop: 1.4948594954,
            arr: [1.1247329857279, { a: 6.656348989346, b: [34343.34343435565, 9.54545454] }, [8.8347358378535]],
            obj: { a: 7.4574948959454, b: [5.434234423432423, 4.4538683499, [343.53253524643]] },
        }

        const actual = deepRound(object, ACCURACY_THRESHOLD)

        const expected = {
            prop: 1.49486,
            arr: [1.12473, { a: 6.65635, b: [34343.34343, 9.54545] }, [8.83474]],
            obj: { a: 7.45749, b: [5.43423, 4.45387, [343.53254]] },
        }
        expect(actual).toEqual(expected)
    })

    it("works for plain numbers", (): void => {
        const number = 3.456363463463

        const actual = deepRound(number, ACCURACY_THRESHOLD)

        const expected = 3.45636
        expect(actual).toEqual(expected)
    })

    it("works for arrays", (): void => {
        const array = [1.1247329857279, { a: 6.656348989346, b: [34343.34343435565, 9.54545454] }, [8.8347358378535]]

        const actual = deepRound(array, ACCURACY_THRESHOLD)

        const expected = [1.12473, { a: 6.65635, b: [34343.34343, 9.54545] }, [8.83474]]
        expect(actual).toEqual(expected)
    })

    it("ignores non-numerics", (): void => {
        const array = ["bye", 1.1247329857279, { a: 6.656348989346, b: [34343.34343435565, "hi"] }, [8.8347358378535]]

        const actual = deepRound(array, ACCURACY_THRESHOLD)

        const expected = ["bye", 1.12473, { a: 6.65635, b: [34343.34343, "hi"] }, [8.83474]]
        expect(actual).toEqual(expected)
    })

    it("ignores non-numerics at the top level", (): void => {
        const string = "string"

        const actual = deepRound(string)

        expect(actual).toBe(string)
    })
})
