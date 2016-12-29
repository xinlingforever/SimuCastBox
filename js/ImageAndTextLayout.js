/**
 * Created by xuxin3-ms on 2016/12/28.
 */
import React from 'react';


class ImageAndTextLayout extends  React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        imageUrl : '../image/images/card_image_001.png',
    }

    render() {
        return (
          <div>
              <img src={this.props.imageUrl}></img>
              <p style={{fontSize:'32px', marginTop:20}}>this is a pic</p>
              <p style={{fontSize:'20px', marginTop:20}}>this is a pic</p>
          </div>
        );
    }
}

export default ImageAndTextLayout;