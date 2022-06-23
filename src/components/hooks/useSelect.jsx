import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  width: 100%;
`;

export const useSelect = (label, opciones) => {
  const [stateSelect, setStateSelect] = useState('');

  const SelectModenas = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={stateSelect}
        onChange={e => setStateSelect(e.target.value)}
      >
        <option value=''> -- Seleccione -- </option>
        {opciones.map((option) => (
          <option 
            key={option.id} 
            value={option.id}
            >
            {option.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [
    SelectModenas,
    stateSelect
  ];
};
