import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Post from '../models/Posts.js';
import db from './db.js'; 

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/posts', async (req, res) => {
  try {
    const data = req.body;
    const newPost = new Post(data);
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
