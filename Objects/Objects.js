//////////////////////////////////////
////////creation of objects///////////
//////////////////////////////////////

function CITStudent(name, age, height, hairColor, currentPhone) {
    this.name = name
    this.age = age
    this.height = height
    this.hairColor = hairColor
    this.phone = currentPhone
    this.items = [this.phone]
    console.log(this.items[1])
    
    this.give =function(newItem) {
        this.items.push(newItem)
    }
    
    this.showItems = function() {
        console.log("Items in " + this.name + "'s posession:")
        console.log(this.items)
    }
}

var cody = new CITStudent("Cody", 24, 6, "Red", "Galaxy Note 4")
cody.showItems()
cody.give("Republic of Gamer Laptop")
cody.give("Girlfriend")
cody.showItems()