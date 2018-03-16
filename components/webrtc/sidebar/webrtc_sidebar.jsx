// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import WebrtcController from '../controller';

export default class WebrtcSidebar extends React.Component {
    static propTypes = {
        currentUser: PropTypes.object,
        userId: PropTypes.string,
        isCaller: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        };
    }

    onShrink = () => {
        this.setState({expanded: false});
    }

    toggleSize = (e) => {
        if (e) {
            e.preventDefault();
        }
        this.setState((prevState) => {
            return {expanded: !prevState.expanded};
        });
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.userId === null) {
            this.setState({expanded: false});
        }
    }

    render() {
        let content = null;

        if (this.props.userId !== null) {
            content = (
                <WebrtcController
                    currentUser={this.props.currentUser}
                    userId={this.props.userId}
                    isCaller={this.props.isCaller}
                    expanded={this.state.expanded}
                    toggleSize={this.toggleSize}
                />
            );
        }

        return (
            <div
                className={classNames('sidebar--right', 'webrtc', {
                    'webrtc--show': this.props.userId !== null,
                    'sidebar--right--expanded': this.state.expanded,
                    'move--left': this.props.userId !== null,
                })}
                id='sidebar-webrtc'
            >
                <div
                    onClick={this.onShrink}
                    className='sidebar--right__bg'
                />
                <div className='sidebar-right-container'>
                    {content}
                </div>
            </div>
        );
    }
}
