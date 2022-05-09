declare type Elevator<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T extends null ? null : T extends undefined ? undefined : T extends Date ? Date : T extends RegExp ? RegExp : T extends Error ? Error : T extends readonly [infer A] ? [Elevator<A>] : T extends readonly [infer A, infer B] ? [Elevator<A>, Elevator<B>] : T extends readonly [infer A, infer B, infer C] ? [Elevator<A>, Elevator<B>, Elevator<C>] : T extends readonly [infer A, infer B, infer C, infer D] ? [Elevator<A>, Elevator<B>, Elevator<C>, Elevator<D>] : T extends readonly [infer A, infer B, infer C, infer D, infer E] ? [Elevator<A>, Elevator<B>, Elevator<C>, Elevator<D>, Elevator<E>] : T extends readonly [infer A, infer B, infer C, infer D, infer E, infer F] ? [Elevator<A>, Elevator<B>, Elevator<C>, Elevator<D>, Elevator<E>, Elevator<F>] : T extends readonly [infer A, infer B, infer C, infer D, infer E, infer F, infer G] ? [Elevator<A>, Elevator<B>, Elevator<C>, Elevator<D>, Elevator<E>, Elevator<F>, Elevator<G>] : T extends ReadonlyArray<infer X> ? Elevator<X>[] : T extends (x: infer In) => infer Out ? (x: In) => Out : T extends Record<infer K, infer V> ? {
    -readonly [K in keyof T]: Elevator<T[K]>;
} : T extends unknown ? unknown : never;
declare type Default<Kind, Def> = Kind;
declare type DefaultInterface<NonDefault, Defaults> = NonDefault & {
    -readonly [K in keyof Defaults]+?: Default<Elevator<Defaults[K]>, Defaults[K]>;
};
export default DefaultInterface;
