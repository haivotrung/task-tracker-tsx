import Task from "./Task";
import { taskArray } from "../App";

const Tasks = ({ tasks, onDelete, onToggle }: { tasks: taskArray, onDelete: Function, onToggle: Function }) => {
    return (
        <>
            {tasks.map((task) =>
            (<Task task={task} key={task.id}
                onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
};

export default Tasks;