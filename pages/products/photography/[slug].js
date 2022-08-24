import Main from "../../../components/each-profile/Main"
import * as queries from '../../../src/graphql/queries'
import { API,withSSRContext } from "aws-amplify";
import { useRouter } from 'next/router'
import services from "../../../utils/services";
function ViewPhotography({posts,rating,sLocation,specializedIn}){
  const data = posts?.serviceLocation == null ?  "": posts;
  console.log(rating)
    return(
 <>
    <Main data={data} service={services.photography} rating={rating} sLocation={sLocation} specializedIn={specializedIn}/>
 </>
    )
}

export async function getStaticProps({params}) {
  console.log(params); 

    const res =  await API.graphql({
      query: queries.getPhotography,
      variables: { id: params.slug },
      authMode: 'API_KEY',
      
    });
    const posts = await res?.data?.getPhotography
    let s =""
    let c=""
    let k = posts?.Reviews?.items?.length
    let r=0
    const sum = posts?.Reviews?.items?.reduce((accumulator, object) => {
      return accumulator + object.average;
    }, 0);
    r =sum/k ||0
    posts?.serviceLocation?.map((e)=>{
      let d =JSON.parse(e)
      if(s.length===0){
        s=d?.label
      }
      else{
        s=s+","+d?.label
      }
    })
    posts?.specializedIn?.map((e)=>{
      let m =JSON.parse(e)
      if(c.length===0){
        c=m?.label
      }
      else{
        c=c+","+m?.label
      }

    })
  return {
    props: {
      posts:posts,
      rating:r.toFixed(2),
      sLocation:s,
      specializedIn:c
    },
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
  const SSR = withSSRContext();
  let filter = {
    status: { eq: "Accepted" } 
};
  const res = await SSR.API.graphql({
    query: queries.listPhotographies,
    authMode: 'API_KEY',
    variables: { filter: filter}
  });

    const photographer = await res?.data?.listPhotographies?.items
    console.log(photographer)
    const paths = photographer.map((e) => ({
      params: { slug: e.id },
    }))

    return { paths, fallback: 'blocking' }
  }

export default ViewPhotography