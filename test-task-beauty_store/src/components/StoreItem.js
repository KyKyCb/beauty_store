import React, {useState, useEffect, useRef} from 'react'
import arrow from "../img/Vector_1.svg";
import basket from "../img/basket.png";
import basket_done from "../img/done.png";

export default function StoreItem (props){

const [checkProduct, setCheckProduct] = useState({value: {...props.productValue.value}, 
                                                 selected: props.productValue.value[0],
                                                 price: props.productPrice.price})

useEffect(()=>{
        setCheckProduct(prevState=> {
            return {...prevState, 
                        price: Math.round(props.productPrice.price*props.productCount*checkProduct.selected/105)}})
    
}, [checkProduct.selected, props.productCount, props.productPrice.price])

const changePic = useRef()
const changeColor = useRef()
const colorSelect = useRef()

function colorSelectionHandler(){
    changeColor.current.classList.toggle('__active')
    document.body.addEventListener('mousemove', colorWindowPopup)
    
}

function colorWindowPopup(e){
    const path = e.path || (e.composedPath && e.composedPath())
    if(!path.includes(colorSelect.current) && !path.includes(changeColor.current)){
        changeColor.current.classList.remove('__active')
        document.body.removeEventListener('mousemove', colorWindowPopup)
    }    
}

function colorSwitch(id, value){
    props.changeColor(id, value)
    changeColor.current.classList.remove('__active')
    document.body.removeEventListener('mousemove', colorWindowPopup)
}

function radioCheckHandler(event){
    setCheckProduct(prevState => {return {...prevState, 
                                            selected: Number(event.target.value),}})
}

return (
    <div ref={changePic} 
    className = 'store-item__layout' 
    onMouseOver = {()=>props.changeActive(props.id)} 
    onMouseOut = {()=>props.closeActive(props.id)}>
        <div  className = 'store-item__intro' >
            {props.isAcitve ? 
            <div className = 'store-item__image'>
                {props.img1}
            </div> : 
            <div className = 'store-item__image'>
                {props.img2}
            </div>}
            {props.isNew ? <div className = 'store-item__image-new'>New</div> : null}
            {props.isInBasket ? 
            <div className = 'store-item__image-basket'><img src = {basket_done} alt = 'img'/></div> : 
            <div className = 'store-item__image-basket'><img src = {basket} alt = 'img'/></div>
            }
            
        </div>
        <div className = 'store-item__about'>
            <div className = 'store-item__head'>
                <h3>{props.productName}</h3>
            </div>
            <div className = 'store-item__text'>
                <p>{props.productText}</p>
            </div>

        </div>
        <div className = 'store-item__color-and-price'>
            <div ref={changeColor} className = 'store-item__color-selection '>
                <div  className = 'selection_main' onClick ={colorSelectionHandler}>
                    <span>{props.activeColor}</span>
                    <span><img src = {arrow} alt = 'arrow'/></span>
                </div>
                <div ref = {colorSelect} className = 'selection_sub'>
                    <div className = 'selection_colors'>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[0])}>{props.productColors.color[0]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[1])}>{props.productColors.color[1]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[2])}>{props.productColors.color[2]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[3])}>{props.productColors.color[3]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[4])}>{props.productColors.color[4]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[5])}>{props.productColors.color[5]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[6])}>{props.productColors.color[6]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[7])}>{props.productColors.color[7]}</p>
                            <p onClick = {()=>colorSwitch(props.id, props.productColors.color[8])}>{props.productColors.color[8]}</p>
                    </div>
                </div>
            </div>
            <div className = 'store-item__price'>
                <p>{checkProduct.price} грн</p>
            </div>
        </div>

        <div className = 'store-item__volume'>
        <label className = 'store-item__input-container'>{checkProduct.value[0]} мл
                <input name = {props.nameRadio} 
                type = 'radio' 
                value = {checkProduct.value[0]}
                checked = {checkProduct.selected === checkProduct.value[0]}
                onChange = {radioCheckHandler}/>
                <span className = 'store-item__checkmark'></span>  
            </label>
            <label className = 'store-item__input-container'>{checkProduct.value[1]} мл
                <input name = {props.nameRadio} 
                type = 'radio'
                value = {checkProduct.value[1]}
                checked = {checkProduct.selected === checkProduct.value[1]}
                onChange = {radioCheckHandler}/>
                <span className = 'store-item__checkmark'></span>
            </label>
            <label className = 'store-item__input-container'>{checkProduct.value[2]} мл
                <input name = {props.nameRadio} 
                type = 'radio'
                value = {checkProduct.value[2]}
                checked = {checkProduct.selected === checkProduct.value[2]}
                onChange = {radioCheckHandler}/>
                <span className = 'store-item__checkmark'></span>
            </label>
        </div>
        
        <div className = 'store-item__count-and-buyButton'>
            <div className = 'store-item__count'>
                <button onClick = {()=>props.changeCount(props.id,-1)}>-</button>
                <span>{props.productCount}</span>
                <button onClick = {()=>props.changeCount(props.id, +1)}>+</button>
            </div>
            <div className = 'store-item__button'>
                <button onClick = {()=>props.addToBasket(props.id)} >Купить</button>
            </div>
        </div>
    </div>
)
}