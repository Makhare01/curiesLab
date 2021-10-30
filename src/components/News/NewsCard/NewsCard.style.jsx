import styled from 'styled-components'

export const NewsCardDivStyle = styled.div`
  transition: 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 20%);
  }
`

export const NewsCardImageStyle = styled.div`
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0px 0px;
`

export const NewsCardDescriptionDivStyle = styled.div`
  padding: 20px;
  height: 400px;
  margin-bottom: 20px;
`

export const NewsCardDateStyle = styled.p`
  font-size: 14px;
  font-family: TBC Contractica CAPS;
  color: #55636e;
`

export const NewsCardTitleStyle = styled.p`
  font-size: 24px;
  font-family: TBC Contractica CAPS;
  color: #261f63;
`

export const NewsCardDescriptionStyle = styled.p`
  font-size: 18px;
  font-family: TBC Contractica Regular;
  color: #55636e;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  overflow: hidden;
`
// Read more

export const NewsCardReadMoreButtonStyle = styled.button`
  width: 100%;
  height: 50px;
  border: solid 1px white;
  position: absolute;
  bottom: 0px;
  background-color: transparent;
  border: none;
  background: #8AD0CE;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  cursor: pointer;
  text-align: center;
`

export const NewsCardReadMoreLabelStyle = styled.p`
  font-size: 18px;
  font-family: TBC Contractica Regular;
  /* font-family: 'Lato', sans-serif; */
  color: white;
  transition: 0.5s;

  &:hover {
    color: #55636e;
  }
`
