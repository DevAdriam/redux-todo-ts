import { PaletteMode, PopoverVirtualElement } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type todo = {
    _id: number;
    subject: string;
    done: boolean;
};

type InitialState = {
    tasks: todo[];
    showDrawer: boolean;
    theme: PaletteMode | undefined;
};
const initialState: InitialState = {
    tasks: [
        {
            _id: 1,
            subject: "Milk",
            done: true,
        },
        {
            _id: 2,
            subject: "Butter",
            done: true,
        },
        {
            _id: 3,
            subject: "Pudding",
            done: false,
        },
        {
            _id: 4,
            subject: "Cheese",
            done: false,
        },
    ],
    showDrawer: false,
    theme: "dark",
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        clear: (state, action: PayloadAction<undefined>) => {
            state.tasks = [];
        },
        addTask: (state, action: PayloadAction<string>) => {
            const _id = state.tasks[state.tasks.length - 1]._id + 1;
            if (action.payload === "") {
                return;
            }
            const newTodo = {
                _id,
                subject: action.payload,
                done: false,
            };
            state.tasks = [...state.tasks, newTodo];
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(
                (task) => task._id !== action.payload
            );
        },
        toggleTask: (state, action: PayloadAction<boolean | number>) => {
            const id = action.payload;
            state.tasks = state.tasks.map((todo) => {
                if (todo._id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
        },
        toggleDrawer: (state, action: PayloadAction<undefined>) => {
            // if (
            //     event.type === "keydown" &&
            //     (event.key === "Tab" || event.key === "Shift")
            // ) {
            //     return; // return undefined
            // }
            state.showDrawer = !state.showDrawer;
        },
        changeTheme: (
            state,
            action: PayloadAction<PaletteMode | undefined>
        ) => {
            state.theme = action.payload;
        },
    },
});

export const {
    clear,
    addTask,
    deleteTask,
    toggleTask,
    toggleDrawer,
    changeTheme,
} = todoSlice.actions;
export default todoSlice.reducer;
