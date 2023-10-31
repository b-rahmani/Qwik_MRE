import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Bars } from 'Svg'
import {
    Branding,
    DesktopMainMenu,
    MainCta,
    MobileMenu,
    TopBar,
} from 'Layout'

const Header = component$(({
    branding,
    contactInfo,
    mainCta,
    menuItems,
    socialNetworks,
    topContactLink,
}) => {

    const isShown = useSignal(false)
    return <>
        <div class="w-full fixed z-50 top-0 start-0 lg:relative">
            <section class="bg-black text-gray">
                <div class="max-w-7xl mx-auto px-6 flex justify-between items-center py-3 text-xs text-gray-300">
                    <TopBar topContactLink={topContactLink} contactInfo={contactInfo} socialNetworks={socialNetworks} mainCta={mainCta} />
                </div>
            </section>

            <section class="bg-neutral-800 text-gray border-y border-gray-500">
                <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <span class='text-white lg:hidden font-bold' onClick$={() => isShown.value = !isShown.value}>
                        <Bars class="w-8 h-8 text-slate-50 lg:hidden font-bold focus:outline-none" />
                    </span>

                    <Branding {...branding} />

                    <DesktopMainMenu menuItems={menuItems} />

                    <MainCta {...mainCta} />

                </div>

                <MobileMenu
                    isShown={isShown}
                    menuItems={menuItems}
                />

            </section>

        </div>
    </>
})

export default Header
