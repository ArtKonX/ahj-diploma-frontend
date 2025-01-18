const downloadFileRequest = async (options) => {
  const response = await fetch(options.url);

  options.callback(await response.blob());
};

export default downloadFileRequest;
