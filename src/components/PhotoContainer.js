import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  //conditional render. If results are found, they will be mapped over and displayed, otherwise NotFound component will display
  render() {
    const results = this.props.images;
    let search = this.props.match.params.searchValue;
    let whatToDisplay;
    if (results.length > 0) {
      whatToDisplay = results.map((image) => {
        return (
          <Photo
            url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            alt={image.title}
            key={image.id}
          />
        );
      });
    } else {
      whatToDisplay = <NotFound />;
    }

    return (
      <div className="photo-container">
        <h2>Results: {search}</h2>
        <h3>{this.props.title}</h3>
        <ul>{whatToDisplay}</ul>
      </div>
    );
  }
}

export default PhotoContainer;
