import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

const Card: FC<ICard> = ({ dalleData, handleFormView }) => {
  return (
    <Flex
      w="250px"
      h="300px"
      border="5px solid black"
      borderColor="green.700"
      onClick={() => handleFormView(dalleData?.image_path)}
    >
      <Image
        src={dalleData?.image_path}
        alt={`/image/${dalleData?.image_path}`}
      />
    </Flex>
  );
};
export default Card;
