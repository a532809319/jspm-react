'use strict';

import  'semantic-ui/semantic.css!';
import React from 'react';
import  ReactDOM from  'react-dom';
import CommentBox from './comment/CommentBox';
var comments=[
  {"author":"胡凯","data":"5s真男人","text":"天气真好"},
{"author":"胡凯2","data":"5s真男3人33","text":"33天气真好"}
];
ReactDOM.render(<CommentBox data={comments} />,document.getElementById('app'));
