import { getProductsInCollection } from "@/lib/shopify"

export default async function Tables(props) {
    const products = await getProductsInCollection();
    return (
        <div className="container">
            <div>TEST</div>
            {products && products.map((product) =>
                <div key={product.node.id}>
                    {product.node.title}
                    {product.node.media && product.node.media.edges.length > 0 ?
                        <a href={product.node.media.edges[0].node.sources[0].url}>{product.node.media.edges[0].node.sources[0].url}</a>

                        : ''}
                </div>)}
        </div>
    )
}
