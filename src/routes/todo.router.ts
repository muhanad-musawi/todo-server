import { Router } from 'express';
import {
    saveTodo,
    getTodos,
    filterCheckTodos,
    filterFavouriteTodos,
} from '../controller/todos.controller';

const router = Router();

router.route('/get-todos').get(getTodos);
// localhost:4000/get-todos/ -> Endpunkt

router.route('/save-todo').post(saveTodo);
// localhost:4000/save-todo/ -> Endpunkt

router.route('/filter-check-todos').get(filterCheckTodos);
// localhost:4000/filter-check-todos/ -> Endpunkt

router.route('/filter-favourite-todos').get(filterFavouriteTodos);
// localhost:4000/filter-favourite-todos/ -> Endpunkt

export default router;