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
function ImageGridContainer({ page = 1, search }){
  const { data : noSearchData, loading : noSearchLoading } = useQuery(PHOTOS_QUERY,{
    variables: {
      page,
      perPage: 9
    }
  })
  const { data : searchData, loading } = useQuery(SEARCH_PHOTOS, {
    variables: {
      page,
      perPage: 9,
      orientation: 'landscape',
      key: search
    }
  })

  if(loading)
    return <Spinner />
  if(searchData?.searchPhotos?.results.length > 0){
    return <ImageGrid photos={searchData.searchPhotos.results}/>
  }
  if(noSearchLoading)
    return <Spinner/>
  if(noSearchData && noSearchData.getPhotos.length > 0)
    return <ImageGrid photos={noSearchData.getPhotos}/>
  return null
}
export default ImageGridContainer