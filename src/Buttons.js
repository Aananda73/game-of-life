import React from "react";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Buttons extends React.Component {
  handleSelect = evt => {
    this.props.gridSize(evt);
  };

  render() {
    return (
      <div className="center">
        <ButtonGroup>
          <Button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </Button>
          <Button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </Button>
          <Button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </Button>
          <Button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </Button>
          <Button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </Button>
          <Button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </Button>
          <DropdownButton
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
            <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
            <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }
}
export default Buttons;
