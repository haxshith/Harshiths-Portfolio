import React from 'react';

const Achievements = () => {

  return (
    <div className="container mx-auto mb-5 p-5 md:p-0" id="Achievements">
    <h1 className="mb-5 text-4xl text-blue-500">Achievements</h1>
    <p className="text-black-1000">
        ➢ I have secured Global Rank of 390 in CodeChef weekly contest 119.<br />
        ➢ I have solved more than 200 problems on CodeChef and CodeForces combined.<br />
        ➢ Rated 2★ on Code Chef (Max Rating:1656) in{' '}
        <a href="https://www.codechef.com/users/ammiee" target="_blank" rel="noopener noreferrer" className="highlight-link">
          CodeChef↗
        </a>
        .
        <br />
        ➢ Rated 1230 in{' '}
        <a href="https://codeforces.com/profile/harshith2026" target="_blank" rel="noopener noreferrer" className="highlight-link">
          CodeForces↗
        </a>
        <br />
        ➢ I have successfully completed HacktoberFest2023 with 4+2 merged pull requests.<br />
        ➢ I have been selected for GSSOC'2023.
      </p>
  </div>
  );
};

export default Achievements;
