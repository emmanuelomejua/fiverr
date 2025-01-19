import React, {  useEffect, useRef, useState } from 'react';
import './gigs.scss'
import down from './down.png';
import GigCard from '../../components/cards/GigCard';
import { useQuery } from '@tanstack/react-query';
import SERVER from '../../utils/server';
import { useLocation } from 'react-router-dom';



interface Filters {
  min: string | null;
  max: string | null;
}


const Gigs = () => {


  const { search } = useLocation();

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');
  const [filters, setFilters] = useState<Filters>({ min: null, max: null });
  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);


  const { error, data, isPending, refetch } = useQuery({
    queryKey: ['gigs', filters],
    queryFn: async () => {
      const queryParams = [];
      if (filters.min) queryParams.push(`min=${filters.min}`);
      if (filters.max) queryParams.push(`max=${filters.max}`);
      if(sort) queryParams.push(`${sort}`)
      const queryString = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';
      const res = await SERVER.get(`gig?${search}${queryString}`);
      return res.data;
    }
  })


  console.log(data);

  const reSort = (type: any) => {
    setSort(type);
    setOpen(false);
  }


  useEffect(() => {
    refetch()
  }, [sort, refetch])


  const apply = () => {
    setFilters({
      min: minRef.current?.value || null,
      max: maxRef.current?.value || null,
    });
    refetch();
  }

  return ( 
    <main className='gigs'>
      <section className="gigs-cont">
        <span className='bc'>FIVER, GRAPHICS & DESIGN </span>
        <h1>AI Artist</h1>
        <p>Explore the boundary of art and technologies with fiver AI artist</p>

      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="text" placeholder='min' ref={minRef}/>
          <input type="text" placeholder='max' ref={maxRef} />
          <button onClick={apply}>Apply</button>
        </div>

        <div className="right">
          <span className='sortby'>Sort By</span>
          <span className='sortType'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
          <img src={down} alt="" onClick={() => setOpen(!open)}/>

          { open &&
          <div className="r-menu">
            { sort === 'sales' ?
              <span onClick={() => reSort('createdAt')}>Newest</span>:
              <span onClick={() => reSort('sales')}>Best Selling</span>
            }
          </div>
          }
        </div>
      </div>

        <section className="cards">
          { isPending ? 
              <div className="">
                Loading...
              </div>:
               error ? 
               <div className="">
                Failed to load gigs
               </div>:
          data.map((gig: any) => (
            <GigCard key={gig._id} item={gig}/>
          ))
          }
        </section>
        
      </section>
    </main>
  )
}

export default Gigs;
