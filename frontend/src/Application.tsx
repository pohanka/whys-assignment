import {
  Flex,
  Text,
  VStack,
  Button,
  ScaleFade,
  Collapse,
} from "@chakra-ui/react";
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
    setTimeout(() => setArticle(document.__article), 500);
    setTimeout(() => setComments(document.__comments), 1000);
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
        mb="40px"
      >
        <ScaleFade initialScale={0.8} in={article !== null}>
          {article && (
            <Article
              author={article.author}
              text={article.text}
              date={article.date}
            />
          )}
        </ScaleFade>

        <ScaleFade initialScale={0.8} in={comments.length != 0}>
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

            <Collapse in={showComments} transition={{ enter: { duration: 1 } }}>
              <VStack
                align="left"
                w="full"
                gap={{ mobile: "10px", desktop: "30px" }}
              >
                {moreComments.map((comment, index) => (
                  <Comment
                    key={index}
                    author={comment.author}
                    text={comment.text}
                    date={comment.date}
                  />
                ))}
              </VStack>
            </Collapse>

            <Button
              w="fit-content"
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
              {!showComments ? "Show more comments" : "Show less comments"}
              {!showComments ? <HiChevronDown /> : <HiChevronUp />}
            </Button>
          </VStack>
        </ScaleFade>
      </Flex>
    </Flex>
  );
};

export default Application;
