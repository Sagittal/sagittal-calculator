type Err<T extends unknown = number> = T & {_ErrBrand: boolean}

export {
    Err,
}
