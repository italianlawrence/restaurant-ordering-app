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


document.addEventListener('click', function(e) {
    if(e.target.dataset.btn)
        handleBtnClick(e.target.dataset.btn)
})


function handleBtnClick(btnId) {
    const foodObj = menuArray.filter(function(food) {
        return food.id === Number(btnId) 
    })[0]

    foodObj.qty++;
    renderTotal(menuArray)
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

function renderTotal(foodsList) {
    foodsList.forEach(function(food) {
        orderContainer.innerHTML = `

            <div class = 'food-total'>
                a ${food.qty} 
        
        
        `
    })
}

renderFood(returnFoodList(menuArray))