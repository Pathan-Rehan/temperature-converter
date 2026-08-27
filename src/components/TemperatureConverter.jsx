import { useState } from 'react';
import { convertTemperature } from '../services/api.js'

export default function TemperatureConverter() {

     const [temperature, setTemperature] = useState('');
     const [fromUnit, setFromUnit] = useState('C');
     const [toUnit, setToUnit] = useState('F');
     const [loading, setLoading] = useState(false);
     const [result, setResult] = useState('');
     const [error, setError] = useState('');


     const handleConvert = async () => {
          setResult('');
          setError('');
          if (temperature === '') {
               setError('Please enter a temperature');
               return;
          }

          if (isNaN(temperature)) {
               setError('Please enter a valid temperature');
               return;
          }

          setLoading(true);

          try {
               const data = await convertTemperature(temperature, fromUnit, toUnit);

               setResult(`${data.result} °${data.unit}`);
          } catch (error) {
               setError(error.message || 'Unable to connect to the backend');
          } finally {
               setLoading(false);
          }
     };

     return <div className="converter">
          <h1 >Temperature Converter</h1>

          <input
               type="number"
               placeholder="Enter temperature"
               value={temperature}
               onChange={(e) => setTemperature(e.target.value)}
          />

          <select
               value={fromUnit}
               onChange={(e) => setFromUnit(e.target.value)} >
               <option value="C">Celsius</option>
               <option value="F">Fahrenheit</option>
               <option value="K">Kelvin</option>
          </select>

          <select>
               value = {toUnit}
               onChange={(e) => setToUnit(e.target.value)}
               <option value="C">Celsius</option>
               <option value="F">Fahrenheit</option>
               <option value="K">Kelvin</option>
          </select>

          <button onClick={handleConvert}

          >{loading ? 'Converting' : 'Convert'}</button>

          <div className="result">
               <p>{result || 'Result will appear here'}</p>          </div>

          <div className="error">
               <p>{error || 'Error will appear here'}</p>
          </div>
     </div>;

}