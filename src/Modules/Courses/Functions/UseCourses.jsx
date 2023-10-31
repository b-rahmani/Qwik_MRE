const useCourses = () => {

    const loadCourseUrl = course => {
        return `/course/${course?.slug}`
    }
    const loadCourseCategoryUrl = hierarchy => {
        return `/courses/category/${hierarchy?.slug}`
    }

    const loadCourseTagUrl = tag => {

        return `/courses/tag/${tag?.slug}`
    }

    return {
        loadCourseCategoryUrl,
        loadCourseTagUrl,
        loadCourseUrl,
    }
}

export default useCourses
