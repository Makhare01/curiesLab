import React from 'react'
import { NewsCardDivStyle, NewsCardImageStyle, NewsCardDescriptionDivStyle, NewsCardDateStyle, NewsCardTitleStyle, NewsCardDescriptionStyle, NewsCardReadMoreButtonStyle, NewsCardReadMoreLabelStyle } from './NewsCard.style'

export const NewsCard = ({ image, date, title, description }) => {
  return (
    <NewsCardDivStyle>
      <NewsCardImageStyle style={{ backgroundImage: `url(${image})` }} />
      <NewsCardDescriptionDivStyle>
        <NewsCardDateStyle> {date} </NewsCardDateStyle>
        <NewsCardTitleStyle> {title} </NewsCardTitleStyle>
        <NewsCardDescriptionStyle> {description} </NewsCardDescriptionStyle>
      </NewsCardDescriptionDivStyle>
      <NewsCardReadMoreButtonStyle>
        <NewsCardReadMoreLabelStyle> READ MORE </NewsCardReadMoreLabelStyle>
      </NewsCardReadMoreButtonStyle>
    </NewsCardDivStyle>
  )
}
