
interface subheadingProps{
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

export function SubHeading(prop:subheadingProps){

    return <div className={`${size[prop.size]} font-medium text-gray-500`}>{prop.text}</div>
}