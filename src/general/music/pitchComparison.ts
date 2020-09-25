import { ACCURACY_THRESHOLD, isCloseTo, isUndefined } from "../code"
import { formatCents, formatPitch } from "../io"
import {
    computeDecimalFromMonzo,
    computeDecimalFromNum,
    computeDecimalFromRatio,
    computeIsNum,
    equalNums,
    Integer,
    Num,
} from "../math"
import { computeCentsFromDecimal } from "./centsFromDecimal"
import { Cents, Pitch } from "./types"

const pitchEqualsCents = (pitch: Pitch, cents: Cents, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    if (!isUndefined(pitch.decimal)) {
        return isCloseTo(cents, computeCentsFromDecimal(pitch.decimal), precision)
    } else if (!isUndefined(pitch.cents)) {
        return isCloseTo(cents, pitch.cents, precision)
    } else if (!isUndefined(pitch.monzo)) {
        return isCloseTo(cents, computeCentsFromDecimal(computeDecimalFromMonzo(pitch.monzo)), precision)
    } else if (!isUndefined(pitch.ratio)) {
        return isCloseTo(cents, computeCentsFromDecimal(computeDecimalFromRatio(pitch.ratio)), precision)
    }
    throw new Error(`Tried to check whether pitch ${formatPitch(pitch, { align: false })} equalled ${formatCents(cents, { align: false })} but the pitch lacked any numeric representations.`)
}

const pitchIsHigherThanCents = (pitch: Pitch, cents: Cents): boolean => {
    if (!isUndefined(pitch.decimal)) {
        return computeCentsFromDecimal(pitch.decimal) > cents
    } else if (!isUndefined(pitch.cents)) {
        return pitch.cents > cents
    } else if (!isUndefined(pitch.monzo)) {
        return computeCentsFromDecimal(computeDecimalFromMonzo(pitch.monzo)) > cents
    } else if (!isUndefined(pitch.ratio)) {
        return computeCentsFromDecimal(computeDecimalFromRatio(pitch.ratio)) > cents
    }
    throw new Error(`Tried to check whether pitch ${formatPitch(pitch, { align: false })} was higher than ${formatCents(cents, { align: false })} but the pitch lacked any numeric representations.`)
}

const pitchIsLowerThanCents = (pitch: Pitch, cents: Cents): boolean => {
    if (!isUndefined(pitch.decimal)) {
        return computeCentsFromDecimal(pitch.decimal) < cents
    } else if (!isUndefined(pitch.cents)) {
        return pitch.cents < cents
    } else if (!isUndefined(pitch.monzo)) {
        return computeCentsFromDecimal(computeDecimalFromMonzo(pitch.monzo)) < cents
    } else if (!isUndefined(pitch.ratio)) {
        return computeCentsFromDecimal(computeDecimalFromRatio(pitch.ratio)) < cents
    }
    throw new Error(`Tried to check whether pitch ${formatPitch(pitch, { align: false })} was lower than ${formatCents(cents, { align: false })} but the pitch lacked any numeric representations.`)
}

const equalPitches = (pitchA: Pitch, pitchB: Pitch, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    if (!isUndefined(pitchA.cents)) {
        return pitchEqualsCents(pitchB, pitchA.cents, precision)
    } else if (!isUndefined(pitchB.cents)) {
        return pitchEqualsCents(pitchA, pitchB.cents, precision)
    } else {
        if (!computeIsNum(pitchA) || !computeIsNum(pitchB)) {
            // TODO: you may want to check to see if in fact you're now calling format w/ align false
            //  more than w/ align: true, in which case the default should be switched
            throw new Error(`Attempted to check equality of pitches ${formatPitch(pitchA, { align: false })} and ${formatPitch(pitchB, { align: false})} however they both lack cents or any numeric representation (monzo, ratio, or decimal).`)
        }

        return equalNums(pitchA, pitchB)
    }
    // TODO: perhaps system of throwing and catching to make sure you get the correct error? and test-drive it out
    //  i.e. it's weird if some errors when checking pitches equal are to do with nums, others with cents, others w/
    //  pitch... it should just, if you're calling the lower-level fn directly, tell you that, otherwise capture it
    //  and transform the message for the appropriate level you're calling from originally
}

const pitchIsHigher = (pitch: Pitch, otherPitch: Pitch, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    if (equalPitches(pitch, otherPitch, precision)) return false

    if (!isUndefined(pitch.cents)) {
        return pitchIsLowerThanCents(otherPitch, pitch.cents)
    } else if (!isUndefined(otherPitch.cents)) {
        return pitchIsHigherThanCents(pitch, otherPitch.cents)
    } else {
        if (!computeIsNum(pitch) || !computeIsNum(otherPitch)) {
            throw new Error(`Attempted to check whether pitch ${formatPitch(pitch, { align: false })} was higher than ${formatPitch(otherPitch, { align: false})} however they both lack cents or any numeric representation (monzo, ratio, or decimal).`)
        }

        // TODO: dunno why I have to force it to be Num even though I just type-gaurded that it is;
        //  but it probably has something to do with the fact that you couldn't manage to get the input type for
        //  computeIsNum such that Num could extend it without T & Num
        //  and when you pursue that, also try to get rid of the ts-ignores there
        //  though be warned, do not worry about trying to make these be <T extends NumTypeParameters> and Pitch<T>
        //  becuase if you do, you'll have massive type errors across the project because you'd be essentially requiring
        //  the compared pitches to be the same kind of pitch, which is not necessary at all
        return computeDecimalFromNum(pitch as Num) > computeDecimalFromNum(otherPitch as Num)
    }
}

const pitchIsLower = (pitch: Pitch, otherPitch: Pitch, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    if (equalPitches(pitch, otherPitch, precision)) return false

    if (!isUndefined(pitch.cents)) {
        return pitchIsHigherThanCents(otherPitch, pitch.cents)
    } else if (!isUndefined(otherPitch.cents)) {
        return pitchIsLowerThanCents(pitch, otherPitch.cents)
    } else {
        if (!computeIsNum(pitch) || !computeIsNum(otherPitch)) {
            throw new Error(`Attempted to check whether pitch ${formatPitch(pitch, { align: false })} was lower than ${formatPitch(otherPitch, { align: false})} however they both lack cents or any numeric representation (monzo, ratio, or decimal).`)
        }

        return computeDecimalFromNum(pitch as Num) < computeDecimalFromNum(otherPitch as Num)
    }
}

const pitchIsHigherOrEqual = (pitch: Pitch, otherPitch: Pitch, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    return equalPitches(pitch, otherPitch, precision) || pitchIsHigher(pitch, otherPitch, precision)
}

const pitchIsLowerOrEqual = (pitch: Pitch, otherPitch: Pitch, precision: Integer = ACCURACY_THRESHOLD): boolean => {
    return equalPitches(pitch, otherPitch, precision) || pitchIsLower(pitch, otherPitch, precision)
}

export {
    pitchIsHigher,
    pitchIsLower,
    pitchIsHigherOrEqual,
    pitchIsLowerOrEqual,
    equalPitches,
}
