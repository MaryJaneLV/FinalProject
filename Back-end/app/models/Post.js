// all business and app logic about model goes here
class Post {
    #data;
  
    constructor(data) {
      this.#data = Object.assign({}, data);
    }
  
    // used for views or other application parts except storage
    getData() {
      return Object.assign({}, this.#data);
    }
  
    setId(id) {
      this.#data.id = id;
    }
  
    /**
     * @returns data what should be stored
     */
    getDataForStorage() {
      const dataCopy = Object.assign({}, this.#data);
      return dataCopy;
    }
  }
  
  module.exports = Post;