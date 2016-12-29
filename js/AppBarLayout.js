/**
 * Created by xuxin3-ms on 2016/12/27.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    title: {
        cursor: 'pointer',
        alignItems: 'center',
    },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
class AppBarLayout extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <AppBar
            title={<span style={styles.title}>Title</span>}
            onLeftIconButtonTouchTap={() => this.props.onAppBarLeftIconBtnTouched()}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<FlatButton label="Save"/>}
        />
        );
    }
}

export default AppBarLayout;