import createRequest from "./createRequest";
import downloadFileRequest from "./downloadFileRequest";
import createRequestSendFiles from "./createRequestSendFiles";

export default class Entity {
  constructor(url) {
    this.url = url;
  }

  createMess(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}create-message`,
      body: data,
      callback,
    });
  }

  getMessages(callback, count, page, userId, size, category) {
    console.log(
      `${this.url}messages/${count}?page=${page}&userId=${userId}&size=${size}&catagorie=` +
        category,
    );
    createRequest({
      method: "GET",
      url:
        `${this.url}messages/${count}?page=${page}&userId=${userId}&size=${size}&catagorie=` +
        category,
      callback,
    });
  }

  downloadFile(id, userId, callback) {
    downloadFileRequest({
      method: "POST",
      url: `${this.url}download-file/${id}?userId=${userId}`,
      callback,
    });
  }

  addPin(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}add-pin`,
      body: data,
      callback,
    });
  }

  delateCurrentPin(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}delate-pin`,
      body: data,
      callback,
    });
  }

  getCurrentPin(userId, callback) {
    createRequest({
      method: "GET",
      url: `${this.url}get-pin/?userId=${userId}`,
      callback,
    });
  }

  addCurrentFavourites(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}add-favourites`,
      body: data,
      callback,
    });
  }

  delateCurrentFavourites(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}delate-favourites`,
      body: data,
      callback,
    });
  }

  getCatagories(catagory, userId, callback) {
    createRequest({
      method: "GET",
      url: `${this.url}get-catagories/?categoryCurrent=${catagory}&userId=${userId}`,
      callback,
    });
  }

  create(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}register`,
      body: data,
      callback,
    });
  }

  authorization(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}authorization`,
      body: data,
      callback,
    });
  }

  exit(data, callback) {
    createRequest({
      method: "POST",
      url: `${this.url}exit`,
      body: data,
      callback,
    });
  }

  sendFile(data, callback) {
    createRequestSendFiles({
      method: "POST",
      url: `${this.url}send-file`,
      body: data,
      callback,
    });
  }
}
