import styled from '@emotion/styled'

const Div = styled.div`
  color:#fff;
  font-family: 'Lato', sans-serif;
  
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Price = styled.p`
  font-size: 28px;
  span {
    font-weight: 700;
  }
`
const IMG = styled.img`
  display: block;
  max-width: 120px;
  margin: 40px auto 0 auto;
`

export const Result = ({result}) => {
  
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

  return (
    <Div>
      <IMG 
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt='Imagen cripto'
      />
      <div>
        <Price>El precio es de <span> {PRICE}</span></Price>
        <Text>El precio más alto del día<span>{HIGHDAY}</span></Text>
        <Text>El precio más bajo del día <span> {LOWDAY}</span></Text>
        <Text>Variación últimas 24 horas <span> {CHANGEPCT24HOUR}</span></Text>
        <Text>Última actualización<span> {LASTUPDATE}</span></Text>
      </div>
    </Div>
  )
}
