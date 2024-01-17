import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID A3R_fxgoW-c1sOQnNFQKR_N63Q6jJzSenIp8p0MN6Q0',
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages
