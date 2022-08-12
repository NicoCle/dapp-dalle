export const useHook = () => {
  const initialValues = {
    owner: "",
    name: "Dave Starbelly",
    image:
      "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
    description:
      "Friendly OpenSea Creature that enjoys long swims in the ocean",
    external_url: "https://openseacreatures.io/3",
    attributes: "",
  };
  return { initialValues };
};
