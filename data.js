const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕",
        qty: 0
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1,
        qty: 0
    }, 
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2,
        qty: 0
    }
]

const orderContainer = document.getElementById('order-container')
const orderBtnContainer = document.getElementById('order-btn-container')
const btnPay = document.getElementById('btn-pay')

btnPay.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.form-data').classList.toggle('hidden')
            document.querySelector('.overlay').classList.toggle('hidden')

})


let selectedFoods = []


document.addEventListener('click', function(e) {
    if(e.target.dataset.btn)
        handleBtnClick(e.target.dataset.btn)
    else if(e.target.dataset.remove)
        handleRemoveClick(e.target.dataset.remove)
})


function handleBtnClick(btnId) {
    const foodObj = menuArray.filter(function(food) {
        return food.id === Number(btnId) 
    })[0]

    let totalPrice = 0

    if(selectedFoods.includes(foodObj)) {
        foodObj.qty++

    }
    else {
        foodObj.qty++
        totalPrice = foodObj.price
        selectedFoods.push(foodObj)
    }

    renderSelected()
}

function handleRemoveClick(removeId) {
    const foodObj = menuArray.filter(function(food) {
        return food.id === Number(removeId)
    })[0]

    foodObj.qty = 0

    selectedFoods = selectedFoods.filter(function(food) {
        return foodObj != food 
    })

    renderSelected()
}


function returnFoodList(menu) {
  return menu.map(function(food) {

       

        return `
            <div class = 'food-container'>
                <div class = 'emoji'> ${food.emoji} </div>
                    <div class = 'food-container-info'>

                        <div class = 'food-info'>
                            <p class = 'food-title'> ${food.name}</p>
                            <p class = 'ingredients'> ${food.ingredients.join(', ')} </p>
                            <p class = 'food-price'> ${food.price}€ </p>
                        </div>

                        <div class = 'button-container'>    
                            <button type = 'button' class = 'plus-button' data-btn = ${food.id}> + </button>
                        </div>
                    </div>            
            </div>
        `
    }).join('') 

}

function renderFood(foodsList) {
    document.getElementById('food-universal-container').innerHTML = foodsList
}

function renderSelected() {
    let finalString = ''

     let totalPrice = 0

        for(let food of selectedFoods) 
            totalPrice += food.price * food.qty
        

    for(let food of selectedFoods) {
        finalString += `
                            <div class = 'food-info-container'>

                                <div>
                                    <span class = 'food-info-title'> ${food.name}</span> 
                                    <span class = 'food-info-remove' data-remove = '${food.id}'> Remove </span>                               
                                </div>
                            
                                ${food.price * food.qty}€
                            
                            </div>
                        `
    }

    orderContainer.innerHTML = finalString + `<div class = "totalPrice"> 
                                                <span class = 'total-price-label'> 
                                                    Total price: &nbsp; 
                                                </span> ${totalPrice}
                                              </div>
                                              `

    
    const btn = document.querySelector('.btn-order')

  if(selectedFoods.length > 0) {

    if(!btn) {
        const btn = document.createElement('button')
        btn.textContent = 'Order now'
        btn.classList.add('btn-order')

        btn.addEventListener('click', function(e) {
            document.querySelector('.form-data').classList.toggle('hidden')
            document.querySelector('.overlay').classList.toggle('hidden')
        })

        orderBtnContainer.appendChild(btn)
    }

} else {

    if(btn) {
        orderBtnContainer.removeChild(btn)
    }
}
}

renderFood(returnFoodList(menuArray))