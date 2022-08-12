import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

const Card: FC<ICard> = ({ NFTe, handleFormView }) => {
  const { image_path, id } = NFTe;
  return (
    <Flex
      w="250px"
      h="250px"
      bg="green"
      onClick={() => handleFormView(image_path)}
    >
      <Image src={image_path} alt={`/image/${id}`} />
    </Flex>
  );
};
export default Card;
