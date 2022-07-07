import React, { useState } from "react";
import Dialogue from "./Dialogue";
import { DialogTitle } from "./Children/DialogTitle";
import { DialogList } from "./Children/DialogList";
import { ListItem } from "./Children/ListItem";
// use pat-ui icons
import Icon from "../Icon";
// use pat-ui buttons
import Button from "../Button";

export default {
  title: 'Dialogue',
  component: Dialogue
}

const emails = [
  {
    id: 1,
    email: 'janedoe@gmail.com'
  },
  {
    id: 2,
    email: 'john_doe@yahoo.com'
  },
];

export const SimpleDialog = () => {
  const [modalShown, setModalShown] = useState(false);

  const toggleModal = () => setModalShown(!modalShown);

  return (
    <>
      <h3>Simple Dialog:</h3>
      <p>Developers can provide title, content, actions of the dialog component from children props of the component.</p>
      <p>Users shouldn’t be able to scroll the page when the dialog is open</p>
      <div className="simple-dlg dlg-box">
        {/* add Selected: {selectedValue later.} */}
        <Button
          btnType="default"
          disabled={false}
          onClick={toggleModal}
        >
          Simple Dialog
        </Button>
        <Dialogue
          isOpen={modalShown}
          dlgOnClick={toggleModal}
        >
          <DialogTitle>Set backup account</DialogTitle>
          <DialogList>
            {emails.map(email => (
              <ListItem itemOnClick={toggleModal} key={email.id}>
                <Icon
                  disabled={false}
                  loading={false}
                  name='users'
                  className="dlg-icon"
                />
                {email.email}
              </ListItem>
            ))}
            <ListItem itemOnClick={toggleModal}>
              <Icon
                disabled={false}
                loading={false}
                name='plus'
                className="dlg-icon dlg-add"
              />
              Add account
            </ListItem>
          </DialogList>
        </Dialogue>
      </div>
    </>
  );
};

export const DiffTypeDialog = () => {
  const [modalShown, setModalShown] = useState(false);

  const toggleModal = () => setModalShown(!modalShown);

  return (
    <>
      <SimpleDialog />
      <h3>Alert Dialog: </h3>
      <p>Alert Dialogs requires acknowledgement to disregard interruption. They either ask a question or make a statement related to the action buttons.</p>
      <p>If you use a title, use a clear question/statement with an explanation.</p>
      <div className="alert-dlg dlg-box">
        <Button
          btnType="default"
          disabled={false}
          onClick={toggleModal}
        >
          Alert Dialog
        </Button>
        <Dialogue
          isOpen={modalShown}
          dlgOnClick={toggleModal}
        >
          <DialogTitle>Alert Heading</DialogTitle>
        </Dialogue>
      </div>
      <h3>Form Dialog: </h3>
      <p>Form dialogs usually require a response from the user to fill out via a form field. (i.e name field to personalize web page.)</p>
      <div className="form-dlg dlg-box">
        <Button
          btnType="default"
          disabled={false}
          onClick={toggleModal}
        >
          Form Dialog
        </Button>
        <Dialogue
          isOpen={modalShown}
          dlgOnClick={toggleModal}
        >
          <DialogTitle>Form Heading</DialogTitle>
        </Dialogue>
      </div>
    </>
  );
};
