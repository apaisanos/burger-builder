import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSiteDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSiteDrawer: false
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSiteDrawer: !prevState.showSiteDrawer}
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar 
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated} 
                    open={this.state.showSiteDrawer} 
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);