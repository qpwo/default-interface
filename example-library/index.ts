import DefaultInterface from 'default-interface'

const defaults = {
    topFruit: 'orange',
    isPro: false,
} as const

type User = DefaultInterface<
    {
        id: number
        token: string
    },
    typeof defaults
>

export function print(user: User) {
    const { topFruit, isPro, id, token } = { ...defaults, ...user }
    const proText = isPro ? 'a pro' : 'not a pro'
    return `A user named ${id} (${token}) loves ${topFruit}s and is ${proText}`
}

export function makeUser(partial: User): Required<User> {
    return { ...defaults, ...partial }
}
