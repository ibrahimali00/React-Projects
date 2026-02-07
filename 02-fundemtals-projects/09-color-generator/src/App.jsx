import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#5125f1').all());
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all();
      setColors(newColor);
      toast.success(`color generated successfully`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
