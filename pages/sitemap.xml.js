import React from "react";
import fs from "fs";
import * as queries from "../src/graphql/queries";
import { API, withSSRContext,Storage } from "aws-amplify";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://myeventizer.com/"

  const staticPages =  fs
  .readdirSync({
    development: 'pages',
    production: './.next/server',
  }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const SSR = withSSRContext();
  let documents =  [];
  let filter = {
    status: { eq: "Accepted" },
  };
  const ress = await SSR.API.graphql({
    query: queries.listCinematographies,
    authMode: "API_KEY",
    variables: { filter: filter },
  });
  const res1 = await SSR.API.graphql({
    query: queries.listPhotographies,
    authMode: "API_KEY",
    variables: { filter: filter },
  });
  const res2 = await SSR.API.graphql({
    query: queries.listDJMusicians,
    authMode: "API_KEY",
    variables: { filter: filter },
  });
  const res3 = await SSR.API.graphql({
    query: queries.listMakeupArtists,
    authMode: "API_KEY",
    variables: { filter: filter },
  });
  const res4 = await SSR.API.graphql({
    query: queries.listMehediArtists,
    authMode: "API_KEY",
    variables: { filter: filter },
  });
  const Cinematographies = await ress?.data?.listCinematographies?.items;
  Cinematographies.map((e) => (documents.push(`${baseUrl}products/cinematography/${e.id}`)));

  const photo = await res1?.data?.listPhotographies?.items;
  photo.map((e) => (documents.push(`${baseUrl}products/photography/${e.id}`)));

  const dj = await res2?.data?.listDJMusicians?.items;
  dj.map((e) => (documents.push(`${baseUrl}products/dj-musician/${e.id}`)));

  const makeup = await res3?.data?.listMakeupArtists?.items;
  makeup.map((e) => (documents.push(`${baseUrl}products/makeup-artist/${e.id}`)));

  const mehedi = await res4?.data?.listMehediArtists?.items;
  mehedi.map((e) => (documents.push(`${baseUrl}products/mehedi-artist/${e.id}`)));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${documents
        .map((e) => {
          return `
              <url>
                <loc>${e}</loc>
                <lastmod></lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;