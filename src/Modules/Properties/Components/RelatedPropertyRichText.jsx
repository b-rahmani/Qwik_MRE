// import { component$ } from '@builder.io/qwik'
// import { Image } from 'Base'
// import { UsePropertyUrl } from 'properties'

// const RelatedPropertyRichText = ({ properties }) => {

//     const property = properties.find(property => property.slug === slug)

//     return <>
//         <div class="max-w-7xl mx-auto my-10 bg-gray-100 p-4 md:p-10 rounded">
//             <strong class="block font-xl mb-6">
//                 new related properties
//             </strong>

//             <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 <div class="max-w-full w-[400px] md:w-full mx-auto bg-white shadow rounded group">
//                     <a
//                         href={UsePropertyUrl(property?.slug)}
//                         target="_blank"
//                     >
//                         <Image
//                             src={property?.relatedItems?.imageUrl}
//                             alt={property?.title}
//                             containerClass='w-full aspect-[1/.75] rounded overflow-hidden'
//                         />
//                     </a>
//                     <div class="flex flex-col gap-3 p-4">
//                         <h2 class="text-xl line-clamp-1 mb-2">
//                             <a
//                                 href={UsePropertyUrl(property?.slug)}
//                                 class="font-bold group-hover:text-blue-600 transition-all"
//                                 target="_blank"
//                             >
//                                 {property?.title}
//                             </a>
//                         </h2>
//                         {/* <p class="flex flex-wrap gap-3">
//                             <span>4 rooms</span>-
//                             <span>2 parking</span>-
//                             <span>store</span>
//                         </p> */}
//                         <div class="flex flex-wrap gap-2 justify-between bg-gray-100 rounded p-2 font-bold text-sm text-center">
//                             <span>2.5m rent</span>
//                             <span>15m rent</span>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </>
// }

// export default RelatedPropertyRichText

// import { component$ } from '@builder.io/qwik'
// import { Image } from 'Base'
// import { UsePropertyUrl } from 'properties'

const RelatedPropertyRichText = ({ properties }) => {
    
    return <div> RelatedPropertyRichText </div>
}

export default RelatedPropertyRichText
