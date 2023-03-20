import React from "react";
import { useState } from "react";
import { ReactComponent as Done } from "../../assets/icons/Done.svg";
import Avatar from "../../assets/images/Avatar.png";
import "./styles.css";
import Todo from "../Todo";
export default function TodoCard() {
  const [todos, setTodos] = useState(["first", "second"]);
  return (
    <div className="todocard">
      <header className="todocard__header">
        <img
          src={Avatar}
          alt="user display picture"
          className="todocard__user-dp"
        />
        <span className="todocard__user-name title">Shoyo</span>
      </header>
      <div className="todocard__add-item">
        <input type="text" id="todocard__input" />
        <label htmlFor="todocard__input">
          <Done />
        </label>
      </div>
      <ul className="todocard__list" role="list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
