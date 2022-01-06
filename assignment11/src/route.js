import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './router/login';
import Regi from './router/regi';
import List from './router/list';
import Dele from './router/dele';
import Update from './router/update';

const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/regi" element={<Regi />} />
        <Route path="/list" element={<List />} />
        <Route path="/dele" element={<Dele />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </div>
)
export default Router;