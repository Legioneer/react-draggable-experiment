var React = require('react'),
    Draggable = require('react-draggable');

var App = React.createClass({
    handleStart: function (event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    },

    handleDrag: function (event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    },

    handleStop: function (event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    },

    render: function () {
        return (
            // <Draggable/> transparently adds draggable interactivity
            // to whatever element is supplied as `this.props.children`.
            // Only a single element is allowed or an Error will be thrown.
            //
            // The element is moved from its current position using absolute positioning.
            //
            // `axis` determines which axis the draggable can move.
            // - 'both' allows movement horizontally and vertically (default).
            // - 'x' limits movement to horizontal axis.
            // - 'y' limits movement to vertical axis.
            //
            // `handle` specifies a selector to be used as the handle that initiates drag.
            //
            // `cancel` specifies a selector to be used to prevent drag initialization.
            //
            // `grid` specifies the x and y that dragging should snap to.
            //
            // `bounds` specifies movement boundaries. Pass:
            // - 'parent' restricts movement within the node's offsetParent
            //   (nearest node with position relative or absolute), or
            // - An object with left, top, right, and bottom properties. These indicate how far in each direction
            //   the draggable can be moved. See example/index.html for more on this.
            //
            // `start` specifies the x and y that the dragged item should start at. This is generally not necessary
            //   to use (you can use absolute or relative positioning of the child directly), but can be helpful
            //   for uniformity in your callbacks and with css transforms.
            //
            // `moveOnStartChange`, if true (default false), will move the element if there is a change in `start`.
            //   We set this by default to `false` because it can cause unwanted effects if you are not aware of it.
            //
            // `zIndex` specifies the zIndex to use while dragging.
            //
            // `onStart` is called when dragging starts.
            //
            // `onDrag` is called while dragging.
            //
            // `onStop` is called when dragging stops.
            <div>
	            <Draggable
	                //axis="x"
	                handle=".handle"
	                start={{x: 0, y: 0}}
	                moveOnStartChange={false}
	                //grid={[25, 25]}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div>
	                    <div className="handle">Drag from here</div>
	                    <div>Lorem ipsum...</div>
	                </div>
	            </Draggable>

	            <Draggable
	                //axis="x"
	                handle=".handle"
	                start={{x: 0, y: 0}}
	                moveOnStartChange={false}
	                //grid={[25, 25]}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div>
	                    <div className="handle">Drag from here</div>
	                    <div>Lorem ipsum...</div>
	                </div>
	            </Draggable>

	            <Draggable
	                //axis="x"
	                handle=".handle"
	                start={{x: 0, y: 0}}
	                moveOnStartChange={false}
	                //grid={[25, 25]}
	                zIndex={200}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div style={{position: "relative", zIndex: 100}}>
	                	<img className="handle" src="letterX2.png" alt="something" height="142" width="142" />
	                </div>
	            </Draggable>

 				<Draggable
	                //axis="x"
	                //handle=".handle"
	                start={{x: 0, y: 0}}
	                moveOnStartChange={false}
	                //grid={[25, 25]}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div>
	                	<img src="grid.png" alt="something" height="342" width="342" />
	                </div>
	            </Draggable>


 				<Draggable
	                start={{x: 0, y: 0}}
	                moveOnStartChange={false}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div style={{fontSize: 100}}>X</div>
	            </Draggable>
 				<Draggable
	                start={{x: 0, y: 0}}
	                moveOnStartChange={false}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div style={{fontSize: 100}}>O</div>
	            </Draggable>
	        </div>
        );
    }
});
module.exports = App;