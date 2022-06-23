import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { getCotizarCripto } from "./components/helpers/cotizarCripto.js";
import { Result } from "./components/Result";
import { Spinner } from "./components/Spinner";
import ImgCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 6px;
    margin: 10px auto 0 auto;
    background-color: #66a2fe;
  }
`;

function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const { moneda, cripto } = coins;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      setLoading(true);
      getCotizarCripto(moneda, cripto).then((data) => {
        setResult(data);
        setLoading(false)
      });
      setResult({})
    }
  }, [coins]);

  return (
    <Contenedor>
      <Imagen src={ImgCripto} alt="Imagen criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form setCoins={setCoins} />
        {loading && <Spinner />}
        {result.PRICE && <Result result={result} />}
      </div>
    </Contenedor>
  );
}

export default App;
