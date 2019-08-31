import apisauce from 'apisauce';

const create = (baseURL = 'https://api.chucknorris.io/jokes') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000,
  });

  const fetchRandomJoke = (type) => {
    return new Promise((resolve, reject) => {
      api
        .get(`/${type}`)
        .then(res => (res.ok ? resolve(res) : reject(res)))
        .catch(e => reject(e));
    });
  };

  return {
    fetchData: fetchRandomJoke
  };
};

export default {
  create,
};
