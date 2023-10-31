import {
    $,
    useSignal,
} from '@builder.io/qwik'
import {
    post,
    useMessage
} from 'Base'

const useComment = (entityType, entityGuid) => {

    const model = useSignal({
        body: "",
        email: "",
        entityGuid: entityGuid,
        entityType: entityType,
        name: "",
        website: "",
    })

    const progress = useSignal(false)

    const {
        isMessageShown,
        isSuccess,
    } = useMessage()

    const resetFields = $(() => {
        model.value = {
            body: "",
            email: "",
            entityGuid: entityGuid,
            entityType: entityType,
            name: "",
            website: "",
        }
    })

    const handleSubmit = $(async () => {
        progress.value = true
        await post('/comment/save', model.value).then(data => {
            progress.value = false
            isSuccess.value = isMessageShown.value = true
            resetFields()
        }, e => {
            progress.value = isSuccess.value = false
            isMessageShown.value = true
        })
    })

    return {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
        resetFields,
    }
}

export default useComment
