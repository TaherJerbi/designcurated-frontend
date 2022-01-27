import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import ImageGrid from "./ImageGrid";

const PHOTOS_QUERY = gql`
query PHOTOS($page: Int!, $perPage: Int!) {
  getPhotos(page: $page, perPage: $perPage) {
    image {
      description
      url
      alt_description
      id
    }
    user {
      username
    }
  }
}`
// const SEARCH_PHOTOS = gql`
// query SEARCH($key: String!, $page: Int!, $perPage: Int!, $orientation: String!) {
//   searchPhotos(key: $key, page: $page, perPage: $perPage, orientation: $orientation) {
//     image {
//       description
//       alt_description
//       url
//       id
//     }
//     user {
//       username
//     }
//   }
// }`
function ImageGridContainer(){

  //   const [query, setQuery] = useState();
  const { data, loading, error } = useQuery(PHOTOS_QUERY,{
    variables: {
      page: 1,
      perPage: 9
    }
  })
  if(loading && !data){
    // show skeleton grid
    return "loading ..."
  }
  if(error && !data){
    // show error message
    return error
  }
  if(data)
    return <ImageGrid photos={data.getPhotos}/>

}
export default ImageGridContainer