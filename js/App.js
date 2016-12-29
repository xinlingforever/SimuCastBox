import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DrawerLayout from './DrawerLayout';
import ToolBarLayout from './ToolBarLayout';
import ImageGallery from 'react-image-gallery';
import CardViewLayoutWithOneRow from './CardViewLayoutWithOneRow';
import CardViewLayoutWithTwoRow from './CardViewLayoutWithTwoRow';
import CardViewLayoutWithListView from './CardViewLayoutWithListView';
import CardViewLayoutWithOneRowL from './CardViewLayoutWithOneRowL';

injectTapEventPlugin();

const styles = {
    divStyle: {
        backgroundColor: '#d3d3d3',
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
           drawOpen : false,
        });
    }

    onAppBarLeftIconBtnTouched() {
        console.log("App onAppBarLeftIconBtnTouched");
        this.setState({
           drawOpen : true,
        });
    }

    onToolBarLeftIconBtnTouched() {
        console.log("App onToolBarLeftIconBtnTouched");
        this.setState({
            drawOpen : true,
        });
    }

    onDrawerRequestChanged(open) {
        console.log("App onDrawerRequestChanged:"+open);
        this.setState({
            drawOpen: open,
        });
    }

    onImageGalleryItemClicked(event) {
        console.log("click:"+this._imageGallery.getCurrentIndex());
    }

    render() {
        const images = [
            {
                original: '../images/image001.jpg',
            },
            {
                original: '../images/image002.jpg',
            },
            {
                original: '../images/image003.jpg',
            },
            {
                original: '../images/image004.jpg',
            },
            {
                original: '../images/image005.jpg',
            },
        ];
        return (
            <MuiThemeProvider>
                <div style={styles.divStyle}>
                    <DrawerLayout
                        open={this.state.drawOpen}
                        onDrawerRequestChanged={(open) => this.onDrawerRequestChanged(open)}
                    />
                    <ToolBarLayout
                        onToolBarLeftIconBtnTouched={() => this.onToolBarLeftIconBtnTouched()}
                    />
                    <ImageGallery
                        ref={i => this._imageGallery = i}
                        items={images}
                        slideInterval={2000}
                        showBullets={true}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        showIndex={false}
                        showNav={false}
                        autoPlay={true}
                        onClick={(event) => this.onImageGalleryItemClicked(event)}
                    />
                    {/*<p style={{backgroundColor:'red'}}>aaaaaaaaaaa</p>*/}
                    <CardViewLayoutWithOneRow />
                    <br/>
                    <CardViewLayoutWithTwoRow />
                    <br/>
                    <CardViewLayoutWithListView />
                    <br/>
                    <CardViewLayoutWithOneRowL title="Religion & Spirituality"/>
                    <br/>
                    <CardViewLayoutWithOneRowL title="Top Videos"/>
                    <br/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;