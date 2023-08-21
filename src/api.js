import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID OnhFQrkry4Je0yQTaAd58qiOXT1ozr2kkRiCpF6kabE',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;