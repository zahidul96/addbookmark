import React,{useState} from "react";
import "./BookmarkForm.css";
const BookMarkForm = (props) => {
  const [enteredTitle, setTitle] = useState("")
  const [enteredUrl, setUrl] = useState("")
  const formSubmitHandler=(event)=>{
        event.preventDefault();
        const bookmarks = {
          title:enteredTitle,
          url:enteredUrl,
          id:Math.random().toString()
        };
        console.log(bookmarks)
        props.onAddBookmarks(bookmarks)
        setTitle("")
        setUrl("")
  }
  const titleChangeHandler=(event)=>{
    setTitle(event.target.value)
  }
  const urlChangeHandler=(event)=>{
    setUrl(event.target.value)
  }
  return (
    <div className="container-item">
        <form className="form-container" onSubmit={formSubmitHandler}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={enteredTitle}onChange={titleChangeHandler}/>
          <label htmlFor="url">URL:</label>
          <input type="text" id="url" value={enteredUrl} onChange={urlChangeHandler} />
          <button type="submit">Add Bookmark</button>
        </form>
    </div>
  );
};
export default BookMarkForm;
