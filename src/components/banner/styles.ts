import styled from 'styled-components'
import Image from 'next/image'

export const BannerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 100%;
`

export const BannerImage = styled(Image)`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;
`

export const Gradient = styled.div`
  background: linear-gradient(to bottom, #b3b3b3, #7a7a7a);
  height: 100%;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-index: 1;
`

export const Title = styled.h2`
  color: #ffffff;
  position: relative;
  z-index: 2;
`
