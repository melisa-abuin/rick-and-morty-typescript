import styled from 'styled-components'
import Image from 'next/image'

export const Avatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`

export const Badge = styled.div`
  background-color: #b35900;
  border-radius: 15px;
  color: #ffffff;
  font-size: 12px;
  margin: 15px 0;
  padding: 5px 15px;
  white-space: nowrap;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 1px 4px 15px 6px #bbbbbb;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  max-width: 80vw;
  padding: 10px 15px;
  width: 450px;
`

export const Divider = styled.div`
  border-bottom: 1px solid #d9d9d9;
  margin: 15px 0;
  width: 100%;
`

export const MainSection = styled.div`
  width: 70%;
`

export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h3`
  color: #ffbf80;
`
