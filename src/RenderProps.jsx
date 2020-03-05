import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <>
        <div>{mouse.x} - {mouse.y}</div>
      <img src="../dist/cat.jpeg" style={{ width: '40px', position: 'absolute', left: mouse.x, top: mouse.y }} />
      </>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>Déplacez votre souris sur l’écran !</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

export default RenderProps;
