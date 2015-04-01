'use strict';

var React = require('react/addons'),
    StoryItem = require('./story-item');

var StoryList = React.createClass({
    render: function() {
        var stories = this.props.stories.map(function(story) {
            return (
                <StoryItem key={story._id} story={story} />
            );
        });

        return (
            <div>
                {stories}
            </div>
        );
    }
});

module.exports = StoryList;
