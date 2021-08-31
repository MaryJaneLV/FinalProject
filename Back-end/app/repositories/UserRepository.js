const User = require("../models/User");
// const FileStorage = require("../storages/FileStorage");
const DbStorage = require("../storages/DbStorage");

// knowledge of how and where to store data
class UsersRepository {
  constructor() {
    // this._storage = new FileStorage("Users");
    this._storage = new DbStorage("user");
  }

  async getAll() {
    try {
      const list = await this._storage.getAll();
      return list.map((storedData) => {
        const UserModel = new User(storedData);
        return UserModel.getData();
      });
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async getById(id) {
    try {
      const storedData = await this._storage.getById(id);

      if(!storedData) return null

      const UserModel = new User(storedData);
      return UserModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async getOneByColumn(value, columnName){
    try {
      const storedData = await this._storage.getOneByColumn(value, columnName);
      if(!storedData) return null

      const UserModel = new User(storedData);

      return UserModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  // data == req.body
  async create(data) {
    try {
      // model used to validate and parse data
      const UserModel = new User(data);
      const dataToStore = UserModel.getDataForStorage();
      // save to storage and get back stored data (with id), update model's id
      const { id } = await this._storage.create(dataToStore);
      UserModel.setId(id);
      return UserModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async update(id, data) {
    try {
      const UserModel = new User(
        Object.assign({}, data, { id })
      );
      const dataToStore = UserModel.getDataForStorage();
      await this._storage.update(dataToStore);
      return UserModel.getData();
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

module.exports = new UsersRepository();
