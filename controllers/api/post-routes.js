const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User,Comment, Vote, Ingredients, Steps  } = require('../../models');
const passport = require('../../utils/auth');
// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
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
            attributes: ['id','username']
          }
        },
        {
          model: User,
          attributes: ['id','username']
        },
        {
model: Ingredients,
attributes: ['id','ingredient', 'measurement']

        },
        {
          model: Steps,
          attributes: ['id','step_text']
        }
      ]
    })
      .then(PostData => res.json(PostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
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
            attributes: ['id','username']
          }
        },
        {
          model: User,
          attributes: ['id','username']
        },
        {
          model: Ingredients,
          attributes: ['id','ingredient', 'measurement']
          
                  },
                  {
                    model: Steps,
                    attributes: ['id','step_text', ]
                  }
      ]
    })
      .then(PostData => {
        if (!PostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(PostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  router.post('/', (req, res) => {
  
    Post.create({
      title: req.body.title,
  user_id: req.session.user_id,

    })
      .then(postData => res.json(postData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/upvote', passport.authenticate('local'), (req, res) => {
  
    Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/:id', passport.authenticate('local'), (req, res) => {
    Post.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(PostData => {
        if (!PostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(PostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  router.delete('/:id', passport.authenticate('local'), (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(PostData => {
        if (!PostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(PostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;

