
// Nextjs approach to show a loader, as it have file based routing.
//  the server will fallback to show this loader if the main component's content gets time to load
export default function Loader(){

    return <div className="">
        loading...
    </div>
}