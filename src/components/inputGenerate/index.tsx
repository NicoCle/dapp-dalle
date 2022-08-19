import { Button, Flex, useMediaQuery, Input } from "@chakra-ui/react";
import { FC } from "react";
import { GiAbstract097 } from "react-icons/gi";

const InputGenerate: FC<IInputGenerate> = ({ setQuery, handleGerenate }) => {
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)");
  return (
    <Flex padding="2rem" w={isLargerThan760 ? "800px" : "100%"}>
      <Input
        bg="white"
        borderRadius="none"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        borderRadius="none"
        colorScheme="pink"
        onClick={handleGerenate}
        gap="1rem"
      >
        Generar <GiAbstract097 size="2.5rem" />
      </Button>
    </Flex>
  );
};
export default InputGenerate;
