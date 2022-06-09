import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
  if(!props.list) {
    if(props.loadingUI) {
      return props.loadingUI;
    } else {
      return <Loading />
    } 
    
  } else if( props.list.length === 0) {
    if(props.emptyListUI) {
      return props.emptyListUI;
    } else {
      return <h2>There are no movies to display</h2>
    }
  } else {
    return props.children;
  }
}

interface genericListProps{
  list: any;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
  children: ReactElement;
}