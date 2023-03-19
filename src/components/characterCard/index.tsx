import React from 'react'
import {
  Avatar,
  Badge,
  CardContainer,
  Divider,
  MainSection,
  Row,
  Title,
} from './styles'
import { Character } from '@/interfaces/character'
import { CharacterInfo } from './components/characterInfo'
import { Collapsable } from './components/collapsable'
import { LocationInfo } from './components/locationInfo'
import { EpisodeList } from './components/episodeList'

export const CharacterCard = (props: Character) => {
  const { name, species, gender, status, image, origin, episodes, location } =
    props

  return (
    <CardContainer>
      <Row>
        <div>
          <Avatar alt="avatar" height={70} src={image} width={70} />
        </div>

        <MainSection>
          <Row>
            <Title>{name}</Title>
            <Badge>{status}</Badge>
          </Row>

          <Row>
            <CharacterInfo title="species" subtitle={species} />
            <CharacterInfo title="gender" subtitle={gender} />
          </Row>
        </MainSection>
      </Row>
      <Divider />
      <Collapsable title="Location">
        <LocationInfo location={location} />
      </Collapsable>

      <Divider />
      <Collapsable title="Origin">
        <LocationInfo location={origin} />
      </Collapsable>

      <Divider />
      <Collapsable title="Featured on">
        <EpisodeList episodes={episodes} />
      </Collapsable>
    </CardContainer>
  )
}
