import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!newItem) {
      toast.error('please provide a value');
      return;
    }
    addItem(newItem);
    setNewItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>

      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
