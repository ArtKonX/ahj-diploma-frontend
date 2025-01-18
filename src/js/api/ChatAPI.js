import Entity from "./Entity";

export default class ChatAPI extends Entity {
  createUser(name, callback) {
    this.create(name, callback);
  }

  createMessage(mess, callback) {
    this.createMess(mess, callback);
  }

  messages(callback, count, page, userId, size, category) {
    this.getMessages(callback, count, page, userId, size, category);
  }

  sendFiles(name, callback) {
    this.sendFile(name, callback);
  }

  getPin(userId, callback) {
    this.getCurrentPin(userId, callback);
  }

  delatePin(data, callback) {
    this.delateCurrentPin(data, callback);
  }

  addFavourites(data, callback) {
    this.addCurrentFavourites(data, callback);
  }

  delateFavourites(data, callback) {
    this.delateCurrentFavourites(data, callback);
  }

  downloadFileById(id, userId, callback) {
    this.downloadFile(id, userId, callback);
  }

  authorizationUser(data, callback) {
    this.authorization(data, callback);
  }

  exitUser(data, callback) {
    this.exit(data, callback);
  }
}
