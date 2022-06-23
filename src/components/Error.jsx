import styled from "@emotion/styled";

const Div = styled.div`
  background-color: #f34747;
  color: #fff;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
`

export const Error = ({children}) => {
  return (
    <Div>{children}</Div>
  )
}
