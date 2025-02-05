import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactElement | null;
}
 
const ScrollWrapper = (props: Props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return props.children;
} 

export default ScrollWrapper;
