const createRequest = async (options) => {
  const reqSettings = {
    headers: { "Content-Type": "application/json" },
    method: options.method,
    body: JSON.stringify(options.body),
  };

  const response = await fetch(options.url, reqSettings);

  options.callback(await response.json());
};

export default createRequest;
