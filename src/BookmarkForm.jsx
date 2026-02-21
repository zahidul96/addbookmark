import React,{useState} from "react";
import "./BookmarkForm.css";
const BookMarkForm = (props) => {
  const [enteredTitle, setTitle] = useState(props.editData?props.editData.title:"")
  const [enteredUrl, setUrl] = useState(props.editData?props.editData.url:"")
  const formSubmitHandler=(event)=>{
        event.preventDefault();
        const bookmarks = {
          title:enteredTitle,
          url:enteredUrl,
          id:props.editData?props.editData.id:Math.random().toString()
        };
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
