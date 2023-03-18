import React from 'react'
import { BannerContainer, BannerImage, Gradient, Title } from './styles'

/**
 * Displays a banner with a title.
 */
export const Banner = () => (
  <BannerContainer>
    <Title>Rick and Morty</Title>
    <Gradient />
    <BannerImage alt="banner" fill src="/home-banner.png" />
  </BannerContainer>
)
