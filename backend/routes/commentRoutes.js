import express from 'express';
import CommentModel from '../models/commentModel.js';

const router = express.Router();

// Get comments for a specific project
router.get('/comment', async (req, res) => {
  try {
    const params = req.query;

    const comments = await CommentModel.find({
      projectId: params.projectId,
    });
    console.log(comments);
    res.json({
      message: 'list of comments',
      data: comments[0] ? comments[0].comment : [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add a new comment
router.post('/comment', async (req, res) => {
  try {
    const { comment, author, projectId } = req.body;
    let mongoComment = null;

    const commentExist = await CommentModel.find({
      projectId,
    });

    console.log(projectId);
    if (commentExist?.length === 0) {
      mongoComment = new CommentModel({
        comment: [{ content: comment, author }],
        projectId,
      });
      mongoComment?.save();
    } else {
      await CommentModel.updateOne(
        {
          projectId,
        },
        {
          $push: {
            comment: {
              content: comment,
              author,
            },
          },
        }
      );
    }

    res.status(201).json({
      message: 'comment created',
      data: {
        comment: [{ content: comment }],
        author,
        projectId,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
