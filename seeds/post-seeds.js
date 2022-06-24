const { Post } = require('../models');

const postdata = [
    {
        title: '',
        post_url: '',
        user_id: 1
    },
    {
        title: '',
        post_url: '',
        user_id: 1  
    },
    {
        title: '',
        post_url: '',
        user_id: 1  
    },
    {
        title: '',
        post_url: '',
        user_id: 1  
    },
    {
        title: '',
        post_url: '',
        user_id: 1  
    },
    {
        title: '',
        post_url: '',
        user_id: 1  
    },
    {
        title: '',
        post_url: '',
        user_id: 1  
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
