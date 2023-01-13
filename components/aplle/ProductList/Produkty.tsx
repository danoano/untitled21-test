import type {IProductList} from "../../../types";
import {ProductCard} from "../ProductCards/ProductCard";


interface IProductListProps {
    data: IProductList;
}

export const Produkty = ({data}: IProductListProps) => {

    return (
        <section>
            {
                data.map((product) =>{
                    return (
                        <ProductCard  key={product.id} {...product}></ProductCard>
                    )

                })
            }
        </section>
    )
}