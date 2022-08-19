import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  CloseButton,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { FC } from "react";
import { useHook } from "./hooks";
import { GiCutDiamond } from "react-icons/gi";

const FormView: FC<IFormView> = ({ src, account }) => {
  const { initialValues, onSubmit } = useHook();

  return (
    <Flex
      bg="green.200"
      padding="2rem"
      gap="2rem"
      justifyContent="center"
      alignItems="center"
      w="100%"
      position="relative"
      wrap="wrap"
    >
      <Image
        src={src}
        w="250px"
        h="300px"
        border="5px solid black"
        borderColor="green.700"
        alt={src}
      />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormControl w="360px">
              <FormLabel htmlFor="owner">Owner</FormLabel>
              <Field
                as={Input}
                id="owner"
                name="owner"
                type="owner"
                variant="flushed"
                placeholder={account ? account : "Account"}
                disabled={true}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="name"
                variant="flushed"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="description">description</FormLabel>
              <Field
                as={Input}
                id="description"
                name="description"
                type="description"
                variant="flushed"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">image</FormLabel>
              <Field
                as={Input}
                id="image"
                name="image"
                type="text"
                variant="flushed"
                placeholder={src}
                disabled={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="Atributes">Atributes</FormLabel>
              <Field
                as={Input}
                id="Atributes"
                name="Atributes"
                type="Atributes"
                variant="flushed"
              />
            </FormControl>

            <Button type="submit" colorScheme="yellow" gap="0.5rem">
              Buy NFT <GiCutDiamond size="2rem" />
            </Button>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

export default FormView;
