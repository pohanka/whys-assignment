import { Card, Text, Heading } from "@chakra-ui/react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export interface ArticleProps {
  author: string;
  text: string;
  date: string;
}

const Article = ({ author, text, date }: ArticleProps) => {
  return (
    <Card
      w="fit-content"
      h="fit-content"
      borderWidth="0.5px"
      borderColor="shadowing"
      borderRadius="lg"
      p={{ mobile: "20px", desktop: "40px" }}
    >
      <Heading
        fontSize={{ mobile: "20px", desktop: "28px" }}
        textColor="info"
        mb="4px"
      >
        {author}
      </Heading>
      <Text
        fontSize={{ mobile: "14px", desktop: "20px" }}
        textColor="shadow"
        mb="20px"
      >
        {format(toZonedTime(new Date(date), "UTC"), "dd.MM.yyyy HH:mm")}
      </Text>
      <Text fontSize={{ mobile: "16px", desktop: "24px" }} textColor="info">
        {text}
      </Text>
    </Card>
  );
};

export default Article;
