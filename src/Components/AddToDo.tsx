import { AddTodoProps } from "../Types";

export const AddToDo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button
      type="submit"
      aria-label="Add todo"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <h4>ADD</h4>
    </button>
  </form>
);
