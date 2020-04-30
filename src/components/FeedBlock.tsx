import React from 'react'
import styled from 'styled-components'

interface IFeedBlockProps {
  text: string
}

const PaddingColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PaddingRowFeedBlock = styled.div`
  width: 100%;
  height: 5px;
`

const PaddingRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const PaddingColumnFeedBlock = styled.div`
  width: 5px;
  height: 100%;
`

const FeedBlock: React.FC<IFeedBlockProps> = ({ text }) => {
  console.log('yay')
  return (
    <>
      <PaddingColumnContainer>
        <PaddingRowFeedBlock />
        <PaddingRowContainer>
          <PaddingColumnFeedBlock />
          {text}
          <PaddingColumnFeedBlock />
        </PaddingRowContainer>
        <PaddingRowFeedBlock />
      </PaddingColumnContainer>
    </>
  )
}

export { FeedBlock }
