/**
 * Created by xuxin3-ms on 2016/12/27.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ImageAndTextLayout from './ImageAndTextLayout';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    cardHeader: {
        color: 'white',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        // overflowX: 'auto',
        cellHeight: 'auto',
        marginTop: '50px',
    },
    card: {
        height: '600px',
        width: '100%',
    }
}

const imgs = [
    '../images/image001.jpg',
    '../images/image002.jpg',
    '../images/image003.jpg',
];

const imgs2 = [
    '../images/card_image_001.jpg',
    '../images/card_image_002.jpg',
    '../images/card_image_003.jpg',
];

class CardViewLayoutWithOneRow extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardHeader>
                    <span style={{float: 'left',}}>
                        <font style={{fontSize: '60px'}}>Top Podcast</font>
                    </span>
                    <span style={{float: 'right',}} onClick={() => console.log("click right text")}>
                        <font style={{fontSize: '50px', color: 'red'}}>See All</font>
                    </span>
                </CardHeader>
                <GridList cols={3} padding={15} style={styles.gridList}>
                    <GridTile rows={3} style={{marginLeft:20}}>
                        <ImageAndTextLayout imageUrl={imgs2[0]}></ImageAndTextLayout>
                    </GridTile>
                    <GridTile rows={3} style={{marginLeft:10, marginRight:10}}>
                        <ImageAndTextLayout imageUrl={imgs2[1]}></ImageAndTextLayout>
                    </GridTile>
                    <GridTile rows={3} style={{marginRight:20}}>
                        <ImageAndTextLayout imageUrl={imgs2[2]}></ImageAndTextLayout>
                    </GridTile>
                </GridList>
            </Card>
        );
    }
}

export default CardViewLayoutWithOneRow;