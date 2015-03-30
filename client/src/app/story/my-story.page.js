'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication');

var MyStoryPage = React.createClass({
    mixins: [RequireAuthentication],
    render: function() {
        return (
            <main>
                <h1>My story</h1>
            </main>
        );
    }
});

module.exports = MyStoryPage;
