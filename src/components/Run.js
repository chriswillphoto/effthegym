import React, {PureComponent as Component} from 'react';

class Run extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout,
    };
  }

  render() {
    return (
      <div>
        <h1>Run Coming Soon</h1>
      </div>
    );
  }
}

export default Run;
