export default {
  build: (path, ...params) => {
    params.reverse();
    return path.replace(/(:\w+)/g, () => params.pop());
  },

  CALENDAR_CONTESTS: '/kalendar',
  CALENDAR_CONTESTS_ID: '/kalendar/id/:id',
  CALENDAR_PRACTICES: '/kalpriprema/',
  CALENDAR_PRACTICES_ID: '/kalpriprema/id/:id',
  CLUBS: '/baza_klubova',
  CLUBS_ID: '/baza_klubova/id/:id',
  MAIL: '/mail',
  POSTS: '/posts',
  POSTS_ID: '/posts/:id',
  WEB_CLIPPINGS: 'https://metricom.hr/api/folders/1fac72f7-103d-11e9-b152-f23c91df28e9/content',
  WEB_CLIPPINGS_ID: 'https://metricom.hr/api/folders/1fac72f7-103d-11e9-b152-f23c91df28e9/content/:id',
  GALLERY: 'https://graph.facebook.com/v3.2/318855654825601/photos',
};
