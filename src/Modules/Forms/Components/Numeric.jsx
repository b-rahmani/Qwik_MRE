
import { component$ } from '@builder.io/qwik'
import { merge } from 'Base'
import Field from './Field'

const Numeric = component$(({
    ariaLabel,
    class: internalClass,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {

    const { label } = rest

    return <>
        <Field {...rest}>
            <input
                type="text"
                class={internalClass ? internalClass : "w-full mt-2 rounded-md px-4 py-2 focus:outline-none placeholder-gray-500"}
                aria-label={ariaLabel ?? label ?? placeholder}
                placeholder={placeholder}
                onkeypress$={(e) => {
                    if (isNaN(e.key) && e.charCode != 46) {
                        e.preventDefault()
                    }
                }}
                value={modelBind.value[property]}
                onInput$={(e) => modelBind.value[property] = e.target.value}
            />
        </Field>
    </>
})

export default Numeric

