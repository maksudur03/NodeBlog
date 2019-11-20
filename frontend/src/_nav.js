export default {
  items: [
  
    {
      title: true,
      name: 'Browse',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Login',
      url: '/login',
      icon: 'icon-drop',
    },
    {
      name: 'Create Account',
      url: '/register',
      icon: 'icon-puzzle',
    },
    {
      name: 'Create Post',
      url: '/blog_post',
      icon: 'icon-pencil',
    },
    {
      name: 'My Post',
      url: '/my_post',
      icon: 'icon-bell',
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'icon-user',
    },
  ],
};
