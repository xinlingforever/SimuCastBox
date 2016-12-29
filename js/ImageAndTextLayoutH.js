/**
 * Created by xuxin3-ms on 2016/12/28.
 */
import React from 'react';


class ImageAndTextLayoutH extends  React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        imageUrl : '../image/images/card_image_001.png',
        title : 'this is a pic',
        subtitle : 'this is a pic',
    }

    render() {
        return (
            <div>
                <span style={{float: 'left'}}>
                    <img src={this.props.imageUrl}></img>
                </span>
                <span style={{float: 'left'}}>
                    <p style={{fontSize:'40px', marginTop:'35px', marginLeft:'50px'}}>{this.props.title}</p>
                    <p style={{fontSize:'32px', marginTop:'20px', marginLeft:'50px'}}>{this.props.subtitle}</p>
                </span>
            </div>
        );
    }
}

export default ImageAndTextLayoutH;