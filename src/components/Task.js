import { FaTimes } from 'react-icons/fa'
import Moment from 'moment';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
        >   
            <h3>{task.text}
                <FaTimes style={{color: 'red'}}
                    onClick={() => onDelete(task.id)} /></h3>
            <p>{Moment(task.day).calendar()}</p>
        </div>
    )
}

export default Task