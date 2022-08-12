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

interface IFormView {
  src: string;
  closeForm: () => void;
  account: string | null | undefined;
}

const FormView: FC<IFormView> = ({ closeForm, src, account }) => {
  const { initialValues } = useHook();

  return (
    <Flex
      bg="green.200"
      border="1px solid black"
      borderRadius="1rem"
      padding="2rem"
      gap="1rem"
      justifyContent="space-around"
      position="relative"
    >
      <Image src={src} w="250px" h="250px" bg="green" alt={src} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl w="360px">
              <FormLabel htmlFor="owner">Owner</FormLabel>
              <Field
                as={Input}
                id="owner"
                name="owner"
                type="owner"
                variant="flushed"
                placeholder={account}
                disabled={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="name"
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
              />
            </FormControl>
            <FormControl>
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
              <FormLabel htmlFor="external_url">external_url</FormLabel>
              <Field
                as={Input}
                id="external_url"
                name="external_url"
                type="external_url"
                variant="flushed"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="attributes">attributes</FormLabel>
              <Field
                as={Input}
                id="attributes"
                name="attributes"
                type="attributes"
                variant="flushed"
              />
            </FormControl>
            <Button type="submit" colorScheme="yellow">
              Buy NFT
            </Button>
            <CloseButton
              size="lg"
              position="absolute"
              top="1"
              right="1"
              onClick={closeForm}
            />
          </form>
        )}
      </Formik>
    </Flex>
  );
};

export default FormView;
