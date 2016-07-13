import axios from 'axios';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_API_KEY = 'AIzaSyDKtIR50utmuZ9h0dw2qL9lFPXRbxiBmfo';

const GIPHY_API_URL = 'http://api.giphy.com/v1/gifs/search';
const GIPHY_API_KEY = 'dc6zaTOxFJmzC';

const search = (source, term) => {
  let params, url;


  if (source === 'youtube') {
    params = { part: 'snippet', key: YOUTUBE_API_KEY, q: term, type: 'video' };
    url = YOUTUBE_API_URL;
  } else {
    params = { api_key: GIPHY_API_KEY, q: term, limit: 5 };
    url = GIPHY_API_URL;
  }

  return new Promise((resolve, reject) => {
    axios.get(url, { params })
      .then(response => {
        let responseJSON;

        if (source !== 'youtube') {
          responseJSON = response.data.data;
        } else {
          responseJSON = response.data.items;
        }

        resolve(responseJSON);
      })
      .catch(error => {
        console.log(`${source} api error: ${error}`);
        reject(error);
      });
  });
};

export default search;
