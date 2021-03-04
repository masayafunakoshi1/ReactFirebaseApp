import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"

export interface AppProps{
  selectedImg?: string | null | undefined;
  setSelectedImg?: React.Dispatch <React.SetStateAction<any>>;
}

export interface FilesProps{ 
    file?: any;
    name?: string;
    setFile?: React.Dispatch <React.SetStateAction<any | any[]>>;
}


const App: React.FC <AppProps> = () => {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg = {setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App; 
