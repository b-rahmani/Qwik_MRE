import { $ } from '@builder.io/qwik'
import { post } from 'Base'

const getCart = (async (session) => {
    if (session?.value?.user && session?.value?.user?.guid) {
        try {
            const { cart } = await post('order/getCart', {
                "userGuid": session.value.user.guid
            })
            return cart
        } catch (error) {
            console.log(error)
        }
    } else {
        const cart = localStorage.getItem('cart')
        if (cart) {
            const localCart = JSON.parse(cart)
            return localCart
        }
    }
})

export default getCart
