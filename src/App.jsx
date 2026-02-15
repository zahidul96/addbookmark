import React,{useState} from "react"
import BookMarkForm from "./BookmarkForm"
import BookmarkItem from "./BookmarkItem"
const App=()=>{
  const [newData, setnewData] = useState([])
  const collectData=(bookmark)=>{
         setnewData([bookmark,...newData])
  }
  const handleDelete = (idToDelete) => {
  const updatedData = newData.filter((item) => item.id !== idToDelete);
  setnewData(updatedData);
};
console.log(newData)
    return(
      <div>
        <BookMarkForm onAddBookmarks={collectData}/> 
        <BookmarkItem data={newData} onDelete={handleDelete}/>
      </div>
    )
}
export default App