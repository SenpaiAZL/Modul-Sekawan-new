/* eslint-disable no-unused-vars */
// App.js

// import React, { useState, useEffect } from "react";
// import axios from 'axios'; // Import Axios library

// const App = () => {
//   // State untuk menyimpan data dari API
//   const [data, setData] = useState([]);

//   // useEffect akan dipanggil saat komponen dimuat ke dalam DOM
//   useEffect(() => {
//     // Fungsi untuk mengambil data dari API
//     const fetchData = async () => {
//       try {
//         // Mengambil data dari API menggunakan Axios
//         const response = await axios.get('https://restaurant-api.dicoding.dev/list/');
//         // Mengambil data dari response
//         const jsonData = response.data;
//         // Menyimpan data ke dalam state
//         setData(jsonData);
//       } catch (error) {
//       // menanggani error yang terjadi
//         console.error('Error fetching data:', error);
//       } 
//     };

//     // Memanggil fungsi fetchData
//     fetchData();
//   }, []); // useEffect hanya akan dipanggil sekali setelah mounting

//   return (
//     <div>
//       <h1>Data from API</h1>
//         <ul>
//           {/* Menggunakan map untuk merender data ke dalam elemen */}
//           {data.map((item) => (
//             <div key={item.id}>
//               <li>{item.name}</li>
//               <p>{item.address}</p>
//             </div>
//           ))}
//         </ul>
//     </div>
//   );
// };

// export default App;

//Previous Project
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/card';
import { useEffect } from 'react';
import CardJpeg from './components/CardJpeg';
import axios from 'axios';


function App() {
  const [data, setData] = useState("Can you see me?");
  const [resto, setResto] = useState();

  // async function ambilData() {
  //   const response = await fetch("https://dummyjson.com/product");
  //   const data = await response.json();
  //   setResto(data);
  // }

  const ambilDataAxios = async () => {
    const response = await axios.get("https://dummyjson.com/product");
    const data = await response.data;
    setResto(data);
  }
  useEffect(() => {
    //ambilData()
    ambilDataAxios();
  }, [])


  return (
    <>
      <ul>{resto?.products?.map((dataResto) => (
        <>
          <CardJpeg img={dataResto.thumbnail} heading={dataResto.title} text={dataResto.description} />

        </>
      ))}
      </ul>
      {/* <Card img={"KoishiKomeijiDesu.jpg"} heading={"Koishi Komeiji in the forest"} text={"She is wondering the forest"}/>
	<Card img={"KoishiForest.jpg"} heading={"Koishi Komeiji found A Ruin"} text={"She explored the ruin "}/>
	<Card img={"KoishiAndSatori.jpg"} heading={"Koishi Komeiji went home"} text={"She told everything she found in the forest to her sister "}/>
	<Button text={'Next'}/>

  <div className="">
    <h1>{data}</h1>
    <button onClick={() =>setData("I am glad")}>Yes</button>
    <button onClick={() =>setData("Liar")}>No</button>
    <button onClick={() =>setData("oh...you don't huh")}>...</button>
  </div> */}
    </>
  );
}

export default App;