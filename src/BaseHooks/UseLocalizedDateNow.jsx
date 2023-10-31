const useLocalizedDateNow = ({
    localesEnum,
    options,
    localeKey,
}) => {

    if (localeKey?.toLowerCase() === localesEnum.fa) {
        return new Date()?.toLocaleDateString('fa-IR',
            {
                timeZone: "Asia/Tehran",
                ...options

            }
        )
    }

    return new Date()?.toLocaleDateString('en-US')

}

export default useLocalizedDateNow
