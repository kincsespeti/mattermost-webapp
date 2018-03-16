// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import WebrtcSidebar from './webrtc_sidebar';

function mapStateToProps(state) {
    // TODO
    return {
        currentUser: getCurrentUser(state),
        userId: null,
        isCaller: false,
    };
}

export default connect(mapStateToProps)(WebrtcSidebar);
