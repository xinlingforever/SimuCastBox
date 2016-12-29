/**
 * Created by xuxin3-ms on 2016/12/28.
 */
/**
 * Created by xuxin3-ms on 2016/12/27.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ImageAndTextLayoutH from './ImageAndTextLayoutH';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    cardHeader: {
        color: 'white',
    },
    gridList: {
        display: 'flex',
        // flexWrap: 'nowrap',
        // overflowX: 'auto',
        cellHeight: 'auto',
        marginTop: '50px',
    },
    card: {
        height: '1350px',
    },
    gridTile: {
        marginLeft:'20px',
    }
}

const imgs = [
    '../images/card_image_200_001.jpg',
    '../images/card_image_200_002.jpg',
    '../images/card_image_200_003.jpg',
    '../images/card_image_200_004.jpg',
    '../images/card_image_200_005.jpg',
];

const titles = [
    'Defected In The House',
    'Conversations with Tyler',
    'We The Podcast',
    'Hakkasan Nightclub Radio',
    'The Suicide Squadcast',
];

const subtitles = [
    'this is distorted Ltd',
    'TylerCowen',
    'rep keigin, elisopn',
    'hakssondi coskgjkl',
    'just for test, here',
];




class CardViewLayoutWithListView extends React.Component {
    render() {
        let GridTileList = [];
        for (let i=0; i<5; i++){
            if (i<4) {
                GridTileList.push(
                    <div key={i}>
                        <GridTile style={styles.gridTile}>
                            <ImageAndTextLayoutH
                                imageUrl={imgs[i]}
                                title={titles[i]}
                                subtitle={subtitles[i]}></ImageAndTextLayoutH>
                        </GridTile>
                        <GridTile rows={0.1} style={styles.gridTile}>
                            <Divider inset={true} style={{height: '5px', marginTop:'15px', marginLeft: '240px'}}/>
                        </GridTile>
                    </div>
                )
            }else{
                GridTileList.push(
                    <div key={i}>
                        <GridTile style={styles.gridTile}>
                            <ImageAndTextLayoutH
                                imageUrl={imgs[i]}
                                title={titles[i]}
                                subtitle={subtitles[i]}></ImageAndTextLayoutH>
                        </GridTile>
                    </div>
                )
            }
        }
        return (
            <Card style={styles.card}>
                <CardHeader>
                    <span style={{float: 'left',}}>
                        <font style={{fontSize: '60px'}}>Recommendation</font>
                    </span>
                </CardHeader>
                <GridList cols={1} padding={60} style={styles.gridList}>
                    {GridTileList}
                </GridList>
            </Card>
        );
    }
}

export default CardViewLayoutWithListView;