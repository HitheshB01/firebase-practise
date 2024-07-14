import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const moviecollectionref = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviecollectionref);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
      console.log(filteredData);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
 
    getMovieList();
  }, []);

  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newMovieDate, setNewMovieDate] = useState(0);
  const [isNewMovieoscar, setIsNewMovieoscar] = useState(false);

  const onSubmitMovie=async()=>{
    const newdata= {
      title:newMovieTitle,
      releaseDate:newMovieDate,
      receivedAnOscar:isNewMovieoscar

    }
    await addDoc(moviecollectionref,newdata)
    getMovieList();
  }


  return (
    <div>
      <input className="p-1 m-2 border-gray-900 border-2" type="text" placeholder="title" onChange={(e)=>setNewMovieTitle(e.target.value)}/> <br />
      <input className="p-1 m-2 border-gray-900 border-2" type="number" placeholder="date" onChange={(e)=>setNewMovieDate(Number(e.target.value))} /><br />
      <input type="checkbox" onChange={(e)=>setIsNewMovieoscar(e.target.checked)} /> <label>received an oscar</label><br />
      <button className="p-1 m-2 border-gray-900 border-2" onClick={onSubmitMovie}>submit</button>
      <div>
        <div className="max-w-sm rounded border-2 border-yellow-900 overflow-hidden shadow-lg bg-white m-4">
          <div className="px-6 py-4">
            {movieList.map((movie) => (<div>
              <div className="font-bold text-xl mb-2">{movie.title}</div>
            <p className="text-gray-700 text-base">Release Date:{movie.releaseDate}</p>
        
            </div>))}
            <div className="font-bold text-xl mb-2">title</div>
            <p className="text-gray-700 text-base">Release Date:2003</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
