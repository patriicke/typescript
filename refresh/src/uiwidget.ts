//Here we are going to deal with intersection parts
//Maily intersection types are combined wiht & sign
//Here is where we have both type annotation applicable on an object or function

//Here is an example

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIwidget = Draggable & Resizable;

let TextBox: UIwidget = {
  drag: () => {},
  resize: () => {}
};
