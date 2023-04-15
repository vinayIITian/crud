import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Read() {
  let navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://api.thomso.in/apiV1/assignment").then((getData) => {
      setApiData(getData.data);
    });
  });
  const setData = (id, name, email, contact) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
  };

  const getData = () => {
    axios.get("https://api.thomso.in/apiV1/assignment").then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://api.thomso.in/apiV1/assignment/${id}`)
      .then(() => {
        getData();
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Link to="/">
        <Button color="blue">Add Employee</Button>
      </Link>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Contact</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.name}.</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.contact}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      color="green"
                      onClick={() =>
                        setData(data.id, data.name, data.email, data.contact)
                      }
                    >
                      Update
                    </Button>
                  </Link>
                  <Link to="/delete">
                    <Button color="red" onClick={() => onDelete(data.id)}>
                      Delete
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
