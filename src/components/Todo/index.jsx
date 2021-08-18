const Todo = ({ todo, deleteHandler, completeHandler }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <p>{todo.text}</p>
      </li>
      <button
        className={todo.completed ? "cancel-btn" : "complete-btn"}
        onClick={() => completeHandler(todo.id)}
      >
        {todo.completed ? (
          <i className="fas fa-arrow-left"></i>
        ) : (
          <i className="fas fa-check"></i>
        )}
      </button>
      <button className="trash-btn" onClick={() => deleteHandler(todo.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
