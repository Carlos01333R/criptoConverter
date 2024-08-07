import { useEffect, useState } from 'react'
import FormListbox from './components/form'

function App() {

  const [dataCoin, setDataCoin] = useState([])
 
  const api = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD'

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
       const {Data} = data
       setDataCoin(Data)
       console.log(dataCoin)
      })
      
  }, [api])



  return (
    <>
    <main className='flex flex-col md:flex-row w-[80%] m-auto text-black mt-6  '>

    <section className='flex w-[100%] md:w-[40%]  m-auto'>

    <img 
    className='w-[100%] object-cover'
    src="https://static.vecteezy.com/system/resources/thumbnails/022/603/446/small_2x/cryptocurrency-3d-illustration-png.png" alt="" />
    </section>

    <section className='w-[100%]  md:w-[40%] h-[450px] md:h-[400px] mt-3 mb-3   m-auto flex shadow-xl flex-col  items-center rounded-xl '>

    <div className='flex flex-col items-center justify-center mt-4'>
        <p className='text-4xl text-center  mt-8 mb-2 '>Cotiza criptomonedas al instante</p>
        <hr  className=' border-2 border-indigo-600 w-[50%] mb-16'/>
        </div>
          <FormListbox  dataCoin={dataCoin}/>
    </section>

    
    </main>



    </>
  )
}

export default App
