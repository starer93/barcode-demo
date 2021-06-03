import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [data, setData] = React.useState("Not Found");

  return (
    <div className="App">
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text);
          }
        }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;
