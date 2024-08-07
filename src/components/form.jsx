/* eslint-disable react/prop-types */
'use client'


import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Toaster, toast } from 'sonner'
import Respuesta from './Respuesta'

// ...
// eslint-disable-next-line react/prop-types
export default function FormListbox({ dataCoin }) {
  const [selectedCoin, setSelectedCoin] = useState(dataCoin[0] || null)
  const [selectedOption, setSelectedOption] = useState(null)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(selectedCoin == null || selectedOption == null){
      toast('Seleccione una moneda y una opción')
    }
    if (selectedCoin && selectedOption) {
      alert(`Selected coin: ${selectedCoin.CoinInfo.Name}, Selected option: ${selectedOption.id}`)
      
    }
  }

  const options = [

    { id: "USD", nombre: "Dolar Estados Unidos", url: "https://static.vecteezy.com/system/resources/previews/006/059/910/original/dollar-icon-american-currency-symbol-illustration-usd-coin-free-vector.jpg" },
    { id: "EUR", nombre: "Euro", url: "https://cdn.icon-icons.com/icons2/2069/PNG/512/euro_coin_finance_icon_125512.png" },
    { id: "GBP", nombre: "Libra Esterlina", url: "https://previews.123rf.com/images/alzam/alzam1401/alzam140100093/25202053-icono-de-la-moneda-de-oro-con-el-s%C3%ADmbolo-de-la-libra-esterlina.jpg" },
    { id: "MXN", nombre: "Peso Mexicano", url: "https://www.shutterstock.com/image-vector/golden-mexican-fifty-pesos-coin-260nw-2365343281.jpg" },
  ]

  return (
    <>
      <form 
      className='flex flex-col items-center justify-center w-[100%]'
      onSubmit={handleSubmit}>
       

        <div className="w-full mb-4">
          <Listbox 
            className='w-[90%] m-auto'
            value={selectedOption} 
            onChange={setSelectedOption}
          >
            <div className="relative mt-2">
              <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  {selectedOption && (
                    <img alt="" src={selectedOption.url} className="h-5 w-5 flex-shrink-0 rounded-full" />
                  )}
                  <span className="ml-3 block truncate">
                    {selectedOption ? selectedOption.nombre : 'Seleccione una moneda'}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm p-3"
              >
                {options.map((option, index) => (
                  <ListboxOption
                    key={index}
                    value={option}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                  >
                    <div className="flex items-center">
                      <img alt="" src={option.url} className="h-5 w-5 flex-shrink-0 rounded-full" />
                      <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                        {option.nombre}
                      </span>
                    </div>

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        <div className="w-full mb-4">
          <Listbox 
            className='w-[90%] m-auto'
            value={selectedCoin} 
            onChange={setSelectedCoin}
          >
            <div className="relative mt-2">
              <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  {selectedCoin && (
                    <img alt="" src={`https://www.cryptocompare.com${selectedCoin.CoinInfo.ImageUrl}`} className="h-5 w-5 flex-shrink-0 rounded-full" />
                  )}
                  <span className="ml-3 block truncate">
                    {selectedCoin ? selectedCoin.CoinInfo.FullName : 'Seleccione una criptomoneda'}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm p-3"
              >
                {dataCoin.map((item, index) => (
                  <ListboxOption
                    key={index}
                    value={item}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                  >
                    <div className="flex items-center">
                      <img alt="" src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`} className="h-5 w-5 flex-shrink-0 rounded-full" />
                      <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                        {item.CoinInfo.FullName}
                      </span>
                    </div>

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        <button type="submit" className='bg-indigo-600 text-white p-3 w-[90%] rounded-lg'>Convertir</button>
      </form>

      <section className="relative mt-5 right-60 h-auto flex flex-col items-center justify-center w-[900px] p-4 text-black">
      
      <div className='flex gap-2'>

      </div>
      {selectedCoin && selectedOption && (
        <Respuesta selectedCoin={selectedCoin.CoinInfo.Name} selectedOption={selectedOption.id} />
      )}
      </section>

      <Toaster 
      toastOptions={{ 
        style: { 
          background: 'red',
          color: '#fff', 
         
        },
      }}
      options={{ position: 'bottom-right' }} />
    </>
  )
}
