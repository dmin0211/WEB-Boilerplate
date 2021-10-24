import V1 from '@api/v1';

const API = {
  TYPE: {
    V1_GET_TEST: V1.GET_TEST,
  },

  call: async function (api, data) {
    try {
      const resolve = await api(data);
      return resolve;
    } catch (error) {
      //    error
      console.log(error);
      return error;
    }
  },
};

export default API;
