const createRequestSendFiles = async (options) => {
  const reqSettings = {
    method: options.method,
    body: options.body,
  };

  const response = await fetch(options.url, reqSettings);

  options.callback(await response.json());
};

export default createRequestSendFiles;
