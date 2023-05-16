// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function Calculate() {
  // this function calculates the cost of pizza
  
  let subtotal = 0


  const theSize= document.getElementById('size').value
  
  if(theSize == "small") {
    subtotal = subtotal + 7
  } else if(theSize == "medium") {
    subtotal = subtotal + 11
  } else if (theSize == "large") {
    subtotal = subtotal + 17
  }

  // calculate tax
  let tax = subtotal * 0.13

  // calculate total
  let total = subtotal + tax

  // print total
  document.getElementById('total').innerHTML = ("total: $") + total.toFixed(2)
}