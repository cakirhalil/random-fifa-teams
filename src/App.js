import React, { useState } from 'react';
import './App.css';

// Logoları import edelim
import barcelona from './assets/logos/barcelona.png';
import realMadrid from './assets/logos/madrid.png';
import manu from './assets/logos/manu.png';
import mcity from './assets/logos/mcity.png';
import arsenal from './assets/logos/arsenal.png';
import bayern from './assets/logos/bayern.png';
import chelsea from './assets/logos/chelsea.png';
import juventus from './assets/logos/juventus.png';
import liverpool from './assets/logos/liverpool.png';
import psg from './assets/logos/psg.png';
import inter from './assets/logos/inter.png';
import milan from './assets/logos/milan.png';




// Logoları bir array'de toplayalım
const teams = [
  { name: 'Barcelona', logo: barcelona },
  { name: 'Real Madrid', logo: realMadrid },
  { name: 'Manchester United', logo: manu },
  { name: 'Manchester City', logo: mcity },
  { name: 'Arsenal', logo: arsenal },
  { name: 'Bayern', logo: bayern },
  { name: 'Chelsea', logo: chelsea },
  { name: 'Juventus', logo: juventus },
  { name: 'Liverpool', logo: liverpool },
  { name: 'PSG', logo: psg },
  { name: 'İnter', logo: inter },
  { name: 'Milan', logo: milan },
];

function App() {
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinTeams = () => {
    setIsSpinning(true);
    let index1 = 0;
    let index2 = 1; // Farklı bir index ile başlayarak farklı takımlar döndürelim

    const intervalTime = 100;
    const interval = setInterval(() => {
      setTeam1(teams[index1]);
      setTeam2(teams[index2]);

      index1 = (index1 + 1) % teams.length;
      index2 = (index2 + 1) % teams.length;

      // Aynı takımı aynı anda döndürmemek için kontrol
      if (index1 === index2) {
        index2 = (index2 + 1) % teams.length;
      }
    }, intervalTime);

    setTimeout(() => {
      clearInterval(interval);

      // Random takım seçme işlemi
      const randomIndex1 = Math.floor(Math.random() * teams.length);
      let randomIndex2;

      do {
        randomIndex2 = Math.floor(Math.random() * teams.length);
      } while (randomIndex1 === randomIndex2); // Aynı takımın seçilmesini önleme

      setTeam1(teams[randomIndex1]);
      setTeam2(teams[randomIndex2]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>FIFA Random Takım Seçici</h1>
      <button onClick={spinTeams} disabled={isSpinning}>
        Takımları Seç
      </button>
      <div className="teams-container">
        <div className="team">
          {team1 && <img src={team1.logo} alt={team1.name} />}
          <p>{team1 ? team1.name : 'Takım 1'}</p>
        </div>
        <div className="team">
          {team2 && <img src={team2.logo} alt={team2.name} />}
          <p>{team2 ? team2.name : 'Takım 2'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
