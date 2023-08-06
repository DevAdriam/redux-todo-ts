import Item from "./item";
import { List } from "@mui/material";
import { useAppSelector } from "../../App/store/hook";
const Items = () => {
    const tasks = useAppSelector((state) => state.todo.tasks);

    return (
        <>
            <List sx={{ mt: 3 }}>
                {tasks
                    .filter((task) => !task.done)
                    .map((task) => {
                        return <Item key={task._id} task={task} />;
                    })}

                {tasks
                    .filter((task) => task.done)
                    .map((task) => {
                        return <Item key={task._id} task={task} />;
                    })}
            </List>
        </>
    );
};

export default Items;
