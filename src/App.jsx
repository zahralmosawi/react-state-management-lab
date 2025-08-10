import {useState} from 'react'
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters ] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])

let totalStrength = 0
for(const f of team){
  totalStrength += f.strength
}

const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0)

function handleAddFighter(fighter){
  if(money < fighter.price){
    alert('Not enough money')
    return
  }
  const newTeam = [...team, fighter]
  setTeam(newTeam)
  console.log(newTeam) 
  setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id))
  setMoney(f => f - fighter.price)
}


function handleRemoveFighter(fighter){
  setTeam((previous) => previous.filter(p => p.id !== fighter.id))
  setZombieFighters((previous)=>[...previous, fighter])
  setMoney(p => p + fighter.price)
}

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {totalStrength}</h2>
    <h2>Team Agility: {totalAgility}</h2>
    <h2>Team</h2>
    {
      team.length === 0 ? (<p>Pick some team members!</p>) : team.map((team)=>(
        <ul>
          <li key={team.id}>
            <img src={team.img} alt={team.name} />
            <h3>{team.name}</h3>
            <p>Price: {team.price}</p>
            <p>Strength: {team.strength}</p>
            <p>Agility: {team.agility}</p>
            <button onClick={()=>handleRemoveFighter(team)}>Remove</button>
          </li>
        </ul>
      ))
    }
    <ul>
      {
        zombieFighters.map((zombie)=>{
          return <>
          <li key={zombie.id}>
            <img src={zombie.img} alt={zombie.name} />
            <h3>{zombie.name}</h3>
            <p>Price: {zombie.price}</p>
            <p>Strength: {zombie.strength}</p>
            <p>Agility: {zombie.agility} </p>
            <button onClick={()=>handleAddFighter(zombie)}>Add</button>
          </li>
          </>
        })
      }
    </ul>
    </>
  )
}

export default App