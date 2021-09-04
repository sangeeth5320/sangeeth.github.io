import Loader from "react-loader-spinner";


const AppLoader=()=>{
  return(
  	<div className='container'>
     {/* Use appropriate loader later */}
      <div className='app-loader'> <Loader/> </div>
    </div>
  );
}

export default AppLoader;