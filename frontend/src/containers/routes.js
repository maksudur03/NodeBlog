import React from 'react';

 const Home = React.lazy(() => import('./views/pages/Home'));
 const Blog_Post = React.lazy(() => import('./views/pages/Blog_Post'));
 const Details_Post = React.lazy(() => import('./views/pages/Details_Post'));

const routes = [
  { path: '/', exact: true, name: '' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/blog_post', name: 'Post', component: Blog_Post },
  { path: '/details_post', name: 'Details_Post', component: Details_Post },
 
];

export default routes;
