import DefaultInterface from 'default-interface'

const _defaults = {
    topFruit: 'orange',
    isPro: false,
} as const

type User = DefaultInterface<
    {
        id: number
        token: string
    },
    typeof _defaults
>

export function print(user: User) {
    const { topFruit, isPro, id, token } = { ..._defaults, ...user }
    const proText = isPro ? 'a pro' : 'not a pro'
    return `A user named ${id} (${token}) loves ${topFruit}s and is ${proText}`
}

export function makeUser(partial: User): Required<User> {
    return { ..._defaults, ...partial }
}
