const useListingUrl = ({
    cityDivision,
    dealType,
    maxArea,
    maxMonthlyRent,
    maxRentUpfront,
    maxSaleTotalPrice,
    minArea,
    minMonthlyRent,
    minRentUpfront,
    minSaleTotalPrice,
    propertyType,
    search,
}) => {

    let url = '/properties?'
    if (cityDivision) {
        url += `&city-division=${cityDivision}`
    }
    if (dealType) {
        url += `&deal-type=${dealType}`
    }
    if (propertyType) {
        url += `&property-type=${propertyType}`
    }
    if (minArea) {
        url += `&min-area=${minArea}`
    }
    if (maxArea) {
        url += `&max-area=${maxArea}`
    }
    if (minSaleTotalPrice) {
        url += `&min-sale-total-price=${minSaleTotalPrice}`
    }
    if (maxSaleTotalPrice) {
        url += `&max-sale-total-price=${maxSaleTotalPrice}`
    }
    if (minRentUpfront) {
        url += `&min-sent-upfront=${minRentUpfront}`
    }
    if (maxRentUpfront) {
        url += `&max-sent-upfront=${maxRentUpfront}`
    }
    if (minMonthlyRent) {
        url += `&min-monthly-rent=${minMonthlyRent}`
    }
    if (maxMonthlyRent) {
        url += `&max-monthly-rent=${maxMonthlyRent}`
    }
    if (search) {
        url += `&search=${search}`
    }

    return url.replace('?&', '?')
}

export default useListingUrl
