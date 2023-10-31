const useCategoryUrl = (slug,localePathPrefix) => {
    return `${localePathPrefix}/products?category=${slug}`
}

export default useCategoryUrl
