import React from 'preact/compat'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: [],
      items: [
        { id: 1, title: "Gray Chair", img: "chair-grey.jpeg", desc: "Comfortable gray chair for home and office.", category: "chairs", price: "49.99" },
        { id: 2, title: "Wooden Table", img: "table-wood.jpeg", desc: "Sturdy oak table for the living room.", category: "tables", price: "199.99" },
        { id: 3, title: "Soft Armchair", img: "armchair-soft.jpeg", desc: "Comfortable armchair with soft upholstery.", category: "armchairs", price: "149.99" },
        { id: 4, title: "White Wardrobe", img: "wardrobe-white.jpeg", desc: "Stylish white wardrobe for clothes.", category: "wardrobes", price: "299.99" },
        { id: 5, title: "Double Bed", img: "bed-double.jpeg", desc: "Spacious double bed with mattress.", category: "beds", price: "399.99" },
        { id: 6, title: "Nightstand", img: "nightstand.jpeg", desc: "Compact nightstand for the bedroom.", category: "nightstands", price: "79.99" },
        { id: 7, title: "Folding Sofa", img: "sofa-bed.jpeg", desc: "Comfortable sofa that easily folds out.", category: "sofas", price: "349.99" },
        { id: 8, title: "Wall Shelf", img: "shelf-wall.jpeg", desc: "Elegant wooden wall shelf.", category: "shelves", price: "59.99" },
        { id: 9, title: "Bookcase", img: "bookcase.jpeg", desc: "Bookcase for storing books and accessories.", category: "bookcases", price: "189.99" },
        { id: 10, title: "Office Chair", img: "office-chair.jpeg", desc: "Ergonomic chair for work.", category: "chairs", price: "129.99" },
        { id: 11, title: "Glass Table", img: "glass-table.jpeg", desc: "Modern table with a glass surface.", category: "tables", price: "249.99" },
        { id: 12, title: "Wooden Dresser", img: "dresser-wood.jpeg", desc: "Spacious dresser with multiple drawers.", category: "dressers", price: "219.99" },
        { id: 13, title: "Soft Pouf", img: "pouf.jpeg", desc: "Small comfortable pouf for relaxation.", category: "poufs", price: "39.99" },
        { id: 14, title: "Coffee Table", img: "coffee-table.jpeg", desc: "Compact coffee table for the living room.", category: "tables", price: "89.99" },
        { id: 15, title: "Corner Sofa", img: "corner-sofa.jpeg", desc: "Large corner sofa for the living room.", category: "sofas", price: "599.99" },
        { id: 16, title: "Bar Stool", img: "bar-chair.jpeg", desc: "High chair for a bar counter.", category: "chairs", price: "99.99" },
        { id: 17, title: "Gaming Chair", img: "gaming-chair.jpeg", desc: "Chair for comfortable gaming and work.", category: "armchairs", price: "199.99" },
        { id: 18, title: "Vanity Table", img: "vanity-table.jpeg", desc: "Elegant table for cosmetics.", category: "tables", price: "179.99" },
        { id: 19, title: "Metal Shelf", img: "metal-shelf.jpeg", desc: "Sturdy metal shelf for storage.", category: "shelves", price: "139.99" },
        { id: 20, title: "Kids Bed", img: "kids-bed.jpeg", desc: "Comfortable bed for kids.", category: "beds", price: "299.99" }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header order={this.state.order} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>

    )
  }
  addToOrder(item) {
    let isInArray = false
    this.state.order.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ order: [...this.state.order, item] })
  }
  deleteOrder(id) { 
    this.setState({order: this.state.order.filter(el => el.id !== id)})
  }
}


export default App
