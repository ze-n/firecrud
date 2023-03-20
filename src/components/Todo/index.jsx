import React from "react";
import { ReactComponent as Delete } from "../../assets/icons/Delete.svg";

export default function Todo({ todo }) {
  return (
    <li className="todocard__list-items">
      <label htmlFor="item1">{todo}</label>
      <span>
        <input type="checkbox" name="item1" id="item1" />
        <Delete />
      </span>
    </li>
  );
}
