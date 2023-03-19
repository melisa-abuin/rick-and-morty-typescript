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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? '#ffbf80' : 'inherit')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#ffbf80')};
  border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid #ffbf80')};
  width: 25px;
  height: 25px;
  margin: 5px 10px;
  cursor: pointer;
`
