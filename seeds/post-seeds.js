const { Post } = require('../models');

const postdata = [
    {
        title: 'Chicken Parmesan',
        post_text: 'The chicken parm is soo good and easy to make definitely try it out.',
        user_id: 1
    },
    {
        title: 'Beef Tacos',
        post_text: 'Very bland and boring. Would not recommend.',
        user_id: 2  
    },
    {
        title: 'Salmon',
        post_text: 'The salmon was good, but make sure you get high quality fish if you want it to really shine.',
        user_id: 3  
    },
    {
        title: 'Spaghetti',
        post_text: 'Its spaghetti. Has all the stuff, but my mom has a better recipe.',
        user_id: 1  
    },
    {
        title: 'Quinoa Salad',
        post_text: 'Gotta love quinoa. The dressing is very light and tasty, and you can kinda add whatever vegetables you like.',
        user_id: 5  
    },
    {
        title: 'Chicken Caesar Salad',
        post_text: 'The Caesar was no good. There was too much lemon in the dressing and it was a little salty.',
        user_id: 4  
    },
    {
        title: 'Pulled Pork',
        post_text: 'Love this recipe. Super easy to make because its essentially just set it and forget it.',
        user_id: 6  
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
