import { RichText as DefaultRichText } from 'Base'

const RichText = ({ content }) => {

    return <>
        <DefaultRichText
            content={content}
            class="prose max-w-none [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse"
            h1='font-bold mt-[30px] text-[1.75rem]'
            h2='font-bold mt-[20px] text-[1.5rem]'
            h3='font-bold mt-[20px] text-[1.25rem]'
            h4='font-bold mt-[15px] mb-[10px] text-[1.15rem]'
            h5='font-600 mt-[10px] text-[1.08rem]'
            h6='font-600 mt-[10px] text-[1.08rem]'
            p='mt-[3px] mb-[10px]'
            a='text-custom-color1 hover:text-custom-color3 transition-all'
            ul='my-[1rem] mx-[1rem] list-disc'
            ol='my-[1rem] mx-[1rem] list-disc'
            quote='text-black'
        />
    </>
}

export default RichText
