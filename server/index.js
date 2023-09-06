import app from './app.js';
import { connectDB } from './db.js';
import { PORT } from './config.js';
import User from './models/user.model.js';
import Post from './models/post.model.js';
import {users, posts} from './data/index.js';

connectDB();
app.listen(PORT);
//User.insertMany(users);
//Post.insertMany(posts);
console.log(`Server on port ${PORT}`);