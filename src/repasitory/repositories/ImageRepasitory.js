import ApiFactory from "../ApiFactory";

class ImageRepository extends ApiFactory {
  constructor() {
    super();
    this.prefix = "/auth";
  }

  getCategories() {
    return new Promise((resolve, reject) => {
      this.get('categories').then((res) => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

  getImages({ limit='', category_id='' }) {
    return new Promise((resolve, reject) => {
      this.get(`images/search?limit=${limit}&category_ids=${category_id}`).then((res) => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

}

export default (new ImageRepository())