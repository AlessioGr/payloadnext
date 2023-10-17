import path from 'path';
import { buildConfig } from 'payload/config';
import {lexicalEditor, SlateToLexicalFeature} from "@payloadcms/richtext-lexical";
import {mongooseAdapter} from "@payloadcms/db-mongodb";
import {webpackBundler} from "@payloadcms/bundler-webpack";

export default buildConfig({
  admin: {
    bundler: webpackBundler(), // bundler-config
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, SlateToLexicalFeature()],
  }), // editor-config
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  collections: [
    {
      slug: 'someCollection',
      fields: [
        {
          name: 'dwqqd',
          type: 'richText',
          editor: lexicalEditor({}),
        }
      ]
    }
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
