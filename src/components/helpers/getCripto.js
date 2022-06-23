export const getCripto = async () => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
  );

  const { Data } = await response.json();

  const dataCripto = Data.map(({ CoinInfo }) => ({
    id: CoinInfo.Name,
    nombre: CoinInfo.FullName,
  }));

  return dataCripto;
};
