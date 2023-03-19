import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 20px 0 50px 0;
`

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
`

export const PageNumber = styled.div<{ isSelected: boolean }>`
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#ffbf80' : 'inherit')};
  border-radius: 50%;
  border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid #ffbf80')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#ffbf80')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 25px;
  justify-content: center;
  margin: 5px 10px;
  width: 25px;
`
