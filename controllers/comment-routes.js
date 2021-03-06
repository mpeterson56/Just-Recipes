
const router = require('express').Router();
const { User } = require('../../models');
const passport = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(CommentData => res.json(CommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/',  passport.authenticate('local'), (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(CommentData => res.json(CommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id',  passport.authenticate('local'), (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(CommentData => {
      if (!CommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(CommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;







