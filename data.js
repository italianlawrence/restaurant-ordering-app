const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    }, 
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]


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
                            <button type = 'button' class = 'plus-button'> + </button>
                        </div>
                    </div>            
            </div>
        
        
        `
    }).join('')
}

function renderFood(foodsList) {
    document.getElementById('food-universal-container').innerHTML = foodsList
}

renderFood(returnFoodList(menuArray))