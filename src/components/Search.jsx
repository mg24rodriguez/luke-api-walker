import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import './Search.css'

const Search = ({dropdownValue, onDropdownValue, onInputValue, handleSearch}) => {

    return (
        <div>
            <Dropdown onSelect={onDropdownValue} >
            <Dropdown.Toggle variant="dark  " id="dropdown-basic">
                {`Buscar por ${dropdownValue}`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="people">People</Dropdown.Item>
                <Dropdown.Item eventKey="films">Films</Dropdown.Item>
                <Dropdown.Item eventKey="planets">Planets</Dropdown.Item>
                <Dropdown.Item eventKey="vehicles">Vehícles</Dropdown.Item>
                <Dropdown.Item eventKey="starships">Starships</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <InputGroup className="Input">
                <FormControl
                onChange = {(e) => onInputValue(e.target.value)}
                placeholder="Ingresa un id entre 1 y 20"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button 
                onClick = {handleSearch}
                variant="outline-secondary"
                id="button-addon2"
                >
                Buscar
                </Button>
            </InputGroup>
        </div>        
    )
}

export default Search;