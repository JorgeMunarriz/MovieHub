import ContentLoader from "react-content-loader";

const MyLoader = (props: object) => (
  <ContentLoader speed={2} width={275} height={550} viewBox="0 0 275 550" backgroundColor="#762727" foregroundColor="#2c0202" {...props}>
    <rect x="0" y="0" rx="20" ry="20" width="275" height="550" />
    {/* <rect x="100" y="500" rx="20" ry="20" width="275" height="550" />
     <rect x="400" y="-5" rx="20" ry="20" width="275" height="550" /> 
     <rect x="600" y="-5" rx="20" ry="20" width="275" height="550" /> 
    <rect x="100" y="1000" rx="20" ry="20" width="275" height="550" /> */}
    
  </ContentLoader>
);
export default MyLoader;
