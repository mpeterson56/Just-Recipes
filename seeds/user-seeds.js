const connection = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'alexios',
        email: 'alexios@gmail.com',
        password: 'password123'
    },
    {
        username: 'gregarious',
        email: 'greg.williams@gmail.com',
        password: 'password123'
    },
    {
        username: 'billy468',
        email: 'billy468@gmail.com',
        password: 'password123'
    },
    {
        username: 'sally22',
        email: 'sallytomas@hotmail.com',
        password: 'password123'
    },
    {
        username: 'jessiejess',
        email: 'jessicaj@yahoo.com',
        password: 'password123'
    },
    {
        username: 'robertoni',
        email: 'robstevens@hotmail.com',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
