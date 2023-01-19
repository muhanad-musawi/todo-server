import { Router } from 'express';
import {
    saveTodos,
    getAllTodos,
    getCheckTodos,
    getFavouriteTodos,
} from '../controller/todosController';

const router = Router();

router.route('/get-todos').get(getAllTodos);
// localhost:4000/get-todos/ -> Endpunkt

router.route('/save-todo').post(saveTodos);
// localhost:4000/save-todo/ -> Endpunkt

router.route('/filter-check-todos').get(getCheckTodos);
// localhost:4000/filter-check-todos/ -> Endpunkt

router.route('/filter-favourite-todos').get(getFavouriteTodos);
// localhost:4000/filter-favourite-todos/ -> Endpunkt

export default router;