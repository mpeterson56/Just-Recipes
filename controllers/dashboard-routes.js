const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Ingredients, Steps } = require('../models');
const passport = require('../utils/auth');

// get all posts for dashboard
router.get('/', (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'post_text',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
       },
        {
          model: User,
          attributes: ['username']
        },
      
        {
          model: Ingredients,
          attributes: ['id','ingredient', 'measurement', 'post_id']
          
                  },
                  {
                    model: Steps,
                    attributes: ['id','step_text', 'post_id']
                  }
    ]
  })
    .then(PostData => {
      const posts = PostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', passport.authenticate('local'), (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'post_text',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Ingredients,
        attributes: ['id','ingredient', 'measurement', 'post_id']
        
                },
                {
                  model: Steps,
                  attributes: ['id','step_text', 'post_id']
                }
    ]
  })
    .then(PostData => {
      if (PostData) {
        const post = PostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
