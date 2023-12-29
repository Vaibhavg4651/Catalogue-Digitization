import './App.css';
import Showpage from './shared/components/Showpage';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
        <Showpage/>
    </BrowserRouter>
    </>
  );
}

export default App;



/*import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AppContext } from './context-api/context-api';
import Home from "./pages/Home";
import { useState } from 'react';
const App = () => {
    const [form, setForm] = useState({
        image: '',
        skuId: '',
        productName: '',
        description: '',
        price: '',
        availInventory: '',
        category: '',
        color: '',
        size: '',
        brand: '',
        contact: '',
        social: '',
      });
    
      const [jsonResult, setJsonResult] = useState(null);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const handleImageInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Data = reader.result.split(',')[1];
            setForm({
              ...form,
              image: base64Data,
            });
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (form.image) {
          setJsonResult(JSON.stringify(form, null, 2));
        }
      };
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
      return null
  }
    
  
 
  return (
      <AppContext>
         <div>
        <h2>Product Form</h2>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="imageInput">Product Image:</label>
            <input type="file" accept="image/*" onChange={handleImageInputChange} id="imageInput" />
          </div>
  
          <div>
            <label>Sku ID:</label>
            <input type="text" name="skuId" value={form.skuId} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Product Name:</label>
            <input type="text" name="productName" value={form.productName} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Description:</label>
            <textarea name="description" value={form.description} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Price:</label>
            <input type="text" name="price" value={form.price} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Availability Inventory:</label>
            <input type="text" name="availInventory" value={form.availInventory} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Category:</label>
            <input type="text" name="category" value={form.category} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Color:</label>
            <input type="text" name="color" value={form.color} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Size:</label>
            <input type="text" name="size" value={form.size} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Brand:</label>
            <input type="text" name="brand" value={form.brand} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Contact:</label>
            <input type="text" name="contact" value={form.contact} onChange={handleInputChange} />
          </div>
  
          <div>
            <label>Social:</label>
            <input type="text" name="social" value={form.social} onChange={handleInputChange} />
          </div>
  
          <button type="submit">Submit</button>
        </form>
  
        {jsonResult && (
          <div>
            <h3>JSON Result:</h3>
            <pre>{jsonResult}</pre>
          </div>
        )}
      </div>
      <br/>
      <br/>
        {/* <div>
            <input type="text" id="101" />
            <input type="text" id="101" />
            <input type="text" id="101" />
            <input type="text" id="101" />
        </div> 
        {/* Maine img to text can vala comment kardiya haid ekhlio kaha add karna hai aur  input boxes transparent hai saare  
        <Home/>
          <div className="container">
              <h2>Speech to Text Converter</h2>
              <br/>
              <p>A React hook that converts speech from the microphone to text and makes it available to your React
                  components.</p>
              <div className="main-content">
                  {transcript}
              </div>
              <div className="btn-style">
                  <button onClick={startListening}>Start Listening</button>
                  <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
              </div>
          </div>
          </AppContext>
  );
};

export default App;
*/