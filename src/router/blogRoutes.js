import BlogPost from '../components/blog/BlogPost.vue';
import CreatePost from '../components/blog/CreatePost.vue';
import FaltuPage from '../components/blog/AllBlogs.vue';

export default[
    {
        path: '/blog/:id',
        name: 'BlogPost',
        component: BlogPost,
        props: true,
      },
    {
        path:'/new',
        name:'CreatePost',
        component:CreatePost,
    },
    {
        path:'/faltu/:id',
        name:'FaltuPage',
        component:FaltuPage,
    }

]