import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Forms.css";

export default function Forms({ template, peoples }) {
  const [newUser, setNewUser] = useState(template);
  const [userInfo, setUserInfo] = useState(peoples);

  const formSubmit = () => {
    setUserInfo({ ...userInfo, newUser });
  };

  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const changeHandlerCheck = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.checked });
    console.log(newUser);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setNewUser(template);
  };
  return (
    <div className="form-container">
      <div className="container shadow p-3 mb-5 bg-black rounded">
        <div className="h3 pb-2 mb-4 text-warning border-bottom border-secondary">
          User Register Form
        </div>
        <Form>
          <FormGroup className="name-area">
            <Label htmlFor="name">Name Surname</Label>
            <Input
              id="name"
              name="name"
              placeholder="Name Surname"
              type="text"
              value={newUser.name}
              onChange={changeHandler}
            />
          </FormGroup>

          <FormGroup className="mail-area">
            <Label htmlFor="mail">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              value={newUser.email}
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup className="role-area">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              name="role"
              type="text"
              value={newUser.role}
              placeholder="role"
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="check"
              id="check"
              type="checkbox"
              checked={newUser.check}
              onChange={changeHandlerCheck}
            />{" "}
            <Label htmlFor="check" check>
              Check the Rules
            </Label>
          </FormGroup>
          <FormGroup>
            <Button
              color="warning"
              outline
              size="sm"
              className="form-button"
              type="submit"
              onClick={formSubmit}
            >
              Submit
            </Button>

            <Link to="/dblist">
              <Button
                color="warning"
                outline
                size="sm"
                className="form-button ms-3"
              >
                Show <br />
                Database
              </Button>
            </Link>

            <Button
              color="warning"
              outline
              size="sm"
              className="form-button ms-3"
              onClick={resetForm}
            >
              Reset Form
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
