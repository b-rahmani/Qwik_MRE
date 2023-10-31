import { $ } from '@builder.io/qwik'
import { post } from 'Base'

const useOrderActions = (session) => {

    const addItem = $(async (entity, entityType, quantity) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post('order/additem', {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "quantity": quantity,
                    "userGuid": session?.value.user.guid
                })
                trigger('cartChanged')
                return (cart)
            } catch (error) {
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem('cart')
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    newOrderLines = [...existingOrderLines.map(existingOrderLine => {
                        if (existingOrderLine.entityGuid == entity.guid) {
                            const newQuantity = existingOrderLine.quantity + 1
                            const newTotalPrice = entity.relatedItems.price.amount * newQuantity
                            return {
                                entityType: entityType,
                                entityGuid: entity.guid,
                                quantity: newQuantity,
                                price: entity.relatedItems.price.amount,
                                totalPrice: newTotalPrice,
                                relatedItems: {
                                    entity: entity
                                }
                            }
                        } else {
                            return existingOrderLine
                        }
                    })]
                } else {
                    newOrderLines = [...existingOrderLines, {
                        entityType: entityType,
                        entityGuid: entity.guid,
                        quantity: 1,
                        price: entity.relatedItems.price.amount,
                        totalPrice: entity.relatedItems.price.amount,
                        relatedItems: {
                            entity: entity
                        }
                    }]
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalPrice: newTotalPrice,
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        }
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem('cart', JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem('cart')))
                trigger('cartChanged')
                return { cart: JSON.parse(localStorage.getItem('cart')) }
            } else {
                const newCart = {
                    order: {
                        totalPrice: entity.relatedItems.price.amount,
                        relatedItems: {
                            itemsCount: 1
                        }
                    },
                    orderLines: [
                        {
                            entityType: entityType,
                            entityGuid: entity.guid,
                            quantity: 1,
                            price: entity.relatedItems.price.amount,
                            totalPrice: entity.relatedItems.price.amount,
                            relatedItems: {
                                entity: entity
                            }
                        }
                    ]
                }
                localStorage.setItem('cart', JSON.stringify(newCart))
                trigger('cartChanged')
                return { cart: JSON.parse(localStorage.getItem('cart')) }
            }
        }
    })

    const removeItem = $(async (entity, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post('order/removeitem', {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
                trigger('cartChanged')
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem('cart')
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    newOrderLines = existingOrderLines.filter(existingOrderLine => existingOrderLine.entityGuid != entity.guid)
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalQuantity: newTotalQuantity,
                        totalPrice: newTotalPrice,
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        }
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem('cart', JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem('cart')))
                trigger('cartChanged')
                return { cart: JSON.parse(localStorage.getItem('cart')) }
            }
        }
    })

    const increaseQuantity = $(async (entity, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post('order/increasequantity', {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
                trigger('cartChanged')
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem('cart')
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    newOrderLines = [...existingOrderLines.map(existingOrderLine => {
                        if (existingOrderLine.entityGuid == entity.guid) {
                            const newQuantity = existingOrderLine.quantity + 1
                            const newTotalPrice = entity.relatedItems.price.amount * newQuantity
                            return {
                                entityType: entityType,
                                entityGuid: entity.guid,
                                quantity: newQuantity,
                                price: entity.relatedItems.price.amount,
                                totalPrice: newTotalPrice,
                                relatedItems: {
                                    entity: entity
                                }
                            }
                        } else {
                            return existingOrderLine
                        }
                    })]
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalPrice: newTotalPrice,
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        },
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem('cart', JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem('cart')))
                trigger('cartChanged')
                return { cart: JSON.parse(localStorage.getItem('cart')) }
            }
        }
    })

    const decreaseQuantity = $(async (entity, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post('order/decreasequantity', {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
                trigger('cartChanged')
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem('cart')
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    if (existingOrderLineForEntity.quantity == 1) {
                        newOrderLines = existingOrderLines.filter(existingOrderLine => existingOrderLine.entityGuid != entity.guid)

                    } else {
                        newOrderLines = [...existingOrderLines.map(existingOrderLine => {
                            if (existingOrderLine.entityGuid == entity.guid) {
                                const newQuantity = existingOrderLine.quantity - 1
                                const newTotalPrice = entity.relatedItems.price.amount * newQuantity
                                return {
                                    entityType: entityType,
                                    entityGuid: entity.guid,
                                    quantity: newQuantity,
                                    price: entity.relatedItems.price.amount,
                                    totalPrice: newTotalPrice,
                                    relatedItems: {
                                        entity: entity
                                    }
                                }
                            } else {
                                return existingOrderLine
                            }
                        })]
                    }
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalPrice: newTotalPrice,
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        }
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem('cart', JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem('cart')))
                trigger('cartChanged')
                return { cart: JSON.parse(localStorage.getItem('cart')) }
            }
        }
    })
    const removeCart = $(async () => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post('order/removecart', {
                    "userGuid": session?.value.user.guid
                })
                trigger('cartChanged')
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            cart = localStorage.getItem('cart')
            if (cart) {
                localStorage.removeItem('cart')
                trigger('cartChanged')
                return { cart: JSON.parse(localStorage.getItem('cart')) }
            }
        }
    })

    return {
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        removeCart,
    }
}

export default useOrderActions
