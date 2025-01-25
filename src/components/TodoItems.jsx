import "./css/TodoItems.css";
import tick from "./assets/tick.png";
import not_tick from "./assets/not_tick.png";
import cross from "./assets/cross.png";
import PropTypes from 'prop-types';

const TodoItems = ({no,display,text,setTodos}) => {

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display==="") {
          data[i].display="line-through";
        }else{
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);
  };


  const deleteTodo=(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no);
    setTodos(data);
  }

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" className="todoitems-icon" />
        ) : (
          <img src={tick} alt="" className="todoitems-icon"/>
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} alt=""  onClick={()=>{deleteTodo(no)}}/>
    </div>
  );
};

TodoItems.propTypes = {
  no: PropTypes.number.isRequired,
  display: PropTypes.string,
  text: PropTypes.string.isRequired,
  setTodos: PropTypes.func,
};

export default TodoItems;
