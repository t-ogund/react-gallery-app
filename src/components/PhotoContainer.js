import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";
import apiKey from "../config";


class PhotoContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const results = this.props.images.photo
    let search = this.props.match.params.searchValue;
    let whatToDisplay;
    if (results !== undefined) {
      whatToDisplay = results.map(image => { return <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={image.title} key={ image.id } /> })
    } else {
      whatToDisplay = <NotFound />
    }

    return (
      <div className="photo-container">
        <h2>Results: {search}</h2>
        <h3>{this.props.title}</h3>
        <ul>

        { 
          whatToDisplay
        }  
        
          {/* <li>
            <img
              src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
              alt=""
            />
          </li> */}

          {/* <!-- Not Found --> */}
          {/* <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li> */}
        </ul>
      </div>
    );
  }
  

  
  
  
  // 
    
}

export default PhotoContainer;
