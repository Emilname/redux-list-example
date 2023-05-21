import { INCREMENT, DECREMENT, WARN } from "./types";
import { actionCreator } from "../../../../actions";

export const increment = actionCreator(INCREMENT);

export const decrement = actionCreator(DECREMENT);

export const warn = actionCreator(WARN);
