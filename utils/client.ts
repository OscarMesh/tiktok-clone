import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'fkxt1ix1',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUPLIC_SANITY_TOKEN,
});
