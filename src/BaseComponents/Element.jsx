import * as Components from 'RichTextComponents'

const Element = ({
    attributes,
    children,
    text,
    type,
    ...rest
}) => {

    if (type === 'component') {
        const { componentName } = rest
        const Component = Components[componentName]
        if (!Component)
            return <div class="w-full border border-red-600 border-dashed p-10 text-center">Component {componentName} is not implemented</div>
        const transformedAttributes = attributes.reduce((attrs, current) => {
            attrs[current.name.toLowerCase()] = current.value
            return attrs
        }, {})
        return <Component {...transformedAttributes} {...rest} />
    }

    const {
        a,
        blockQuote,
        h1,
        h2,
        h3,
        h4,
        hr,
        img,
        li,
        ol,
        p,
        table,
        tableCell,
        tableRow,
        ul,
    } = rest

    const log = () => {
        console.table({
            attributes: JSON.stringify(attributes),
            children: JSON.stringify(children),
            rest: JSON.stringify(rest),
            text,
            type,
        })
    }

    if (text) {
        return <span {...attributes} {...rest} class={`${Object.getOwnPropertyNames(rest).reduce((a, b) => `${a} ${b}`, '')} `}>{text}</span>
    }

    const childElements = children?.map(child => {
        return <Element {...child} />
    })

    switch (type) {
        case 'block-quote':
            return <blockquote
                class={blockQuote || "text-xl italic font-semibold text-gray-900"}
                {...attributes}
            >
                {childElements}
            </blockquote>
        case 'bulleted-list':
            return <ul
                class={ul || "space-y-1 list-disc list-inside"}
                {...attributes}
            >
                {childElements}
            </ul>
        case 'heading-one':
            return <h1
                class={h1 || "text-4xl font-black"}
                {...attributes}
            >
                {childElements}
            </h1>
        case 'heading-two':
            return <h2
                class={h2 || "text-4xl font-bold"}
                {...attributes}
            >
                {childElements}
            </h2>
        case 'heading-three':
            return <h3
                class={h3 || "text-3xl font-bold"}
                {...attributes}
            >
                {childElements}
            </h3>
        case 'heading-four':
            return <h4
                class={h4 || "text-2xl font-bold"}
                {...attributes}
            >
                {childElements}
            </h4>
        case 'horizontal-rule':
            return <hr
                class={hr || p || ""}
            />
        case 'list-item':
            return <li
                class={li || ""}
                {...attributes}
            >
                {childElements}
            </li>
        case 'numbered-list':
            return <ol
                class={ol || "space-y-1 list-decimal list-inside"}
                {...attributes}
            >
                {childElements}
            </ol>
        case 'list-entity':
            return <li
                class={li || "mx-2"}
                {...attributes}
            >
                {childElements}
            </li>
        case 'paragraph':
            return <p
                class={p || ""}
                {...attributes}
            >
                {childElements}
            </p>
        case 'table':
            return <table class={table || "border-none my-5"}>
                <tbody {...attributes}>
                    {childElements}
                </tbody>
            </table>
        case 'table-row':
            return <tr
                class={tableRow || ""}
                {...attributes}
            >
                {childElements}
            </tr>
        case 'table-cell':
            return <td
                class={tableCell || "py-4 px-2 border border-slate-200"}
                {...attributes}
            >
                {childElements}
            </td>
        case 'image':
            return <img
                class={img || "h-auto max-w-full my-6 mx-auto"}
                src={rest.url}
                alt={rest.alt}
                title={rest.title}
                {...attributes}
            >
                {childElements}
            </img>
        case 'link':
            return <a
                class={a || "font-medium text-blue-600 hover:underline"}
                href={rest.href}
                target={rest.target}
                download={rest.isDownload}
                {...attributes}
            >
                {childElements}
            </a>
        case 'raw-html':
            return <div
                class="raw-html"
                dangerouslySetInnerHTML={rest.content}
            >
            </div>
        default:
            return <span
                data-nonValidElement
                {...attributes}>{childElements}</span>
    }
}

export default Element
