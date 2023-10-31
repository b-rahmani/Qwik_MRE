import { clearCache } from './Cache'
import { component$ } from '@builder.io/qwik'
import { get } from './Api'
import { getFromCacheOrApi } from './Cache'
import { getPixel } from '../../TailwindBase'
import { getRem } from '../../TailwindBase'
import { lg } from '../../TailwindBase'
import { md } from '../../TailwindBase'
import { post } from './Api'
import { sm } from '../../TailwindBase'
import { upload } from './Api'
import { xl } from '../../TailwindBase'
import { xs } from '../../TailwindBase'
import { xxl } from '../../TailwindBase'
import { zero } from '../../TailwindBase'
import AppContext from '../BaseContexts/AppContext'
import AppContextProvider from './AppContextProvider'
import camelize from './Camelize'
import ChevronLeftIcon from '../BaseComponents/Svg/ChevronLeftIcon'
import ChevronRightIcon from '../BaseComponents/Svg/ChevronRightIcon'
import Close from '../BaseComponents/Close'
import convertDate from '../BaseFunctions/ConvertDate'
import Copy from '../BaseComponents/Svg/Copy'
import CountUp from '../BaseComponents/CountUp'
import DefaultBreadcrumb from '../BaseComponents/Breadcrumb'
import Duration from '../BaseComponents/Duration'
import Edit from '../BaseComponents/Svg/Edit'
import Element from '../BaseComponents/Element'
import env from './Env'
import Envelop from '../BaseComponents/Svg/Envelop'
import ExpandMore from '../BaseComponents/Svg/ExpandMore'
import FiresPageIcon from '../BaseComponents/Svg/FiresPage'
import Font from '../BaseComponents/Font'
import GoogleTagManagerNoScript from '../BaseComponents/GoogleTagManagerNoScript'
import Image from '../BaseComponents/Image'
import isDev from './IsDev'
import LastPageIcon from '../BaseComponents/Svg/LastPage'
import Link from '../BaseComponents/Link'
import LocalizedDate from '../BaseComponents/LocalizedDate'
import Map from '../BaseComponents/Map'
import merge from '../BaseFunctions/Merge'
import Message from '../BaseComponents/Message'
import Modal from '../BaseComponents/Modal'
import Navigation from '../BaseComponents/Svg/Navigation'
import NoIndex from '../BaseComponents/NoIndex'
import NotFound from './NotFound'
import OpenInFull from '../BaseComponents/OpenInFull'
import Pagination from '../BaseComponents/Pagination'
import Rating from '../BaseComponents/Rating'
import RichText from '../BaseComponents/RichText'
import ScrollToTop from '../BaseComponents/ScrollToTop'
import Star from '../BaseComponents/Svg/Star'
import SwiperConfig from './SwiperConfig'
import SwiperElement from '../BaseComponents/SwiperElement'
import SwiperSlide from '../BaseComponents/SwiperSlide'
import tailwindConfig from '../../tailwind.config.js'
import Telegram from '../BaseComponents/Svg/Telegram'
import useAsync from '../BaseHooks/UseAsync'
import useLocalizedDate from '../BaseHooks/UseLocalizedDate'
import useLocalizedDateNow from '../BaseHooks/UseLocalizedDateNow'
import useLocalizedTime from '../BaseHooks/UseLocalizedTime'
import useMessage from '../BaseHooks/UseMessage'
import WhatsApp from '../BaseComponents/Svg/WhatsApp'

const customColors = tailwindConfig?.theme?.extend?.colors?.custom

export { AppContext }
export { AppContextProvider }
export { camelize }
export { ChevronLeftIcon }
export { ChevronRightIcon }
export { clearCache }
export { Close }
export { component$ }
export { convertDate }
export { Copy }
export { CountUp }
export { customColors }
export { DefaultBreadcrumb }
export { Duration }
export { Edit }
export { Element }
export { env }
export { Envelop }
export { ExpandMore }
export { FiresPageIcon }
export { Font }
export { get }
export { getFromCacheOrApi }
export { getPixel }
export { getRem }
export { GoogleTagManagerNoScript }
export { Image }
export { isDev }
export { LastPageIcon }
export { lg }
export { Link }
export { LocalizedDate }
export { Map }
export { md }
export { merge }
export { Message }
export { Modal }
export { Navigation }
export { NoIndex }
export { NotFound }
export { OpenInFull }
export { Pagination }
export { post }
export { Rating }
export { RichText }
export { ScrollToTop }
export { sm }
export { Star }
export { SwiperConfig }
export { SwiperElement as Swiper }
export { SwiperSlide }
export { Telegram }
export { upload }
export { useAsync }
export { useLocalizedDate }
export { useLocalizedDateNow }
export { useLocalizedTime }
export { useMessage }
export { WhatsApp }
export { xl }
export { xs }
export { xxl }
export { zero }
