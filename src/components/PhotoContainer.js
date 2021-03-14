import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

function PhotoContainer(props) {

  const results = props.images.photo
  console.log("RESULTS: ", results)
  // 
    return (
      <div class="photo-container">
        <h2>Results</h2>
        <h3>{props.title}</h3>
        {console.log(props.images.photo)}
        <ul>
        { console.log("JSX RESULTS: ", results) }

        { 
          results ? results.map(image => { return <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={image.title} key={ image.id } /> }) : <NotFound />
        }  
        
          <li>
            <img
              src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
              alt=""
            />
          </li>

          {/* <!-- Not Found --> */}
          {/* <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li> */}
        </ul>
      </div>
    );
}

export default PhotoContainer;
