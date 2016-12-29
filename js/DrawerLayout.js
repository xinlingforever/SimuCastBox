/**
 * Created by xuxin3-ms on 2016/12/27.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class DrawerLayout extends React.Component {


    constructor(props) {
        super(props);
        //this.state = {open: this.props.open};
    }

    // static defaultPorps = {
    //     open : false,
    // }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={600}
                    open={this.props.open}
                    onRequestChange={(open) => this.props.onDrawerRequestChanged(open)}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default DrawerLayout;