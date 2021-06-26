import React from "react";
import { Button, Classes, H5, Intent, Popover } from "@blueprintjs/core";

export function WebButton() {
  return (
    <Popover
      popoverClassName={Classes.POPOVER_CONTENT_SIZING}
      content={
        <div>
          <H5>Confirm deletion</H5>
          <p>
            Are you sure you want to delete these items? You won't be able to
            recover them.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 15,
            }}
          >
            <Button
              className={Classes.POPOVER_DISMISS}
              style={{ marginRight: 10 }}
            >
              Cancel
            </Button>
            <Button intent={Intent.DANGER} className={Classes.POPOVER_DISMISS}>
              Delete
            </Button>
          </div>
        </div>
      }
      interactionKind="click"
    >
      <Button>I am button from the web</Button>
    </Popover>
  );
}
