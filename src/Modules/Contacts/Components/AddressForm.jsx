import {
    $,
    component$,
    useSignal,
    useTask$,
    useVisibleTask$,
} from '@builder.io/qwik'
import { post } from 'Base'
import {
    getAdministrativeDivisions,
    getCities,
    getCountries,
    Select,
} from 'Geo'

const AddressForm = component$(({
    addresses,
    addressStatics,
    isOpen,
    session,
}) => {

    const usableSession = session?.value ? session?.value : session

    const countries = useSignal([])
    const administrativeDivisions = useSignal([])
    const cities = useSignal([])
    const chosenCountry = useSignal({})
    const chosenAdministrativeDivision = useSignal({})
    const chosenCity = useSignal({})
    const remarks = useSignal('')
    const postalCode = useSignal('')
    const addressRest = useSignal('')

    const sendAddress = $(() => {
        post('/address/addAddress', {
            userGuid: usableSession.user.guid,
            cityGuid: chosenCity.value?.guid,
            postalCode: postalCode?.value,
            rest: addressRest?.value,
            remarks: remarks?.value
        }).then((res) => {
            addresses.value = []
            isOpen.value = false
        })
    })

    useTask$(async () => {
        countries.value = await getCountries()
        if (countries.value.length > 0) {
            chosenCountry.value = countries.value?.[0]
        }
    })

    useVisibleTask$(async ({ track }) => {
        track(() => chosenCountry.value)
        if (chosenCountry.value) {
            administrativeDivisions.value = await getAdministrativeDivisions(chosenCountry.value?.id)
            if (administrativeDivisions.value.length > 0) {
                cities.value = await getCities(administrativeDivisions.value?.[0]?.id, null)
            } else {
                cities.value = await getCities(null, countries.value?.[0]?.id)
            }
        }
    })

    return isOpen.value &&
        <>
            <div
                class='bg-black/60 fixed h-screen w-full top-0 start-0 z-40'
                onClick$={() => isOpen.value = false}
            />
            <div class='fixed inset-0 h-fit m-auto w-[90%] px-4 py-6 max-w-xl grid grid-cols-1 items-center justify-start gap-4 z-50 bg-white rounded-lg'>
                <div class='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <Select
                        class="w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-[5px] order-1 bg-gray-200"
                        childClass="hover:bg-custom-color1 text-gray-600 hover:text-white rounded-[5px]"
                        items={countries}
                        name="country"
                        filterProperty='name'
                        filter
                        label={addressStatics?.countries}
                        onChange={$((e, country) => {
                            chosenCountry.value = country
                            getAdministrativeDivisions(country.id).then(data => administrativeDivisions.value = data)
                            chosenAdministrativeDivision.value = {}
                        })}
                    />
                    <Select
                        class="w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-[5px] order-1 bg-gray-200"
                        childClass="hover:bg-custom-color1 text-gray-600 hover:text-white rounded-[5px]"
                        items={administrativeDivisions}
                        name="administrativeDivision"
                        filterProperty='name'
                        filter
                        label={addressStatics?.administrativeDivisions}
                        onChange={$((e, administrativeDivision) => {
                            getCities(administrativeDivision.id, null).then(data => cities.value = data)
                            chosenAdministrativeDivision.value = administrativeDivision
                            chosenCity.value = {}
                        })}
                    />
                    <Select
                        class="w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-[5px] order-1 bg-gray-200"
                        childClass="hover:bg-custom-color1 text-gray-600 hover:text-white rounded-[5px]"
                        items={cities}
                        name="city"
                        filterProperty='name'
                        filter
                        label={addressStatics?.cities}
                        onChange={$((e, city) => chosenCity.value = city)}
                    />
                </div>
                <div class='flex flex-col items-center justify-start gap-y-4 md:items-start'>
                    <label>
                        {addressStatics?.postalCode}
                    </label>
                    <input
                        class='bg-gray-200 rounded-lg p-2 w-full'
                        type='text'
                        onInput$={(e) => postalCode.value = e.target.value}
                    >
                    </input>
                    <label>
                        {addressStatics?.rest}
                    </label>
                    <textarea
                        rows='4'
                        class='bg-gray-200 rounded-lg resize-none p-2 w-full'
                        onInput$={(e) => addressRest.value = e.target.value}
                    >
                    </textarea>
                    <label>
                        {addressStatics?.remarks}
                    </label>
                    <textarea
                        rows='4'
                        class='bg-gray-200 rounded-lg resize-none p-2 w-full'
                        onInput$={(e) => remarks.value = e.target.value}
                    >
                    </textarea>
                </div>
                <div class='flex gap-2 flex-row w-full items-center justify-center'>
                    <button
                        class='w-full flex-1 bg-custom-color1 p-3 rounded-md text-white font-bold text-sm'
                        type='button'
                        onClick$={() => sendAddress()}
                    >
                        {addressStatics?.add}
                    </button>
                    <button
                        class='w-full flex-1 bg-gray-200 p-3 rounded-md text-black font-bold text-sm'
                        type='button'
                        onClick$={() => isOpen.value = false}
                    >
                        {addressStatics?.cancel}
                    </button>
                </div>
            </div>
        </>
})

export default AddressForm
