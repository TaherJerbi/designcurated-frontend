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
const SEARCH_PHOTOS = gql`
query SEARCH($key: String!, $page: Int!, $perPage: Int!, $orientation: String!) {
  searchPhotos(key: $key, page: $page, perPage: $perPage, orientation: $orientation) {
    image {
      description
      alt_description
      url
      id
    }
    user {
      username
    }
  }
}`
function ImageGridContainer({ page = 1, search }){
  //   const [query, setQuery] = useState();
  const { data : noSearchData, loading : noSearchLoading, error : noSearchError } = useQuery(PHOTOS_QUERY,{
    variables: {
      page,
      perPage: 9
    }
  })
  const { data : searchData, loading, error } = useQuery(SEARCH_PHOTOS, {
    variables: {
      page,
      perPage: 9,
      orientation: 'landscape',
      key: search
    }
  })

  if(loading ||noSearchLoading)
    return 'Loading ... '

  if(searchData && searchData.searchPhotos.length > 0){
    return <ImageGrid photos={searchData.searchPhotos}/>
  }
  if(noSearchData && noSearchData.getPhotos.length > 0)
    return <ImageGrid photos={noSearchData.getPhotos}/>



}
export default ImageGridContainer