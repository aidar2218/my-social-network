import './index.css';
import state from "./redux/state";
import React from 'react';
import './index.css';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);