import type { Option } from "@/types/Option";

export default [
    {
        uid: -1,
        name: 'Выкл'
    },
    {
        uid: -2,
        name: 'Push',
        disabled: true,
        hint: 'Можно установить только в приложении'
    },
    {
        uid: 2,
        name: 'Email'
    },
    {
        uid: 1,
        name: 'Telegram ID'
    }
] as Option[];