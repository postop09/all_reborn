const mockRequest = async (url: string): Promise<any> => {

  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    const json = await res.json();
    if (res.status === 200 || res.status === 201) {
      return resolve(json);
    } else {
      return reject({
        ...json,
        status: res.status,
        statusText: res.statusText,
      });
    }
  });
};

export default mockRequest;
