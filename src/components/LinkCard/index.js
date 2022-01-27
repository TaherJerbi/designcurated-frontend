import { withRouter } from 'next/router'
import LinkCard from './LinkCard'

function LinkCardContainer({router, url, ...rest}){
  return <LinkCard selected={router.pathname === url} url={url} {...rest}/>
}
export default withRouter(LinkCardContainer)