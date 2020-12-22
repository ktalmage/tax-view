import './App.css';
import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader'

function App() {
  return (
    <div style={{overflow:'scroll',height:600}}>
            <PDFReader page={3} url="https://s23.q4cdn.com/714267708/files/doc_downloads/PTP_307111_SAMPLEPARTNERA_K1_2018_FED.PDF" />
           </div>
  );
}

export default App;
