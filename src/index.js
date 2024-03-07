import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  speak(){
    console.log('I am', this.name, 'and I am', this.age, 'years old.');
  }
}
const animal1 = new Animal('Adwait', 30);
animal1.speak();

console.log(animal1);

class Lion extends Animal{
  constructor(name, age, furColor){
    super(name, age);
    this.furColor = furColor;
  }
  roar(){
    console.log('I am', this.name, 'also I am', this.age, 'years old. And my fur color is ', this.furColor);
  }
}

const lion1 = new Lion('Srush', 28, 'Red');
lion1.roar();

console.log(lion1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
