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
    birthday: new Date('1980-01-01'),
} as const

type User = DefaultInterface<{
    id: number
    token: string
}, typeof defaults>

export function print(user: User) {
    const { topFruit, birthday, id, token } = { ...defaults, ...user }
    return `A user named ${id} (${token}) was born on ${birthday} loving ${topFruit}s`
}
```

If you run `tsc --declaration` then `printUser.d.ts` will have:

```ts
type User = DefaultInterface<{
    topFruit: 'orange'
    birthday: new Date('1980-01-01')
}, {
    id: number
    token: string
}>
declare function print(user: User) {}
```

We have documented the default arguments in our types!!
