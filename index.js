import React from 'react';

const NewReact = {};

Object.assign(NewReact, React);

const originalCreateElement = NewReact.createElement;

const createElement = (...args) => {
  if (args[1] && args[1].hasOwnProperty('if')) {
    if (!args[1].if) {
      return null;
    }
  }
  var ele = originalCreateElement(...args);
  return ele;
};

NewReact.createElement = createElement;

export default NewReact;
