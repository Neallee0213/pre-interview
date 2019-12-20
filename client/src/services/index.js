import axios from 'axios';

export const baseURL = ' https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getArticle = async (storyId) => {
    const result = await axios.get(`${storyURL + storyId}.json`).then(({ data }) => data);
    return result;

}

export const getStoryIDs = async () => {
    const IDs = await axios.get(newStoriesURL).then(({ data }) => data);
    return IDs;
}


export const getImages = async ({ Url }) => {

    const res = await axios.get(`http://localhost:4300/?URL=${Url}`).then(({ data }) => data);
    return res
}
