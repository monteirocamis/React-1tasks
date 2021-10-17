import { useState } from 'react';
 import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () =>{
const [list, setList] = useState<Item[]>([
  {id: 1, name: 'comprar pao', done:false},
  {id: 2, name: 'fazer exercicio', done:true},
]);


  return (
  
   <C.Container >
     <C.Area>
      <C.Header>
        Lista de Tarefas
      </C.Header>

          { /*area de nova tarefa */}
          <AddArea />
          { /*lista de tarefa */}
          {list.map((item,index)=>(
            <ListItem key={index} item={item}/>
          ))}
     </C.Area>
   </C.Container>
  );
}

export default App;
