/**
 * Created by xuxin3-ms on 2016/12/27.
 */
import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
    titleText: {
        color: 'white',
    },
    toolbar: {
        backgroundColor: 'black',
        height : 60,
        width : '100%',
        position : 'fixed',
        top : 0,
        left : 0,
        zIndex : 99,
        opacity : '0.8'
    },
    leftBtn: {
        marginLeft: 16,
    },
    countryBtn: {
        marginRight: 16,
    },
    searchBtn: {

    }
}

class ToolbarLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar style={styles.toolbar}>
                <ToolbarGroup firstChild={true} style={styles.leftBtn}>
                    <IconButton onClick={() => this.props.onToolBarLeftIconBtnTouched()}>
                        <NavigationMenu color="white"/>
                    </IconButton>
                </ToolbarGroup>
                <ToolbarGroup style={{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                    {/*<ToolbarTitle text="CastBox" style={styles.titleText}/>*/}
                    <img src="../images/ic_face_white_24dp_1x.png" />
                </ToolbarGroup>
                <ToolbarGroup style={styles.searchBtn}>
                    <IconButton>
                        <ActionSearch size="6" color="white"/>
                    </IconButton>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true} style={styles.countryBtn}>
                    <div>
                        <font color="white" size="4" >
                            <u>
                                US
                            </u>
                        </font>
                    </div>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default ToolbarLayout;