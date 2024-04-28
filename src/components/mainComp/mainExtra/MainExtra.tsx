import { MeBox, MeContainer, MeContentBlock, MeTitleBlock, SearchBox, SearchImgBlock } from "./MainExtraStyles";
import Trophy from '../../../assets/images/main/trophy.svg';
import { bestMakers, mostSolvedProblems } from "./mainExtraData";

const MainExtra = () => {
  return (
    <MeContainer>
      <SearchBox>
        <SearchImgBlock viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.2 42L26.6 29.4C25.6 30.2 24.45 30.8333 23.15 31.3C21.85 31.7667 20.4667 32 19 32C15.3667 32 12.292 30.7413 9.776 28.224C7.26 25.7067 6.00133 22.632 6 19C5.99867 15.368 7.25733 12.2933 9.776 9.776C12.2947 7.25867 15.3693 6 19 6C22.6307 6 25.706 7.25867 28.226 9.776C30.746 12.2933 32.004 15.368 32 19C32 20.4667 31.7667 21.85 31.3 23.15C30.8333 24.45 30.2 25.6 29.4 26.6L42 39.2L39.2 42ZM19 28C21.5 28 23.6253 27.1253 25.376 25.376C27.1267 23.6267 28.0013 21.5013 28 19C27.9987 16.4987 27.124 14.374 25.376 12.626C23.628 10.878 21.5027 10.0027 19 10C16.4973 9.99733 14.3727 10.8727 12.626 12.626C10.8793 14.3793 10.004 16.504 10 19C9.996 21.496 10.8713 23.6213 12.626 25.376C14.3807 27.1307 16.5053 28.0053 19 28Z"/>
        </SearchImgBlock>
        <input
          type="text"
          placeholder="Search" />
      </SearchBox>
      <MeBox>
        <MeTitleBlock>
          <img src={Trophy} alt="Trophy"/>
          <p>Best Maker</p>
        </MeTitleBlock>
        <MeContentBlock>
          {bestMakers.map((maker) => (
            <p key={maker.id}>{maker.id}. {maker.name}</p>
          ))}
        </MeContentBlock>
      </MeBox>
      <MeBox>
        <MeTitleBlock>
          <p>Most Solved</p>
        </MeTitleBlock>
        <MeContentBlock>
          {mostSolvedProblems.map((problem) => (
            <p key={problem.id}>{problem.id}. {problem.title}</p>
          ))}
        </MeContentBlock>
      </MeBox>
    </MeContainer>
  )
}

export default MainExtra