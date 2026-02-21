import React from "react";
import "./BookmarkItem.css";
const BookmarkItem = (props) => {
  return (
    <div className="bookmark-parent">
      {props.data.map((bookmark) => (
        <li className="li-child" key={bookmark.id}>
          {bookmark.title}
          <a href={bookmark.url} target="blank">
            Visit
          </a>
          <button
            className="button-style"
            onClick={() => props.onDelete(bookmark.id)}
          >
            Delete
          </button>
          <button
            type="reset"
            onClick={() => props.onEdit(bookmark.id)}
            className="button-style"
          >
            Edit
          </button>
        </li>
      ))}
    </div>
  );
};
export default BookmarkItem;
