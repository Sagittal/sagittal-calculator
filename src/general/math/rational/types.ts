import { Count, Sum } from "../../types"
import { Decimal, NumTypeParameterEffects, NumTypeParameters } from "../types"
import { Monzo, RationalNumByMonzo } from "./monzo"
import { Ratio, RationalNumByRatio } from "./ratio"

// tslint:disable-next-line max-line-length
type Integer<T extends NumTypeParameters & { potentiallyIrrational: false, integer: true } = { potentiallyIrrational: false, integer: true }> = Decimal<T>
type MaybeIntegerBrand<T> = T extends { integer: true } ? { _IntegerBrand: boolean } : {}

type RationalNumTypeParameters = NumTypeParameters & { potentiallyIrrational: false }
type IntegerTypeParameters = NumTypeParameters & { integer: true, potentiallyIrrational: false }

type Prime<T extends IntegerTypeParameters = { integer: true, potentiallyIrrational: false }> =
    Decimal<T> & { _PrimeBrand: "Prime" }
type Roughness = Integer & { _RoughnessBrand: boolean }
type Smoothness = Integer & { _SmoothnessBrand: boolean }

type Sopfr<T extends NumTypeParameters = {}> =
    Sum<Prime>
    & { _SopfrBrand: boolean }
    & NumTypeParameterEffects<T>
type Copfr<T extends NumTypeParameters = {}> =
    Count<Prime>
    & { _CopfrBrand: boolean }
    & NumTypeParameterEffects<T>

type CommonFunction = (firstInteger: Integer, secondInteger: Integer) => Integer

type Primes =
    2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47 | 53 | 59 | 61 | 67 | 71 | 73 | 79 | 83 | 89
    | 97 | 101 | 103 | 107 | 109 | 113 | 127 | 131 | 137 | 139 | 149 | 151 | 157 | 163 | 167 | 173 | 179 | 181 | 191
    | 193 | 197 | 199 | 211 | 223 | 227 | 229 | 233 | 239 | 241 | 251 | 257 | 263 | 269 | 271 | 277 | 281 | 283 | 293
    | 307 | 311 | 313 | 317 | 331 | 337 | 347 | 349 | 353 | 359 | 367 | 373 | 379 | 383 | 389 | 397 | 401 | 409 | 419
    | 421 | 431 | 433 | 439 | 443 | 449 | 457 | 461 | 463 | 467 | 479 | 487 | 491 | 499 | 503 | 509 | 521 | 523 | 541
    | 547 | 557 | 563 | 569 | 571 | 577 | 587 | 593 | 599 | 601 | 607 | 613 | 617 | 619 | 631 | 641 | 643 | 647 | 653
    | 659 | 661 | 673 | 677 | 683 | 691 | 701 | 709 | 719 | 727 | 733 | 739 | 743 | 751 | 757 | 761 | 769 | 773 | 787
    | 797 | 809 | 811 | 821 | 823 | 827 | 829 | 839 | 853 | 857 | 859 | 863 | 877 | 881 | 883 | 887 | 907 | 911 | 919
    | 929 | 937 | 941 | 947 | 953 | 967 | 971 | 977 | 983 | 991 | 997

type RationalNum<T extends RationalNumTypeParameters = { potentiallyIrrational: false }> =
    RationalNumByMonzo<T> | RationalNumByRatio<T> | RationalNumByDecimal<T>

// TODO: hmmm... dang... maybe it was not wise to make it so that RationalNums could be defined with a decimal
//  without requiring also a monzo or ratio definition.
//  example reason: the decimal 1.142857
//  which we know is an approx of 8/7 but this would be able to turn into the JI pitch 1142857/1000000
//  currently of monzos, ratios, and decimals, monzos are the only ones currently actually capable of encoding
//  unambiguously irrational numbers. both ratios and decimals can always be interpreted as rational/JI.
//  okay. so if you changed this back, to eliminate this type right here, then there'd be a bunch of places where you
//  just now made it so that methods don't assume they have either a monzo or ratio. I suppose you wouldn't HAVE to
//  change them. you might have even completely eliminated some rational-specific utilities in favor of just using the
//  plain ol' Num version.
type RationalNumByDecimal<T extends RationalNumTypeParameters = { potentiallyIrrational: false }> = {
    decimal: Decimal<T>,
    monzo?: Monzo<T>,
    ratio?: Ratio<T>,
}

export {
    Integer,
    Sopfr,
    Copfr,
    Prime,
    Roughness,
    Smoothness,
    Primes,
    MaybeIntegerBrand,
    CommonFunction,
    RationalNumTypeParameters,
    IntegerTypeParameters,
    RationalNum,
    RationalNumByDecimal,
}
