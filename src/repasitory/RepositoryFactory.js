  
import ImageRepository from "./repositories/ImageRepasitory";


export default class RepositoryFactory {
    static image(method, data) {
        return ImageRepository[method](data)
    }
}