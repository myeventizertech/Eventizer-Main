import { useState } from "react";
import Main from "../../../components/each-profile/Main";
import * as queries from "../../../src/graphql/queries";
import { API, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import services from "../../../utils/services";
import Head from "next/head";
function ViewPhotography({ posts, rating, sLocation, specializedIn }) {
  const data = posts?.serviceLocation == null ? "" : posts;

  let [updateImage, setUpdateImage] = useState("");
  useEffect(() => {
    async function fetchme() {
      try {
        const imageKey = await Storage.get(data?.uploadYourPhoto);

        const response = await fetch(imageKey);
        if (response.status == 200) {
          setUpdateImage(imageKey);
        } else if (response.status === 404) {
          setUpdateImage("");
        }
      } catch (error) {}
    }
    fetchme();
  }, [data.uploadYourPhoto]);

  return (
    <>
      <Head>
        <title>{posts?.title}</title>
        <meta name="title" content={posts?.title} />
        <meta property="og:title" content={posts?.title} key="ogtitle" />
        <meta name="twitter:title" content={posts?.title} />
        <meta
          property="og:url"
          content={"https://myeventizer.com/products/photography/" + posts?.id}
        />
        <meta name="description" content={posts?.detailsAboutYou} />
        <meta property="og:description" content={posts?.detailsAboutYou} />
        <meta name="twitter:description" content={posts?.detailsAboutYou} />
        {updateImage ? (
          <>
            <meta property="og:image" content={`${updateImage}`} />
            <meta name="twitter:image" content={`${updateImage}`} />
          </>
        ) : (
          <>
            <meta property="og:image" content="/img/og.png" />
            <meta name="twitter:image" content="/img/og.png" />
          </>
        )}
      </Head>

      <Main
        data={data}
        service={services.photography}
        rating={rating}
        sLocation={sLocation}
        specializedIn={specializedIn}
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await API.graphql({
    query: queries.getPhotography,
    variables: { id: params.slug },
    authMode: "API_KEY",
  });
  const posts = await res?.data?.getPhotography;
  let s = "";
  let c = "";
  let k = posts?.Reviews?.items?.length;
  let r = 0;
  const sum = posts?.Reviews?.items?.reduce((accumulator, object) => {
    return accumulator + object.average;
  }, 0);
  r = sum / k || 0;
  posts?.serviceLocation?.map((e) => {
    let d = JSON.parse(e);
    if (s.length === 0) {
      s = d?.label;
    } else {
      s = s + ", " + d?.label;
    }
  });
  posts?.specializedIn?.map((e) => {
    let m = JSON.parse(e);
    if (c.length === 0) {
      c = m?.label;
    } else {
      c = c + ", " + m?.label;
    }
  });
  return {
    props: {
      posts: posts,
      rating: parseFloat(r.toFixed(2)),
      sLocation: s,
      specializedIn: c,
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const SSR = withSSRContext();
  let filter = {
    status: { eq: "Accepted" },
  };
  const res = await SSR.API.graphql({
    query: queries.listPhotographies,
    authMode: "API_KEY",
    variables: { filter: filter },
  });

  const photographer = await res?.data?.listPhotographies?.items;
  const paths = photographer.map((e) => ({
    params: { slug: e.id },
  }));

  return { paths, fallback: "blocking" };
}

export default ViewPhotography;
