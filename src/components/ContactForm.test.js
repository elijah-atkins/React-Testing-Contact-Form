import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ContactForm from './ContactForm';

// test("renders App without crashing", () => {
//   render(<ContactForm />);
//   console.log("ea: app.test.js: render test: container: ", container);
// });

test("app contact form accepts input", async ( ) => {
  //Arrange
  const { getByText, getByTestId } = render(<ContactForm />);
  const testFirstName = "Hello";
  const testLastName = "World";
  const testEmail = "hello@world.com";
  const testMessage = "Hello World";


  const firstName = getByTestId("firstName");
  const lastName = getByTestId("lastName");
  const email = getByTestId("email");
  const message = getByTestId("message");
  const button = getByTestId("submit");

  //Act
  act(() => {
    fireEvent.change(firstName, {target: {value: testFirstName}});
    fireEvent.change(lastName, {target: {value: testLastName}});
    fireEvent.change(email, {target: {value: testEmail}});
    fireEvent.change(message, {target: {value: testMessage}});
    fireEvent.click(button);

  });

  //Assert
  expect(firstName.value.length).toBeGreaterThan(3)
  expect(firstName.value).toBe(testFirstName)
  expect(lastName.value).toBe(testLastName)
  expect(email.value).toBe(testEmail)
  expect(message.value).toBe(testMessage)
  
  await waitFor(() => getByTestId('print-out'))
});