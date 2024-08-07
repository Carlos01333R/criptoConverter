/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import EChartsComponent from "./Chart";
import Spinner from "./spinner";

export default function Respuesta({ selectedCoin, selectedOption }) {
  const [converter, setConverter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedCoin && selectedOption) {
      setLoading(true);
      fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedCoin}&tsyms=${selectedOption}`)
        .then(res => res.json())
        .then(data => {
          const { DISPLAY } = data;
          if (DISPLAY && DISPLAY[selectedCoin] && DISPLAY[selectedCoin][selectedOption]) {
            setConverter(DISPLAY[selectedCoin][selectedOption]);
            setError('');
           
          } else {
            setConverter(null);
            setError('No se encontró ninguna moneda u opción.');
          }
          setLoading(false);
        })
        .catch(() => {
          setError('Error al cargar los datos.');
          setLoading(false);
        });
    }
  }, [selectedCoin, selectedOption]);

  return (
<>


    <div className="flex justify-center items-center w-full">
      {loading && <p className="text-center "><Spinner /></p>}

        {error && <p className="text-center ">{error}</p>}  
      </div>

      
     {!loading && !error && 
     
          <section className="md:relative mt-[10%] right-60 h-auto flex flex-col md:flex-row md:justify-center  items-center w-full md:w-[1000px] md:ml-[45%] p-4 text-black  gap-5 ">
        
        {converter && (
        <>

        <section className="flex ml-auto pl-20 md:pl-0  w-[50%] md:w-[700px] justify-center items-center ">

       <EChartsComponent selectedCoin={selectedCoin} selectedOption={selectedOption} precio={converter.PRICE} maxPrecio={converter.HIGHDAY} minPrecio={converter.LOWDAY} simbolo={converter.TOSYMBOL}  fastUpdate={converter.LASTUPDATE}/>

        </section>

        <section className="flex ml-[50%] md:ml-0 flex-col w-[400px] justify-center items-center ">
        <div className="flex gap-2 justify-center items-center">
        <img 
        alt="icon Criptomonedas"
        src={`https://www.cryptocompare.com${converter.IMAGEURL}`} 
        className="h-auto w-16 flex-shrink-0 rounded-full" />
        <p className="text-2xl">{selectedCoin}</p>
        </div>

        <div className="flex  flex-col m-auto justify-center items-center  w-full p-4 mt-4 rounded-lg">
        <article className="flex flex-col ml-7">
        <p className=" text-2xl text-gray-500">precio: <span className="font-bold text-gray-700">{converter.PRICE}</span></p>
        <p className=" text-lg text-gray-500">maximo de hoy: <span className="font-bold text-gray-700">{converter.HIGHDAY}</span></p>
        <p className=" text-lg text-gray-500">minimo de hoy: <span className="font-bold text-gray-700">{converter.LOWDAY}</span></p>
        <p className=" text-lg text-gray-500">Variación ultimas 24H: <span className="font-bold text-gray-700">{converter.CHANGEPCT24HOUR}</span></p>
        <p className=" text-lg text-gray-500">Ultima actualización: <span className="font-bold text-gray-700">{converter.LASTUPDATE}</span></p>
        </article>
        </div>
        </section>
        
        </>
      )}

   
    </section>

}
 </>
    )}
