// TODO: I'd like to see performance comparison of places we're using this versus .slice() for arrays
//  although slice is shallow. for objects, shallow is { ...o }, for arrays [ ...a ]
//  but i think the interface "shallow" would be nice cuz slice looks gross/confusing
//  for deep cloning arrays I think this will work too
//  (though I'm concerned about what I read about how it doesn't handle undefined)
//  perhaps one day you'll just yank from Musical Patterns utilities if you need typing handling
//  also consider that you could write a test that the performance of a given implementation is the fastest

const computeDeepClone = (object: unknown) =>
    JSON.parse(JSON.stringify(object))

export {
    computeDeepClone,
}
