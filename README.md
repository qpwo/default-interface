# default-interface

Typescript interfaces with default values. Document default parameters in your `.d.ts` declaration file. Tell your library users what those optional args really default to!

```sh
npm i default-interface
```

### Example usage

```ts
// printUser.ts
import DefaultInterface from 'default-interface'

const defaults = {
    topFruit: 'orange',
    isPro: false,
} as const

type User = DefaultInterface<{
    id: number
    token: string
}, typeof defaults>

export function print(user: User) {
    const { topFruit, isPro, id, token } = { ...defaults, ...user }
    const proText = isPro ? 'a pro' : 'not a pro'
    return `A user named ${id} (${token}) loves ${topFruit}s and is ${proText}`
}
/** If you need the required version of an interface then it's one line */
export function makeUser(partial: User): Required<User> {
    return { ...defaults, ...partial }
}
```

If you run `tsc --declaration` then `printUser.d.ts` will have:

```ts
declare const defaults: {
    readonly topFruit: "orange";
    readonly isPro: false;
};
declare type User = DefaultInterface<{
    id: number;
    token: string;
}, typeof defaults>;
declare function print(user: User): string;
declare function makeUser(partial: User): Required<User>;
```

We have documented the default arguments in our types!!

### Checklist

- ✅ booleans
- ✅ numbers
- ✅ strings
- ✅ array literals and arrays
- ✅ object literals and records

Unfortunately that's all that typescript lets you put in declaration files. So defaults that are BigInts or class instances won't show up, but you rarely use those as parameters anyway.

### What if I use default destructured args the normal way?

Try making a file like this and running `tsc -d`:

```ts
function sayMany({ times = 10, word }: { times?: number; word: string }) {
    console.log(word.repeat(times))
}
```

You'll get a declaration like this, and it will be very difficult for the users of your package to determine what happens when they don't specify `times`:

```ts
declare function sayMany({ times, word }: {
    times?: number;
    word: string;
}): void;
```

```sh
npm i default-interface
```
