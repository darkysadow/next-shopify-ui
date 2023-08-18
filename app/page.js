import { getProductsInCollection } from '@/lib/shopify'
import Image from 'next/image'

export default async function Home() {
  const products = await getProductsInCollection();
  console.log('Component', products);
  return (
    <>
      <div className='text-cyan-100'>TEST</div>
      {products && products.map((product) => <div className='text-cyan-50 p-2' key={product.node.id}>{product.node.title}</div>)}
    </>
    )
}

export async function getServerSideProps() {
  const products = await getProductsInCollection();
  return {
    props: {
      products
    }
  }
}
