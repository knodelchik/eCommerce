import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'wardrobes',
                    name: 'Wardrobes'
                },
                {
                    key: 'nightstands',
                    name: 'Nightstands'
                },
                {
                    key: 'sofas',
                    name: 'Sofas'
                },
                {
                    key: 'shelves',
                    name: 'Shelves'
                },
                {
                    key: 'bookcases',
                    name: 'Bookcases'
                },
                {
                    key: 'dressers',
                    name: 'Dressers'
                },
                {
                    key: 'poufs',
                    name: 'Poufs'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories