import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import Curriculum from './components/Curriculum/Curriculum';
import Refund from './components/Refund/Refund';
import './App.css';
import TopCompanies from './components/Companies/TopCompanies';
import CertificatesAndInternships from './components/Certificates/CertificatesAndInternships';
import InternshipProgram from './components/Internship/InternshipProgram';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Overview />
        <Curriculum />
        <Refund />
        <TopCompanies/>
        <CertificatesAndInternships/>
        <InternshipProgram/>
      </main>
    </div>
  );
}

export default App;
