import { create as ipfsHttpClient } from "ipfs-http-client";
import useMock from "hook/useMock";

const projectId = process.env.PROJECT_ID; // <---------- your Infura Project ID
const projectSecret = process.env.PROJECT_SECRET; // <---------- your Infura Secret
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export const useHook = () => {
  const { src } = useMock();

  const initialValues: TValue = {
    name: "Dave Starbelly",
    description:
      "Friendly OpenSea Creature that enjoys long swims in the ocean",
    image: src,
    attributes: "",
  };

  const onSubmit = async (values: TValue) => {
    const data = JSON.stringify({
      values,
    });

    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  return { initialValues, onSubmit };
};
