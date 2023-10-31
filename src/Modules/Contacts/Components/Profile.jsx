import {
    $,
    component$,
    useSignal,
} from '@builder.io/qwik'
import { LocalizedDate } from 'Base'
import {
    Edit,
    CancelEdit,
    EditBirthday,
    EditEmail,
    EditId,
    EditName,
    EditPhone,
} from 'Contacts'

const Profile = component$(({
    personInfo,
    localesEnum,
    currentLocale,
    profileStatics,
    ...rest
}) => {

    const {
        defaultEmail,
        defaultPhone,
        emails,
        juridicalPersonInfo,
        milliseconds,
        naturalInfo,
        person,
        phones,
        user,
    } = personInfo

    const editPartName = useSignal()

    const tabItems = [
        {
            name: 'name',
            title: profileStatics.name,
            value: person?.displayName,
            Component: EditName
        },
        {
            name: 'email',
            title: profileStatics.email,
            value: defaultEmail,
            Component: EditEmail
        },
        {
            name: 'Phone',
            title: profileStatics.phone,
            value: defaultPhone,
            Component: EditPhone

        },
        {
            name: 'Id',
            title: profileStatics.id,
            value: person?.nationalIdentificationNumber,
            Component: EditId
        },
        {
            name: 'Birthday',
            title: profileStatics.birthday,
            value: naturalInfo?.birthUtcDate,
            Component: EditBirthday,
            type: "date"
        }

    ]

    const editHandler = $((name) => {
        editPartName.value = name
    })

    return <div class='w-full grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 items-start justify-start gap-4 [&>div]:gap-2 [&>div]:p-2 [&>div]:bg-[linear-gradient(0deg,#efefef_0,#efefef_49%,#f7f7f7_52%,#f7f7f7)] [&>div]:border [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:min-h-[80px] [&>div]:justify-start [&>div]:relative [&>div]:cursor-pointer'>
        {tabItems.map(item => {

            let EditComponent = item.Component

            return <div key={item.name}>
                {editPartName.value === item.name ?
                    <>
                        <strong>
                            {item.title}
                        </strong>
                        <EditComponent
                            item={item}
                            profileStatics={profileStatics}
                            cancel={$(() => editHandler(""))}
                            {...rest} />
                        <CancelEdit
                            click={$(() => editHandler(""))}
                        />
                    </>
                    :
                    <>
                        <strong>
                            {item.title}
                        </strong>
                        {item?.type === 'date' ?
                            <LocalizedDate
                                localesEnum={localesEnum}
                                utcDate={item.value}
                                localeKey={currentLocale.key}
                            /> :
                            <span>
                                {item.value}
                            </span>
                        }

                        <Edit
                            click={$(() => editHandler(item.name))} />
                    </>
                }
            </div>
        }
        )}
    </div >
})

export default Profile
