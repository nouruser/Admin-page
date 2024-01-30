// AddTask.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '@store/actions/todo.actions';

interface Todo {
    id?: string;
    text?: string;
    completed?: boolean;
}

const AddTask: React.FC = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState<Todo >({id:'',text:'',completed:false});

    const handleAddTask = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(addTodoAction(task));
        setTask({id:'',text:'',completed:false});
    };

    return (
        <form onSubmit={handleAddTask} className='max-w-screen-sm w-full flex justify-between gap-4'>
            <input required placeholder='text' className='border border-black w-1/3' type="text" value={task?.text} onChange={(e) => setTask({...task,text:e.target.value})} />
            <input required placeholder='id' type='text' className='border border-black w-1/3'  value={task?.id} onChange={(e) => setTask({...task,id:e.target.value})} />
            <button  className="bg-black text-white  w-1/4 p-2" type='submit'>Add Task</button>
        </form>
    );
};

export default AddTask;
