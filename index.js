// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML ;

const drewPrimaryTest = () => {
  let tomorrowsWorld = {
      numbers: [
          [10, 20], 
          [30, 40], 
          [50, 60], 
          [70, 80], 
          [90, 100]
      ],
      Crew: {
          headOfTeam: 'Monica', // paire clé-valeur
          medicalTeam: [
              'Andrew', // index 0 
              'David', // index 1
              'Joseph', // index 2
              'Georges G.', // index 3
              'Melissa' // index 4
          ], 
          itTeam: [
              'Glaudy', // index 0 
              'Adriana', // index 1
              'Josh', // index 2
              'Inata', // index 3
              'Sakura', // index 4
              'Shikamaru', // index 5
              'Aymeric', // index 6
              'Georges M.' // index 7
          ]
      }, 
  }
  console.log(tomorrowsWorld.numbers[0][1]); // affiche : 20 
}; 
drewPrimaryTest(); 