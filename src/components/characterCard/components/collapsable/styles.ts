import styled from 'styled-components'
import Image from 'next/image'

export const Body = styled.div`
  background-color: #fff3e6;
  border-radius: 3px;
  border: 1px solid #ffbf80;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
  padding: 12px 0;
  width: 100%;
`

export const CollapsableContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 25px;
  justify-content: space-between;
`

export const Icon = styled(Image)`
  margin-left: 10px;
`

export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Title = styled.label`
  cursor: pointer;
  text-align: center;
  width: 100%;
`
