import Todo from "../Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const deleteHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return id !== todo.id;
      })
    );
  };

  const completeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
