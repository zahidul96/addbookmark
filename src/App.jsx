import React, { useState } from "react";
import BookMarkForm from "./BookmarkForm";
import BookmarkItem from "./BookmarkItem";
const App = () => {
  const [newData, setnewData] = useState([]);
  const [editingItem, seteditingItem] = useState(null);
  const collectData = (bookmark) => {
    if (editingItem) {
      setnewData((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? { ...bookmark, id: editingItem.id }
            : item,
        ),
      );

      seteditingItem(null);
    } else {
      setnewData([bookmark, ...newData]);
    }
  };
  const handleDelete = (idToDelete) => {
    const updatedData = newData.filter((item) => item.id !== idToDelete);
    setnewData(updatedData);
  };
  const editHandler = (id) => {
    const editItem = newData.find((item) => item.id === id);
    seteditingItem(editItem);
  };
  return (
    <div>
      <BookMarkForm
        key={editingItem ? editingItem.id : "new"}
        onAddBookmarks={collectData}
        editData={editingItem}
      />
      <BookmarkItem
        data={newData}
        onDelete={handleDelete}
        onEdit={editHandler}
      />
    </div>
  );
};
export default App;
