// NOTE
// type: "input", "multiple"
// Image:
// question:
// Answer : [a,b,c] if multiple 
// Correct : in string/number for "input", in index for "multiple"

import firstImg from  '../images/first.jpg'
import secondImg from  '../images/second.jpg'
import fourthImg from  '../images/fourth.jpg'
import fifthImg from  '../images/fifth.jpg'
import sixthImg from  '../images/sixth.png'
import seventhImg from  '../images/seventh.jpg'
import eighthImg from  '../images/eighth.jpg'
import ninethImg from  '../images/nineth.png'
import tenthImg from  '../images/tenth.jpg'


export const first = {
  type: "input",
  image : firstImg  ,
  question: "",
  answer: [],
  correct: "2",
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 200,
    },
    question: {},
    input: {
      marginTop: "10px",
      textAlign: "center",
      width: "150px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};


export const second = {
  type: "input",
  image : secondImg  ,
  question: "how many leaves in picture ?",
  answer: [],
  correct: "3",
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 200,
    },
    question: { textAlign: "center" , fontSize: "x-large"},
    input: {
      marginTop: "10px",
      textAlign: "center",
      width: "150px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};


export const third = {
  type: "multiple",
  image : ''  ,
  question: "15889, 15687,15573 which is the highest number ?",
  answer: ['15889','15687','15573'],
  correct: 1,
  styles: {
    image: {},
    question: { textAlign: "center",paddingBottom: 40,fontSize: "x-large" },
    input: {},
    answer:{
      width: "25%",
      marginLeft: "5px",
      bottom: "15px",
      borderRadius: 12,
    },
  },
};


export const fourth = {
  type: "multiple",
  image : fourthImg  ,
  question: "apakah ada 10 ikan didalam kolam??",
  answer: ['No','Yes'],
  correct: 1,
  styles: {
    image: {
      display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: 400
    },
    question: { textAlign: "center", marginBottom: "20", fontSize: "x-large" },
    input: {},
    answer: {
      width: "25%",
          marginLeft: "7%",
          bottom: "15px",
          borderRadius: 12,
    },
  },
};


export const fifth = {
  type: "input",
  image : fifthImg  ,
  question: "Berapa Banyak Mobil yang Bewarna Merah??",
  answer: [],
  correct: 1,
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 250,
    },
    question: { textAlign: "center" },
    input: {
      marginTop: "10px",
          textAlign: "center",
          width: "150px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};


export const sixth = {
  type: "input",
  image : sixthImg  ,
  question: "",
  answer: [],
  correct: 5,
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 200,
    },
    question: {},
    input: {
      marginTop: "10px",
      textAlign: "center",
      width: "150px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};


export const seventh = {
  type: "input",
  image : seventhImg  ,
  question: "",
  answer: [],
  correct: 28,
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 500,
    },
    question: {},
    input: {
      marginTop: "10px",
      textAlign: "center",
      width: "150px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};


export const eighth = {
  type: "input",
  image : eighthImg  ,
  question: "",
  answer: [],
  correct: 1,
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 300,
    },
    question: {},
    input: {
      marginTop: "10px",
      textAlign: "center",
      width: "150px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};



export const nineth = {
  type: "input",
  image : ninethImg  ,
  question: "",
  answer: [],
  correct: 1,
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 200,
    },
    question: {},
    input: {
      marginTop: "10px",
      textAlign: "center",
      width: "150px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    answer: {
      marginTop: "10px",
      textAlign: "center",

      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100px",
    },
  },
};



export const tenth = {
  type: "multiple",
  image : tenthImg  ,
  question: "",
  answer: [2,8,4,0],
  correct: 3,
  styles: {
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: 250,
    },
    question: {},
    input: {},
    answer: {
      marginTop: "10px",
      textAlign: "center",
      marginLeft: "3%",
      width: "15%",
    },
  },
};