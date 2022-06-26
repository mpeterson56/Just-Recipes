const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'The chicken dish is delicious!',
        user_id: 1,
        post_id: 7
    },
    {
        comment_text: 'The beef dish is weird!',
        user_id: 2,
        post_id: 2 
    },
    {
        comment_text: 'The fish dish is yucky!',
        user_id: 3,
        post_id: 6
    },
    {
        comment_text: 'The pork dish is outstanding!',
        user_id: 4,
        post_id: 3 
    },
    {
        comment_text: 'Try adding lemon to the fish dish.',
        user_id: 5,
        post_id: 6 
    },
    {
        comment_text: 'Try cooking the chicken on a lower heat.',
        user_id: 6,
        post_id: 4 
    },
    {
        comment_text: 'I added a little extra salt to the beef. Exactly what it needed.',
        user_id: 4,
        post_id: 3 
    }
]


const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;