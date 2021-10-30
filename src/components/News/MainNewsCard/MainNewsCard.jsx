import { NewsMainCardDivStyle, NewsMainCardImageStyle, NewsMainCardDescriptionDivStyle, NewsMainCardDateStyle, MewsMainCardTitleStyle, NewsMainCardDescriptionStyle, NewsMainCardReadMoreButtonStyle, NewsMainCardReadMoreLabelStyle, NewsMainCardReadMoreArrowStyle } from './MianNewsCard.style'

export const MainNewsCard = ({ image, date, title, description }) => {
  return (
    <NewsMainCardDivStyle>
      <NewsMainCardImageStyle src={image} />
      <NewsMainCardDescriptionDivStyle>
        <NewsMainCardDateStyle> {date} </NewsMainCardDateStyle>
        <MewsMainCardTitleStyle> {title} </MewsMainCardTitleStyle>
        <NewsMainCardDescriptionStyle> {description} </NewsMainCardDescriptionStyle>
        <NewsMainCardReadMoreButtonStyle>
          <NewsMainCardReadMoreLabelStyle>READ MORE <NewsMainCardReadMoreArrowStyle className="fas fa-arrow-right"></NewsMainCardReadMoreArrowStyle> </NewsMainCardReadMoreLabelStyle>
        </NewsMainCardReadMoreButtonStyle>
      </NewsMainCardDescriptionDivStyle>
    </NewsMainCardDivStyle>
  )
}
