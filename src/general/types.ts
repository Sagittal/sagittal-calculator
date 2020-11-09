import {Io} from "./io"
import {Decimal, Max, Min, Quotient} from "./math"

type Index<T = void> =
    Decimal<{integer: true}> & {_IndexBrand: boolean} & (T extends void ? {} : {_IndexOfBrand: T})
type Count<T = void> =
    Decimal<{integer: true}> & {_CountBrand: boolean} & (T extends void ? {} : {_CountOfBrand: T})

type Step<EdCount extends number | void = void> =                                               // Iteration?
    Decimal & {_StepBrand: boolean, _StepOfEdBrand: EdCount}
type Ed<WindowSize extends number | void = void> =                                              // Generator?
    Decimal<{integer: true}> & {_EdBrand: boolean, _WindowSizeBrand: WindowSize}
type Window<WindowSize extends number | unknown = unknown> =                                    // Period?
    Decimal & {_WindowBrand: boolean, _WindowSizeBrand: WindowSize}
type Degree = [Step<any>, Ed<any>] & Quotient

type Name<T = void> = Io & {_NameBrand: boolean} & (T extends void ? {} : {_NameOfBrand: T})

type Extrema<T extends unknown = number> = [Min<T>, Max<T>]

type Ms = number & {_MsBrand: boolean}

type Of<T> = {_OfBrand: T}

export {
    Index,
    Count,
    Window,
    Step,
    Ed,
    Name,
    Extrema,
    Ms,
    Of,
    Degree,
}
