import { component$ } from '@builder.io/qwik'

import { useAuthSession } from 'Accounts'

const UserTab = component$(() => {

    const session = useAuthSession()

    return <div>
        <div class='flex flex-col'>
            <span>Email: </span>
            <span>{session?.value?.user?.email}</span>
        </div>
        <div class='flex flex-col'>
            <span>Name: </span>
            <span>{session?.value?.user?.name}</span>
        </div>
    </div>
})

export default UserTab
