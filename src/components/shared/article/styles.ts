import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { typographyMap } from '@/styles/typography';

export const ArticleContainer = styled.div`
  ${layoutMap.shadowBox}
  box-sizing: border-box;
  width: 100%;
  height: 572px;
  justify-content: space-between;
  gap: 30px;
  overflow-y: auto;
  transition: all 0.3s ease;

  /* 스크롤바 전체 디자인 */
  &::-webkit-scrollbar {
    width: 12px;
    background-color: ${colors.gray50};
  }

  /* 스크롤바 핸들(바) 디자인 */
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.yellow};
    border-radius: 4px;
  }

  /* 스크롤바 버튼(위, 아래) 디자인 */
  &::-webkit-scrollbar-button {
    display: none;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width : 900px) {
    height : 400px;
  }
`;

export const ArTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width : 900px) {
    p {
      ${typographyMap.t3};
    }
  }
`;

export const ArContentBlock = styled.p`
  flex-grow : 1;
  ${typographyMap.t4};
  ${typographyMap.regular};
  color: black;

  @media (max-width : 900px) {
    ${typographyMap.t6};
  }
`;

export const ArDataBlock = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
