import './App.css'
import CardButton from './Components/CardButton/CardButton'
import Header from './Components/Header/Header'
import JournalItem from './Components/JournalItem/JournalItem'
import JournalList from './Components/JournalList/JournalList'
import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import JournalAddButton from './Components/JournalAddButton/JournalAddButton'
import React from 'react'
import JurnalForm from './Components/JurnalForm/JurnalForm'
import Button from './Components/Button/Button'
import { useState } from 'react'

const INITIAL_DATA = [
  {
    title: 'Подготовка к обновлению куров',
     text: 'Горные походы открывают удивительные природные ландшафт',
    date: new Date(),
  },
  {
    title: 'Походы в горы',
    text: 'Думал что очень много времени',
   date: new Date(),
  },
];
function App() {
  const [items, setItems] = useState(INITIAL_DATA);
 
  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date)
    }])
  };

const sortItems = (a,b) => {
  if (a.date < b.date) {
    return 1
  } else{
    return -1;
  }
};
  return ( 
    
    <div className='app'>
<LeftPanel>
 <Header/>
 <JournalAddButton/>
   <JournalList>
    {/* {[<Button>1</Button>,<Button>2</Button>]} */}
    {items.map(el => (
<CardButton>
       <JournalItem 
        title={el.title}
        text={el.text}
        date={el.date}
        /> 
 </CardButton>
    ))}
     
      
    </JournalList>
    </LeftPanel>
<Body>
<JurnalForm onSubmit={addItem}/>
</Body>
</div>
    
  )
};

export default App;
