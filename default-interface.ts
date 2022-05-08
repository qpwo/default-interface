type Elevator<T> = T extends string
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : T extends null
    ? null
    : T extends undefined
    ? undefined
    : T extends Date
    ? Date
    : T extends RegExp
    ? RegExp
    : T extends Error
    ? Error
    : T extends Array<infer X>
    ? X[]
    : T extends (x: infer In) => infer Out
    ? (x: In) => Out
    : T extends Record<infer K, infer V>
    ? Record<K, V>
    : T extends unknown
    ? unknown
    : never

type Default<Kind, Def> = Kind

type DefaultInterface<NonDefault, Defaults> = NonDefault & {
    [K in keyof Defaults]+?: Default<Elevator<Defaults[K]>, Defaults[K]>
}
export default DefaultInterface

// DefaultOf<ElevateObj<typeof defaults>, typeof defaults>
