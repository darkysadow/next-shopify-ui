import { getProductsInCollection } from '@/lib/shopify'
import sectionImage from './../assets/img/1.webp'
import sectionImage2 from './../assets/img/2.webp'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Contacts from '@/components/Contacts';

async function Home() {
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='my-4 text-3xl font-medium'>Logo.Homepage</h1>
      <section className='w-full flex justify-center my-4'>
        <div className="container mx-auto flex flex-row justify-center items-center max-md:flex-col max-md:items-center">
          <div className='w-[300px] h-[300px] rounded-full mr-[10%] flex flex-none max-md:mr-0 max-md:my-4'>
            <Image src={sectionImage} objectFit='cover' className='rounded-full' />
          </div>
          <div className='flex flex-col flex-initial max-md:items-center'>
            <h2 className='text-2xl mb-3 max-md:text-center'>We made a masterpiece furniture</h2>
            <p className='max-md:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit accusantium porro ipsam sed culpa totam, voluptate at incidunt reprehenderit officia nam fugit quos delectus expedita voluptas rem minima ab!
            Quis, aperiam sequi impedit voluptatibus velit nobis soluta distinctio blanditiis rem dignissimos perspiciatis, laudantium suscipit illum amet, cumque vero consequatur? Facilis itaque dignissimos nisi rerum consectetur, quasi quod cumque iusto?
            Cumque natus placeat labore rem consequatur accusantium esse voluptate veniam praesentium. Natus tenetur harum autem! Odit magnam officiis dolorum eius in, quia, iusto debitis repellat minima incidunt ab, eum officia?
            Quaerat obcaecati corporis eligendi illo, iure non debitis sed! Architecto est aperiam velit cumque ratione molestiae at odit quod mollitia adipisci perferendis sed earum suscipit explicabo, temporibus cum quo totam.
            Officiis laudantium iusto perspiciatis aliquam magnam! Modi veniam laborum eaque obcaecati laudantium reprehenderit, delectus facere. Ducimus quam minus fugiat, mollitia voluptas quis necessitatibus, recusandae unde dolorem earum optio! Asperiores, voluptas.</p>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center my-4 bg-slate-300 py-4'>
        <div className="container mx-auto flex flex-row-reverse justify-center items-center max-md:flex-col max-md:items-center">
          <div className='w-[300px] h-[300px] rounded-full ml-[10%] flex flex-none max-md:ml-0 max-md:my-4'>
            <Image src={sectionImage2} objectFit='cover' className='rounded-full'/>
          </div>
          <div className='flex flex-col flex-initial max-md:items-center'>
            <h2 className='text-2xl mb-3 max-md:text-center'>Attention to every thing</h2>
            <p className='max-md:text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda debitis, magni doloribus facere beatae voluptatibus qui ex, architecto libero voluptates est animi saepe quo commodi, eius natus possimus dolor quae!
              Quisquam est nesciunt qui iure doloremque. Corrupti, fuga eveniet rerum molestias iste id tenetur sequi cumque amet ipsa consequuntur voluptatem obcaecati dolorem nesciunt! Corporis delectus, earum minus aspernatur non voluptatem.
            </p>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center my-4'>
      <div className="container mx-auto flex flex-col justify-center items-center max-md:flex-col max-md:items-center">
        <h2 className='text-2xl mb-3 max-md:text-center'>Contact Us</h2>
        <Contacts />
      </div>
      </section>
    </div>
  )
}

export default Home;
