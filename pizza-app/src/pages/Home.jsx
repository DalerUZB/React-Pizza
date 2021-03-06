import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../Components';


function Home({ items }) {
    return (
        <div className="container">
            <div className="content__top">
                {/* this is CATEGORIES components */}
                <Categories items={[
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                ]} />
                <SortPopup names={[
                    'популярности',
                    'цене',
                    'алфавиту',

                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(obj =>
                        <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}

export default Home
