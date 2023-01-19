import mongoose from 'mongoose';

const TodosSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Boolean, required: true },
  favouriteStatus: { type: Boolean, required: true },
});

const Todos = mongoose.model('Todos', TodosSchema, 'todos');

export default Todos;
