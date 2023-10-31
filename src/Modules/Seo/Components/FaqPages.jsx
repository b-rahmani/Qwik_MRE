import {
    $,
    component$,
    useSignal,
} from '@builder.io/qwik'
import Accordion from './Accordion'

const FaqPages = component$(({ faqPages }) => {

    const activeAccordionId = useSignal()
    const accordionClickHandler = $((id) => {
        if (id === activeAccordionId.value) {
            activeAccordionId.value = ''
        } else {
            activeAccordionId.value = id
        }
    })

    return <>
        {
            faqPages && faqPages?.length > 0 &&
            <div class="my-5 px-5 flex flex-col gap-.5">
                {
                    faqPages.map((faq) => <>
                        <Accordion
                            key={faq?.id}
                            clickHandler={accordionClickHandler}
                            isOpen={activeAccordionId?.value === faq?.id}
                            item={faq}
                            title={faq?.question}
                        >
                            {faq.answer}
                        </Accordion>
                    </>
                    )
                }
            </div>
        }
    </>
})

export default FaqPages
