import {
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from "@mui/material";

import {
    Delete as DeleteIcon,
    CheckBoxOutlineBlank as TodoIcon,
    Check as Mark,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../Features/todo/todoSlice";
import { useAppDispatch } from "../../App/store/hook";

const Item = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <ListItem sx={{ p: 2 }}>
            {/* done or undone */}
            <ListItemIcon>
                <IconButton
                    onClick={() => useAppDispatch(toggleTask(task._id))}
                >
                    {task.done ? <Mark color="success" /> : <TodoIcon />}
                </IconButton>
            </ListItemIcon>

            {/* todo task */}
            <ListItemText primary={task.subject} />

            {/* deleteIcon */}
            <Tooltip title="Delete">
                <ListItemIcon>
                    <IconButton onClick={() => dispatch(deleteTask(task._id))}>
                        <DeleteIcon color="error" />
                    </IconButton>
                </ListItemIcon>
            </Tooltip>
        </ListItem>
    );
};

export default Item;
