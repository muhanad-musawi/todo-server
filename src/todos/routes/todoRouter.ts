import { Router } from 'express';
import {
    saveTodos,
    getAllTodos,
    getCheckTodos,
    getFavouriteTodos,
} from '../controller/todosController';

const router = Router();

router.route('/get-todos').get(getAllTodos);
// localhost:8080/get-todos/ -> Endpunkt

router.route('/save-todo').post(saveTodos);
// localhost:8080/save-todo/ -> Endpunkt

router.route('/filter-check-todos').get(getCheckTodos);
// localhost:8080/filter-check-todos/ -> Endpunkt

router.route('/filter-favourite-todos').get(getFavouriteTodos);
// localhost:8080/filter-favourite-todos/ -> Endpunkt

export default router;