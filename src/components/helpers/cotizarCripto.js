
export const getCotizarCripto = async (moneda, cripto) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=USD,${moneda}`
  const response = await fetch(url)
  const { DISPLAY } = await response.json()

  return DISPLAY[cripto][moneda]  
}