// TaskList.tsx
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoAction, toggleTodoAction } from '@store/actions/todo.actions';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


const TaskList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks: Todo[] = useSelector((state:any) => state.tasks);
  const dispatch = useDispatch();
  const markAsCompleted = (id: number) => {
    dispatch(toggleTodoAction(id));
  };
  const deleteTask = (id: number) => {
    dispatch(removeTodoAction(id));
  }

  return (
    <>
      {tasks.map((task: Todo) => (
        <div className='flex gap-4 items-center max-w-screen-sm w-full justify-between px-4 py-2 bg-gray-300' key={task.id}>
          <p  className='w-1/3 bg-white p-2' >{task.text}</p>
          <p  className='w-1/3 bg-white p-2'>{task.id}</p>
          <p className='w-1/3 bg-white p-2' >{task.completed ? 'Completed' : 'Not Completed'}</p>
          <button onClick={()=>markAsCompleted(task.id)} className="bg-black text-white p-2" >toggle</button>
          <button onClick={()=>deleteTask(task.id)} className="bg-black text-white p-2" >delete</button>
        </div>
      ))}
    </>
  );
};

export default TaskList;

