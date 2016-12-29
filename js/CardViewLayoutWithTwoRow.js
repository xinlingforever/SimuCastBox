/**
 * Created by xuxin3-ms on 2016/12/28.
 */
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
        //flexWrap: 'nowrap',
        //overflowX: 'auto',
        cellHeight: 'auto',
        marginTop: '50px',
    },
    card: {
        height: '1250px',
    }
}

const imgs = [
    '../images/card_image_500_001.jpg',
    '../images/card_image_500_002.jpg',
    '../images/card_image_500_003.jpg',
    '../images/card_image_500_004.jpg',
    '../images/card_image_500_005.jpg',
    '../images/card_image_500_006.jpg',
];

class CardViewLayoutWithTwoRow extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardHeader>
                    <span style={{float: 'left',}}>
                        <font style={{fontSize: '60px'}}>Featured</font>
                    </span>
                    <span style={{float: 'right',}} onClick={() => console.log("click right text")}>
                        <font style={{fontSize: '50px', color: 'red'}}>See All</font>
                    </span>
                </CardHeader>
                <GridList cols={3} padding={15} style={styles.gridList}>
                    <GridTile rows={3} style={{marginLeft:20,}}>
                        <img src={imgs[0]}></img>
                    </GridTile>
                    <GridTile rows={3} style={{marginLeft:10, marginRight:10}}>
                        <img src={imgs[1]}></img>
                    </GridTile>
                    <GridTile rows={3} style={{marginRight:20}}>
                        <img src={imgs[2]}></img>
                    </GridTile>
                    <GridTile rows={3} style={{marginLeft:20}}>
                        <img src={imgs[3]}></img>
                    </GridTile>
                    <GridTile rows={3} style={{marginLeft:10, marginRight:10}}>
                        <img src={imgs[4]}></img>
                    </GridTile>
                    <GridTile rows={3} style={{marginRight:20}}>
                        <img src={imgs[5]}></img>
                    </GridTile>
                </GridList>
            </Card>
        );
    }
}

export default CardViewLayoutWithTwoRow;