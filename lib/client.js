import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: "mhn23ljy",
  dataset: "production",
  apiVersion: "2023-01-26",
  token: process.env.IBIZA_2_DB_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
