import {
    $,
    useSignal
} from '@builder.io/qwik'
import { useListingUrl } from 'Properties'

const useSearch = () => {

    const model = useSignal({
        cityDivision: null,
        dealType: null,
        maxArea: null,
        maxMonthlyRent: null,
        maxRentUpfront: null,
        maxSaleTotalPrice: null,
        minArea: null,
        minMonthlyRent: null,
        minRentUpfront: null,
        minSaleTotalPrice: null,
        propertyType: null,
    })

    const handleSearch = $(() => {
        const address = useListingUrl({
            cityDivision: model.value.cityDivision,
            dealType: model.value.dealType,
            maxArea: model.value.maxArea,
            maxRentUpfront: model.value.maxRentUpfront,
            maxSaleTotalPrice: model.value.maxSaleTotalPrice,
            minArea: model.value.minArea,
            minMonthlyRent: model.value.minMonthlyRent,
            maxMonthlyRent: model.value.maxMonthlyRent,
            minRentUpfront: model.value.minRentUpfront,
            minSaleTotalPrice: model.value.minSaleTotalPrice,
            propertyType: model.value.propertyType,
            search: model.value.search,
        })
        window.location.href = address
    })

    return {
        model,
        handleSearch,
    }
}

export default useSearch
