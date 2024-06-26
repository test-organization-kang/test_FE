import { CommentItem } from '..';
import { postIdStore } from '@/stores/post';
import useGetComments from '@/hooks/detail/useGetComments';

import * as S from './styles';

const CommentList = () => {
  const postId = postIdStore((state) => state.postId);
  const { data, ref } = useGetComments(postId);
  return (
    <S.Container>
      {data?.pages.map((comment, index) => {
        const commentLength = data.pages.length;
        if (commentLength - 2 === index && !data.pageParams.isDone) {
          return <CommentItem key={index} {...comment} ref={ref} />;
        } else {
          return <CommentItem key={index} {...comment} />;
        }
      })}
    </S.Container>
  );
};

export default CommentList;
