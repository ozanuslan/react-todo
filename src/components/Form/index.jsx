import { uuid } from "uuidv4";
const Form = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  status,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuid() }]);
    setInputText("");
  };
  const statusHandler = (e) => {
    if (e.target.value !== status) setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={(e) => inputTextHandler(e)}
          type="text"
          className="todo-input"
        />
        <button
          className="todo-button"
          type="submit"
          onClick={(e) => submitTodoHandler(e)}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
        <div className="select">
          <select
            onChange={(e) => statusHandler(e)}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
