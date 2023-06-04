import { async } from "regenerator-runtime";

export const store = {
  allnews: {},
  search: {
    queary: "",
    result: [],
    relatedNews: [],
    page: 1,
    resultPerPage: 10,
  },
  source: [],
};

// General News Generator
export const generalNews = async function () {
  try {
    const data = await fetch(
      "https://blog-mock-api.onrender.com/api/v1/news"
    ).then((res) => res.json());

    store.allnews = data.result.map((result) => {
      return {
        title: result.title,
        id: result.id,
        slug: result.slug,
        description: result.short_description,
        content: result.content,
        author: result.author,
        category: result.category,
        date: result.date,
        source: result.type,
        image: result.image_link,
      };
    });
  } catch (err) {
    throw err;
  }
};
// createObject
export const createObject = function (data) {
  store.search.result = data.result.map((res) => {
    return {
      title: res.title,
      id: res.id,
      slug: res.slug,
      description: res.short_description,
      category: res.category,
      date: res.date,
      source: res.type,
      image: res.image_link,
    };
  });
};

// Type News Generator
export const typeNews = async function (source) {
  try {
    if (!source) throw new error();
    store.source = source;
    const data = await fetch(
      `https://blog-mock-api.onrender.com/api/v1/news/type/${source}`
    ).then((res) => res.json());
    createObject(data);
  } catch (error) {
    throw err;
  }
};

// News per Page
export const getNewsPerSourcePage = function (page = store.search.page) {
  store.search.page = page;
  const start = (page - 1) * store.search.resultPerPage; // 0
  const end = page * store.search.resultPerPage; // 10

  return store.search.result.slice(start, end);
};

export const getContentDetails = async function (id) {
  try {
    const data = await fetch(
      `https://blog-mock-api.onrender.com/api/v1/news/${id}`
    ).then((res) => res.json());

    if (!data) return;
    store.search.result = data.result.data;
    //  Related News Data
    store.search.relatedNews = data.result.related_news.map((res) => {
      return {
        title: res.title,
        id: res.id,
        slug: res.slug,
        description: res.short_description,
        category: res.category,
        date: res.date,
        source: res.type,
        image: res.image_link,
        author: res.author,
        content: res.content,
      };
    });
  } catch (err) {
    throw err;
  }
};

// Hompage Latest
export const latestNews = async function (source) {
  try {
    if (!source) throw new error();
    store.source = source;
    const data = await fetch(
      `https://blog-mock-api.onrender.com/api/v1/news/type/${source}`
    ).then((res) => res.json());
    createObject(data);
  } catch (error) {
    throw error;
  }
};
// categoryNews
export const categoryNews = async function (id) {
  try {
    const data = await fetch(
      `https://blog-mock-api.onrender.com/api/v1/news/?category=${id}`
    ).then((res) => res.json());
    createObject(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// categoryNews()

export const getNewsPerHompage = function () {
  const start = 0 * store.search.resultPerPage; // 0
  const end = 1 * 5; //

  return store.search.result.slice(start, end);
};

export const getCarousel = function () {
  const start = 0 * store.search.resultPerPage; // 0
  const end = 1 * 3; //

  return store.allnews.slice(start, end);
};
