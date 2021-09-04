 
const MainComponent=(props)=>{
  let items:[] = (props.items) && props.items.data;
  const num = 57;

  return(
    <main>
      <h3 className='main-title'> Property for Sales </h3>      


      <section>
        <hr className='main-hr-line'/>

        <span className='main-filter-item-list'>
          <span className='main-filter-item'> All Bedrooms </span>
          <span className='main-filter-item'> Any Neighbourhood </span>
          <span className='main-filter-item'>  Min Price </span>
          <span className='main-filter-item'> Max Price </span>
          <span className='main-filter-item'> Sort By </span>
          <span className='main-filter-item'> {num} Results </span>
        </span>



        <hr className='main-hr-line'/>

        <div className='row main-container'>
           {items && items.map(item=>{
             return <div className='col-sm-4 col-md-4 col-lg-4'>
                 <div className='main-images-container'>
                   <img src={item.Images[0].formats.thumbnail.url} alt={'thumbnail images'} /> 
                   </div>
                   <div className='main-image-title'> {item.Title} </div>
                   <div className='main-image-price'> <b>{item.Price.toLocaleString()} &pound;</b> </div>
                 
             </div>
             })
           }
        </div>
      </section>
    </main>
  )
};


export default MainComponent;

