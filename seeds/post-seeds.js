const { Post } = require('../models');

const postdata = [
    {
        title: 'Chicken Parmesan',
        post_text: 'The chicken parm is soo good and easy to make definitely try it out.',
        user_id: 1
    },
    {
        title: '',
        post_text: '',
        user_id: 1  
    },
    {
        title: '',
        post_text: '',
        user_id: 1  
    },
    {
        title: '',
        post_text: '',
        user_id: 1  
    },
    {
        title: '',
        post_text: '',
        user_id: 1  
    },
    {
        title: '',
        post_text: '',
        user_id: 1  
    },
    {
        title: '',
        post_text: '',
        user_id: 1  
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
