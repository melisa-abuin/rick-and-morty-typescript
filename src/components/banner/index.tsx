import React from 'react'
import { BannerContainer, BannerImage, Gradient, Title } from './styles'

export const Banner = () => (
  <BannerContainer>
    <Title>Rick and Morty</Title>
    <Gradient />
    <BannerImage
      alt="banner"
      fill
      priority
      sizes="(max-width: 1200px) 100vw"
      src="/home-banner.png"
    />
  </BannerContainer>
)
