// import React from 'react';
//@ts-ignore
global.performance = global.performance || {
  now: () => new Date().getTime(),
};
const React = require('react');


const NewReact = {};

Object.assign(NewReact, React);

const originalCreateElement = NewReact.createElement;

const createElement = (...args) => {
  if (args[1] && args[1].hasOwnProperty('if')) {
    if (!args[1].if) {
      return null;
    } else {
      delete args[1].if;
    }
  }
  var ele = originalCreateElement(...args);
  return ele;
};

NewReact.createElement = createElement;

module.exports = NewReact;
