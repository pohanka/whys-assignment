import { HStack, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export interface CommentProps {
  author: string;
  text: string;
  date: string;
}

const Comment = ({ author, text, date }: CommentProps) => {
  return (
    <VStack align="left" gap={{ mobile: "2px", desktop: "10px" }}>
      <HStack gap="10">
        <Text
          fontSize={{ mobile: "16px", desktop: "24px" }}
          fontWeight="bold"
          textColor="info"
        >
          {author}
        </Text>
        <Text fontSize={{ mobile: "14px", desktop: "20px" }} textColor="shadow">
          {format(toZonedTime(new Date(date), "UTC"), "dd.MM.yyyy HH:mm")}
        </Text>
      </HStack>

      <Text
        fontSize={{ mobile: "20px", desktop: "30px" }}
        textColor="info"
        fontWeight="medium"
        px="20px"
      >
        {text}
      </Text>
    </VStack>
  );
};

export default Comment;
