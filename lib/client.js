import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9ow6juqf",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token:
    "skeWTlrfgzAxXi8SfKDS34jMFWM9MXfO1SEaEIkWOSBZpdIgDU2VbUzAF5BZ3EjrqhdntoIuFnu62QxN4mZerBXqH212255W4nTYhvj3QBONVB1d1Gsb7U8kPggGaO1vCnhBNU93agFSzz8Z3pDlhsXwSwz8YuxD02yzgI5QqwxHdc886gKj",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
