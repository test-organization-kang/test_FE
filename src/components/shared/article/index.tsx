import { ArticleItem } from '@/types/article';
import Comment from '../comment';
import Likes from '../likes';
import Pass from '../pass';
import * as S from './styles';

// ArticleItem 타입에서 author 제외한 타입 정의
type ArticleProps = Omit<ArticleItem, 'author'>;

// 게시글 컴포넌트 (마이페이지에서 활용 가능)
const Article: React.FC<{ article: ArticleProps }> = ({ article }) => {
    return (
        <S.ArticleContainer>
            <S.ArTitleBlock>{ article.title }</S.ArTitleBlock>
            {/* textarea로 받을 것이기 때문에 string으로 받기 */}
            <S.ArContentBlock dangerouslySetInnerHTML={ article.content } />
            <S.ArDataBlock>
                {/* map으로 하나의 컴포넌트로 구현하기 */}
                <Likes likeCount={ article.likeCount } likeType={ article.likeType } postId={ article.postId } />
                <Comment commentCount={ article.commentCount } />
                <Pass answerCount={ article.answerCount } />
            </S.ArDataBlock>
        </S.ArticleContainer>
    )
}

export default Article;