import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Content = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "Javascript", checked: true },
    { id: 3, label: "React JS", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentElementId, setCurrentElementId] = useState(null);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItems);
  };

  let handleUpdate = (id) => {
    let listItem = items.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setNewItem(listItem.label);
    setIsEditing(true);
    setCurrentElementId(id);
  };

  let handleDelete = (id) => {
    let newLists = items.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setItems(newLists);
  };

  let handleAddorSaveItem = () => {
    if (isEditing) {
      let newListsItem = items.map((item) => {
        if (item.id === currentElementId) {
          return { ...item, label: newItem };
        } else {
          return item;
        }
      });
      setItems(newListsItem);
      setCurrentElementId(null);
      setIsEditing(false);
      setNewItem("");
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };

  return (
    <section>
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddorSaveItem}>
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} style={{ fontSize: "30px" }}>
              <input
                onChange={() => handleChecked(item.id)}
                type="checkbox"
                checked={item.checked}
              />
              <label>{item.label}</label>
              <FaEdit
                role="button"
                tabIndex={0}
                onClick={() => handleUpdate(item.id)}
              />
              <FaTrashCan
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Content;
