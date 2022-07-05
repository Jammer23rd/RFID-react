import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Button, Row } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
        <div>
            <nav>
                <Link to="/">Home</Link>|{" "}
                <Link to="/about">About</Link>|{" "}
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <hr />

            {/*
                A <Routes> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Routes> any time
                you have multiple routes, but you want only one
                of them to render at a time
            */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="dashboard/*" element={<Dashboard />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

function Home() {
    return (
    <div>
        <h1>Home</h1>
        
        <Row classNamde="mx-0">
            <Button variant="primary">Button #1</Button>
            <Button variant="secondary" className="mx-2">Button #2</Button>
            <Button variant="success">Button #3</Button>
        </Row>
    </div>
    );
}

function About() {
    return <h1>About</h1>;
}

function Dashboard() {
  return (
    <div>
        <p>Look, more routes!</p>
        <nav>
            <Link to="/invoicelist">InvoiceList</Link>|{" "}
            <Link to="/dashboardgraphs">DashboardGraphs</Link>
        </nav>
        <hr />
        <Routes>
            <Route path="/" element={<DashboardGraphs />} />
            <Route path="invoicelist/" element={<InvoiceList />} />
        </Routes>
    </div>
  );
}

function DashboardGraphs() {
    return <h1>DashboardGraphs</h1>;
}

function InvoiceList() {
    return <h1>InvoiceList</h1>;
}

export default App;