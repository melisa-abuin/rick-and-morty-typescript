import React, { PropsWithChildren, useState } from 'react'
import { CollapsableContainer, Header, Body, Title, Icon } from './styles'

type Props = PropsWithChildren<{ title: string }>

export const Collapsable = ({ children, title }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleVisibility = () => setIsCollapsed((prev) => !prev)

  return (
    <CollapsableContainer>
      <Header onClick={toggleVisibility}>
        <Title>{title}</Title>

        <Icon alt="collapse" height={15} src="/right-chevron.png" width={15} />
      </Header>

      {!isCollapsed && <Body>{children}</Body>}
    </CollapsableContainer>
  )
}
