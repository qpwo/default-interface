# default-interface

Typescript interfaces with default values. Document default parameters in your `.d.ts` declaration file.

```sh
npm i default-interface
```

```ts
import DefaultInterface from 'default-interface'

const _defaults = {
    topFruit: 'orange',
    birthday: new Date('1980-01-01'),
} as const

// prettier-ignore
type User = DefaultInterface<_defaults, {
    id: number
    token: string
}>

export function print(user: User) {
    const { topFruit, birthday, id, token } = { ..._defaults, ...user }
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
