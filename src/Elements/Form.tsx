import React, { useRef } from "react";
import {
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addTask } from "../Features/todo/todoSlice";

const Form = () => {
    const input = useRef();
    const dispatch = useDispatch();
    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                const subject = input.current?.value;
                dispatch(addTask(subject));

                input.current.value = "";
                input.current.focus();
            }}
        >
            <FormControl fullWidth>
                <OutlinedInput
                    color="secondary"
                    placeholder="Enter task here ..."
                    fullWidth
                    inputRef={input}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    );
};

export default Form;
