import { gql, useQuery } from "@apollo/client";
import { Spinner } from '@chakra-ui/react'
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
    
    results {
      image {
        description
        url
        id
      }
      user {
        username
      }
    }
    total
    total_pages

  }
}`
function ImageGridContainer({ search, orientation, page_number : page }){
  const { data , loading } = useQuery(
    search ? SEARCH_PHOTOS : PHOTOS_QUERY,{
      variables: {
        page,
        perPage: 9,
        orientation: search && orientation,
        key : search
      }
    })
  // const { data : searchData, loading } = useQuery(SEARCH_PHOTOS, {
  //   variables: {
  //     page,
  //     perPage: 9,
  //     orientation,
  //     key: search
  //   }
  // })
  if(loading){
    return <Spinner />
  }
  if(data?.searchPhotos?.results?.length > 0){
    return <ImageGrid photos={data.searchPhotos.results}/>
  }
  if(data?.getPhotos?.length > 0){
    return <ImageGrid photos={data.getPhotos}/>
  }
  return null
}
export default ImageGridContainer