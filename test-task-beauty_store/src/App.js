import React, {useState} from 'react'
import './App.scss';
import StoreItem from './components/StoreItem'
import shampoo_1_1 from "./img/shampoo_1.1.png";
import shampoo_1_2 from "./img/shampoo_1.2.jpg";
import shampoo_2_1 from "./img/shampoo_2.1.jpg";
import shampoo_2_2 from "./img/shampoo_2.2.png";
import shampoo_3_1 from "./img/shampoo_3.1.jpg";
import shampoo_3_2 from "./img/shampoo_3.2.png";



function App() {

const products = [
  {
    productName: 'Шампунь',
    productText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    productPrice: {price: 200},
    productColors: {
                    color: ['Желтый',
                            'Красный',
                            'Синий',
                            'Зеленый',
                            'Фиолетовый',
                            'Коричневый',
                            'Голубой',
                            'Лягушка в обмороке',
                            'Розовый' ]
      },
    activeColor: 'Цвет',
    productValue: {
                    value: [100, 200, 300]
    },
    isAcitve: false,
    isNew: true,
    isInBasket: false,
    id: Math.random(),
    nameRadio: 'shampoo_1',
    productCount: 1,
    img1: <img src = {shampoo_1_2} alt = 'img'/>,
    img2: <img src = {shampoo_1_1} alt = 'img'/>,
  },
  {
    productName: 'Мега Шампунь',
    productText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    productPrice: {price: 150},
    productColors: {
                    color: ['Желтый',
                            'Красный',
                            'Синий',
                            'Зеленый',
                            'Фиолетовый',
                            'Коричневый',
                            'Голубой',
                            'Лягушка в обмороке',
                            'Розовый' ]
      },
    activeColor: 'Цвет',
    productValue: {
                    value: [150, 250, 350]
    },
    isAcitve: false,
    isNew: true,
    isInBasket: false,
    id: Math.random(),
    nameRadio: 'shampoo_2',
    productCount: 1,
    img1: <img src = {shampoo_2_2} alt = 'img'/>,
    img2: <img src = {shampoo_2_1} alt = 'img'/>,
  },
  {
    productName: 'ULTRA Шампунь',
    productText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    productPrice: {price: 175},
    productColors: {
                    color: ['Желтый',
                            'Красный',
                            'Синий',
                            'Зеленый',
                            'Фиолетовый',
                            'Коричневый',
                            'Голубой',
                            'Лягушка в обмороке',
                            'Розовый' ]
      },
    activeColor: 'Цвет',
    productValue: {
                    value: [125, 210, 295]
    },
    isAcitve: false,
    isNew: true,
    isInBasket: false,
    id: Math.random(),
    nameRadio: 'shampoo_3',
    productCount: 1,
    img1: <img src = {shampoo_3_1} alt = 'img'/>,
    img2: <img src = {shampoo_3_2} alt = 'img'/>,
  }
]

const [state, setState] = useState(products)

  function changeActive(id){
    let index = state.findIndex((prod)=>prod.id === id)
    if(!state[index].isActive){
      setState(prevState => prevState.map((prod)=> {
        if(id === prod.id){
          return {...prod, isAcitve: true}
        }
        return prod})
        )
    }
  }

  function closeActive (id){
    setState(prevState => prevState.map((prod)=> {
      if(id === prod.id){
        return {...prod, isAcitve: false}
      }
      return prod})
      )
  }

  function changeCount (id, number) {
    let index = state.findIndex((prod)=>prod.id === id)
    if(state[index].productCount === 1 && number < 0){
        return
    }
    setState(prevState => prevState.map((prod)=> {
      if(id === prod.id){
        return {...prod, productCount: state[index].productCount+number}
      }
      return prod})
      )
}

  function changeColor(id, value){
    setState(prevState => prevState.map((prod)=> {
      if(id === prod.id){
        return {...prod, activeColor: value}
      }
      return prod})
      )
  }

  function addToBasket(id){
    setState(prevState => prevState.map((prod)=> {
      if(id === prod.id){
        return {...prod, isInBasket: true}
      }
      return prod})
      )
  }

  return (
    <div className="App">
      {state.map((prod)=>{ 
        return <StoreItem key = {prod.id}
                          nameRadio={prod.nameRadio}
                          img1={prod.img1}
                          img2={prod.img2}
                          changeCount={changeCount}
                          closeActive={closeActive}
                          changeActive={changeActive}
                          changeColor={changeColor}
                          addToBasket={addToBasket}
                          id={prod.id}
                          isInBasket={prod.isInBasket} 
                          isNew={prod.isNew} 
                          isAcitve={prod.isAcitve} 
                          productValue={prod.productValue}
                          productName={prod.productName}
                          productText={prod.productText}
                          productCount={prod.productCount} 
                          productColors = {prod.productColors}
                          activeColor = {prod.activeColor}
                          productPrice = {prod.productPrice}
        />
      })}
      
    </div>
  );
}

export default App;
