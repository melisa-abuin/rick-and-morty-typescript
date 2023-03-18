import styled from 'styled-components'
import Image from 'next/image'

export const LoaderCard = styled.div`
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 1px 4px 15px 6px #bbbbbb;
  display: flex;
  flex-direction: column;
  height: 215px;
  margin: 15px 0;
  max-width: 80vw;
  position: relative;
  width: 480px;
`

export const LoadersContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoaderImage = styled(Image)`
  max-height: 90%;
  max-width: 90%;
  padding: 10px 15px;
`
