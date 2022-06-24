const { Vote } = require('../models');

const votedata = [
    {
        user_id: 2,
        post_id: 8
    },
    {
        user_id: 5,
        post_id: 2
    },
    {
        user_id: 3,
        post_id: 6
    },
    {
        user_id: 6,
        post_id: 3
    },
    {
        user_id: 4,
        post_id: 9
    },
    {
        user_id: 7,
        post_id: 4
    },
    {
        user_id: 1,
        post_id: 12
    }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;