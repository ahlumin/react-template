import { configure } from "@storybook/react";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal");
document.body.append(modalRoot);

const req = require.context("../src", true, /story\.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
