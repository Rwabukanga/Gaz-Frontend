import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddBranch from './components/AddBranch';
import Users from './components/Users';
import FileUpload from './components/FileUpload';
import List from './components/List';

function App() {
  return (
    <Router>
                <div className="App">
              
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                         <Route
                            exact
                            path="/addBranch"
                            element={<AddBranch />}
                        ></Route>
                        <Route
                            exact
                            path="/alluser"
                            element={<Users />}
                        ></Route>

                        <Route
                            exact
                            path="/upload"
                            element={<FileUpload />}
                        ></Route>
                        <Route
                            exact
                            path="/list"
                            element={<List />}
                        ></Route>

                    </Routes>
                </div>
            </Router>
  );
}

export default App;
