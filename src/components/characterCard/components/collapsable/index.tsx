import React, { useState } from 'react'
import { CollapsableContainer, Header, Body, Title, Icon } from './styles'
import { Location } from '@/interfaces/location'
import { CharacterInfo } from '../characterInfo'

interface Props {
  location: Location
  title: 'Location' | 'Origin'
}

export const Collapsable = ({ location, title }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleVisibility = () => setIsCollapsed((prev) => !prev)

  return (
    <CollapsableContainer>
      <Header onClick={toggleVisibility}>
        <Title>{title}</Title>

        <Icon alt="collapse" height={15} src="/right-chevron.png" width={15} />
      </Header>

      {!isCollapsed && (
        <Body>
          <CharacterInfo title="dimension" subtitle={location.dimension} />

          <CharacterInfo title="name" subtitle={location.name} />

          <CharacterInfo
            title="ammount of residents"
            subtitle={location.residents?.length.toString()}
          />
        </Body>
      )}
    </CollapsableContainer>
  )
}
