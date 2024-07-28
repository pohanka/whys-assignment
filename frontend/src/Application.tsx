import { Flex, Text } from "@chakra-ui/react";
import Article, { ArticleProps } from "./components/Article";
import Comment, { CommentProps } from "./components/Comment";

const Application = () => {
  const comments: CommentProps[] = document.__comments;
  const article: ArticleProps = document.__article;

  return (
    <Flex minH="100vh" bg="backgroundColor" flexDirection="column">
      <Flex
        w="100%"
        h={{ mobile: "70px", desktop: "85px" }}
        bg="primary"
        alignItems="center"
        mb="40px"
      >
        <Text
          px={{ mobile: "20px", desktop: "40px" }}
          fontWeight="bold"
          fontSize={{ mobile: "30px", desktop: "36px" }}
          textColor="secondary"
        >
          Whys Project
        </Text>
      </Flex>

      <Flex
        px={{ mobile: "20px", desktop: "40px" }}
        flexDirection={{ mobile: "column", desktop: "row" }}
        gap={{ mobile: "20px", desktop: "40px" }}
      >
        <Article
          author={article.author}
          text={article.text}
          date={article.date}
        />
        <Flex
          w="full"
          flexDirection="column"
          gap={{ mobile: "10px", desktop: "30px" }}
          pt={{ desktop: "20px" }}
        >
          {comments.map((comment, index) => (
            <Comment
              key={index}
              author={comment.author}
              text={comment.text}
              date={comment.date}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Application;
