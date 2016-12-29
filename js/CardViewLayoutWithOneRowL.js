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
        flexWrap: 'nowrap',
        // overflowX: 'auto',
        cellHeight: 'auto',
        marginTop: '50px',
    },
    card: {
        height: '700px',
    }
}

const imgs = [
    '../images/card_image_500_001.jpg',
    '../images/card_image_500_002.jpg',
    '../images/card_image_500_003.jpg',
];

class CardViewLayoutWithOneRowL extends React.Component {

    static defaultProps = {
        title : 'Default Title',
    }

    render() {
        let GridTileList = [];
        for (let i=0; i<3; i++) {
            if (i==0) {
                GridTileList.push(
                    <GridTile key={i} rows={3} style={{marginLeft: '20px'}}>
                        <img src={imgs[i]}/>
                    </GridTile>
                )
            }else if(i==2) {
                GridTileList.push(
                    <GridTile key={i} rows={3} style={{ marginRight: '20px'}}>
                        <img src={imgs[i]}/>
                    </GridTile>
                )
            }else{
                GridTileList.push(
                    <GridTile key={i} rows={3}>
                        <img src={imgs[i]}/>
                    </GridTile>
                )
            }
        }
        return (
            <Card style={styles.card}>
                <CardHeader>
                    <span style={{float: 'left',}}>
                        <font style={{fontSize: '60px'}}>{this.props.title}</font>
                    </span>
                    <span style={{float: 'right',}} onClick={() => console.log("click right text")}>
                        <font style={{fontSize: '50px', color: 'red'}}>See All</font>
                    </span>
                </CardHeader>
                <GridList cols={3} padding={15} style={styles.gridList}>
                    {GridTileList}
                </GridList>
            </Card>
        );
    }
}

export default CardViewLayoutWithOneRowL;