export default function TemperatureConverter() {
     return <div className="converter">
          <h1 >Temperature Converter</h1>

          <input
               type="number"
               placeholder="Enter temperature"
          />

          <select>
               <option value="C">Celsius</option>
               <option value="F">Fahrenheit</option>
               <option value="K">Kelvin</option>
          </select>

          <select>
               <option value="C">Celsius</option>
               <option value="F">Fahrenheit</option>
               <option value="K">Kelvin</option>
          </select>

          <button>Convert</button>

          <div className="result">
               <p>Result will appear here</p>
          </div>

          <div className="error">
               <p>Error will appear here</p>
          </div>
     </div>;

}