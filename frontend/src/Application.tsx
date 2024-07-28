import { Flex, Text, VStack, Button } from "@chakra-ui/react";
import Article, { ArticleProps } from "./components/Article";
import Comment, { CommentProps } from "./components/Comment";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState, useEffect } from "react";

const Application = () => {
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);
  const moreComments: CommentProps[] = document.__moreComments;
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setArticle(document.__article);
    }, 500);
    setTimeout(() => {
      setComments(document.__comments);
    }, 1000);
  }, []);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

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
        {article && (
          <Article
            author={article.author}
            text={article.text}
            date={article.date}
          />
        )}
        <VStack
          align="left"
          w="full"
          gap={{ mobile: "10px", desktop: "30px" }}
          pt={{ desktop: "20px" }}
          px={{ mobile: "20px", desktop: "0px" }}
        >
          {comments.map((comment, index) => (
            <Comment
              key={index}
              author={comment.author}
              text={comment.text}
              date={comment.date}
            />
          ))}

          {comments.length != 0 &&
            (!showComments ? (
              <Button
                w="fit-content"
                mb="40px"
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                _active={{ bg: "none" }}
                textColor="shadow"
                fontSize={{ mobile: "14px", desktop: "20px" }}
                gap="2"
                px="0"
                onClick={handleShowComments}
              >
                Show more comments
                <HiChevronDown />
              </Button>
            ) : (
              <>
                {moreComments.map((comment, index) => (
                  <Comment
                    key={index}
                    author={comment.author}
                    text={comment.text}
                    date={comment.date}
                  />
                ))}

                <Button
                  w="fit-content"
                  mb="40px"
                  bg="none"
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  _active={{ bg: "none" }}
                  textColor="shadow"
                  gap="2"
                  px="0"
                  onClick={handleShowComments}
                >
                  Show less comments
                  <HiChevronUp />
                </Button>
              </>
            ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Application;
