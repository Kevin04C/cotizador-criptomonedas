import React, { useEffect, useState } from 'react'
import { useSelect } from './hooks/useSelect';
import styled from '@emotion/styled'
import { monedas } from './data/coins.js'
import { getCripto } from './helpers/getCripto.js'
import { Error } from './Error';


const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color .3s ease;
  cursor: pointer;

  &:hover{
    background-color: #7a7dfe;
  }
`


export const Form = ({setCoins}) => {
  const [ SelectModenas, stateSelect ] = useSelect('Elige tu Moneda', monedas)
  const [stateCripto, setStateCripto] = useState([])
  const [ SelectCripto, stateSelectCripto ] = useSelect('Elige tu Criptomoneda ', stateCripto)
  
  const [error, setError] = useState(false)

  useEffect(() => {
    getCripto()
      .then(data => {
        setStateCripto(data);
      })
      .catch(err => console.log(err))
   
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!stateSelect.trim() || !stateSelectCripto.trim()){
      setError(true)
      return;
    }
    setError(false)
    setCoins({
      moneda: stateSelect,
      cripto: stateSelectCripto
    })
  }
  

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectModenas />
        <SelectCripto />
        <InputSubmit 
          type='submit' 
          value='Cotizar'/>
      </form>
    </>
  )
}
