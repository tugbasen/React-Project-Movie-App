import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown, Button} from "react-bootstrap";

const MovieFilters = () => {
  return (
    <form className="container">
      <div className="movieFilters">
        <Dropdown
          className="border border-1 rounded mb-3 shadow-sm"
          as={ButtonGroup}
          align="end"
          id="dropdown-menu-align-end"
          drop="end"
        >
          <Button variant="white" style={{ width: "175px" }}><b>Sort</b></Button>
          <Dropdown.Toggle split variant="white" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          className="border border-1 rounded mb-3 shadow-sm"
          as={ButtonGroup}
          align="end"
          id="dropdown-menu-align-end"
          drop="end"
        >
          <Button variant="white" style={{ width: "175px" }} ><b>Filters</b></Button>
          <Dropdown.Toggle split variant="white" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          className="border border-1 rounded mb-3 shadow-sm"
          as={ButtonGroup}
          align="end"
          id="dropdown-menu-align-end"
          drop="end"
        >
          <Button variant="white" style={{ width: "175px" }} ><b>Where To Watch</b></Button>
          <Dropdown.Toggle split variant="white" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <button
          type="submit"
          className="btn rounded-pill shadow-sm submitButton"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default MovieFilters;
