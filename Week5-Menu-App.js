class Order {
    constructor(food) {
        this.food = food;
    }
    describe() {
        return `In your order: ${this.food}.`;
    }
}

class Menu {
    constructor() {
        //set up initial data
        this.items = []; //array of items
        this.selectedItem = null;
    }

    start() {
        let selection = this.showMenuOptions();
        while(selection != 0) {
            switch (selection) {
                case "1":
                    this.startOrder();
                    break;
                case "2":
                    this.viewOrder();
                    break;
                case "3":
                    this.deleteOrder();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
            }
            alert("Thank you, come again!");
        }

        showMenuOptions() {
            return prompt(`Welcome to the cafe!

            0. Leave
            1. Add to order
            2. View order
            3. Remove items
            `);
        }

        startOrder() {
            let food = prompt('What would you like?');
            this.items.push(new Order(food));
        }
              
        viewOrder() {
            let orderString = '';
            for (let i = 0; i < this.items.length; i++) {
                orderString += i + '. ' + this.items[i].food + '\n';
            }
            alert('In your order:' + '\n\n' + orderString);
        }

        deleteOrder() {
            let index = prompt('Enter the index of the item to remove:');
            if (index > -1 && index < this.items.length) {
                this.items.splice(index, 1);
            }
        }
    } 

const menu = new Menu()
menu.start()