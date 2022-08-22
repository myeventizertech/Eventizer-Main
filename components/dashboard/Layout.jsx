import dynamic from "next/dynamic";
import Loader from "../reUseComponents/Loader";

const LayoutSSRfalse = dynamic(() => import("./LayoutSSRfalse"), {
  loading: () => (
    <div className="h-screen pt-32">
      <Loader
        center={true}
        colorDefault={false}
        loaderWidht="w-[44px] h-[44px]"
        bdrWidth="4px"
      />
    </div>
  ),
  ssr: false,
});
const Layout = ({ children }) => {
  return (
    <>
      <LayoutSSRfalse>{children}</LayoutSSRfalse>
    </>
  );
};

export default Layout;
