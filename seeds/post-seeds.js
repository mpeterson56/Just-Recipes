const { Post } = require('../models');

const postdata = [
    {
        title: 'Chicken Parmesan',
      
        user_id: 1
    },
    {
        title: 'Beef Tacos',
       
        user_id: 2  
    },
    {
        title: 'Salmon',
        
        user_id: 3  
    },
    {
        title: 'Spaghetti',
       
        user_id: 1  
    },
    {
        title: 'Quinoa Salad',
        
        user_id: 5  
    },
    {
        title: 'Chicken Caesar Salad',
        
        user_id: 4  
    },
    {
        title: 'Pulled Pork',
       
        user_id: 6  
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
