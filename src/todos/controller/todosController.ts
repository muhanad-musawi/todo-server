import { Request, Response } from 'express';
import {getTodos, saveTodo, filterCheckTodos, filterFavouriteTodos } from '../todos';

export function saveTodos(req: Request, res: Response) { 
    const {title} = req.body; 
    saveTodo(title); 
    res.status(200).send("Todo saved");
}

export function getAllTodos(req: Request, res: Response) { 
    const todos = getTodos();
    res.status(200).send(todos);
}

export function getCheckTodos(req: Request, res: Response) { 
    const todos = getTodos();
    const checkTodos = filterCheckTodos(todos);
    res.status(200).send(checkTodos);
}

export function getFavouriteTodos(req: Request, res: Response) {
    const todos = getTodos();
    const favouriteTodos = filterFavouriteTodos(todos);
    res.status(200).send(favouriteTodos);
}