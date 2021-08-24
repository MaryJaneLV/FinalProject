const Post = require("../models/Post");
// const FileStorage = require("../storages/FileStorage");
const DbStorage = require("../storages/DbStorage");

// knowledge of how and where to store data
class PostRepository {
  constructor() {
    // this._storage = new FileStorage("Users");
    this._storage = new DbStorage("post");
  }

  async getAll() {
    try {
      const list = await this._storage.getAll();
      return list.map((storedData) => {
        const PostModel = new Post(storedData);
        return PostModel.getData();
      });
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async getById(id) {
    try {
      const storedData = await this._storage.getById(id);

      if(!storedData) return null

      const PostModel = new Post(storedData);
      return PostModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  // data == req.body
  async create(data) {
    try {
      // model used to validate and parse data
      const PostModel = new Post(data);
      const dataToStore = PostModel.getDataForStorage();
      // save to storage and get back stored data (with id), update model's id
      const { id } = await this._storage.create(dataToStore);
      PostModel.setId(id);
      return PostModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async update(id, data) {
    try {
      const PostModel = new Post(
        Object.assign({}, data, { id })
      );
      const dataToStore = PostModel.getDataForStorage();
      await this._storage.update(dataToStore);
      return PostModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async delete(id) {
    try {
      return await this._storage.delete(id);
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }
}

module.exports = new PostRepository();