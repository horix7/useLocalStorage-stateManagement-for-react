
class ConvertingLocalToObject {

    public convertAny = (item: string) => {
        try {

            const itemInfo:any  = localStorage.getItem(item)
            return JSON.parse(itemInfo)

        } catch (error) {
            return localStorage.getItem(item)
        }
    }

    public saveItem = (item: any, name: string) => {
        if (typeof item === "string") {
            localStorage.setItem(name, item)
        }else {
            localStorage.setItem(name, JSON.stringify(item))
        }
    }
}

export default  new ConvertingLocalToObject