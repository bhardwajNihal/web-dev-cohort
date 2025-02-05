
interface headingProps{
    text: string,
    size: "lg" |"xl" |"2xl" |"3xl" |"4xl" |"5xl"
}

const size = {
    "lg" : "text-lg",
    "xl" : "text-xl",
    "2xl" : "text-2xl",
    "3xl" : "text-3xl",
    "4xl" : "text-4xl",
    "5xl" : "text-5xl",
}

export function Heading(prop:headingProps){

    return <div className={`${size[prop.size]} font-semibold`}>{prop.text}</div>
}