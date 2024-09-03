import { useState } from "react"

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const getInputingData = () => {
    const disObj = {
      text,
      color,
      bgColor
    };
    setData([...data, disObj]);
    setColor("");
    setBgColor("");
    setText("");
  };


  return (
    <div >
      <h1 className="m-11 flex justify-center font-bold text-3xl " >  Status Cards By Raffay</h1>
      <div className="flex justify-around flex-wrap">
      <label htmlFor="text" className="font-semibold" >
        Text : 
        <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} className="border-2 border-black" />
      </label>
      <label htmlFor="color" className="font-semibold" >
        Select Color : 
        <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <label htmlFor="bgColor" className="font-semibold">
        Select Background Color :
        <input type="color" id="bgColor" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </label>
      <button onClick={getInputingData} className="bg-black text-white rounded-md p-2">Add Card</button>
      </div>
      <div className="flex justify-start  flex-wrap m-2 text-center  " >
        {data.map((item, index) => (
          <div key={index} style={{ backgroundColor: item.bgColor, color: item.color  }} className="w-60 h-60 align-middle text-center m-3 flex justify-center items-center font-semibold rounded-md  " >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

 export default App;











