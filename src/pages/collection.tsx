import Grid from "../components/grid";
import Card from "../components/card";
import Navigation from "../components/navigation"
import products, { filterFn, searchProducts, sortingFn } from "../content/products";
import Icon from "../components/icon";
import icons from "../components/icon/icons.json";
import Dropdown from "../components/dropdown";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Categories, Filters } from "../types";
import { categories, filters } from "../content/dropdown";
import { useNavigate, useSearchParams } from "react-router-dom";

const Collection = () => {
  const [category, setCategory] = useState<Categories>({label: 'Category', id: 'default'});
  const [filter, setFilter] = useState<Filters>({label: 'Latest', id: 'latest'});
  const [search, setSearch] = useState<string>('');
  const [params] = useSearchParams();
  const defaultCategory = params.get('category');
  const navigate = useNavigate();

  useEffect(() => {
    if (!defaultCategory) return;
    const selectedCategory = categories.find(c => c.id === defaultCategory);
    if (!selectedCategory) return;
    setCategory(selectedCategory)
  }, [defaultCategory])

  return (
    <div className="size-full w-full flex flex-col items-center">
      <Navigation />
      <div className="px-12 py-28 flex flex-col items-center">
        <h1 className="text-2xl mt-8 font-maharlika text-center">The Collection</h1>
        <p className="my-2 text-base text-center">Want to create something unique? <span onClick={() => navigate('/design-your-own')} className="underline cursor-pointer underline-offset-2">Reach out!</span></p>
        <div className="w-full my-4 bg-white sticky py-4 z-[9000] top-[4rem] border-solid border-b-[1px] border-neutral-200 flex flex-col items-center justify-between">
          <div className="w-full flex flex-row items-center border-solid border-[1px] border-neutral-200 px-2 text-neutral-800">
            <Icon icon={icons.search} className="h-6 w-6" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="outline-none p-2 w-full"/>
          </div>
          <div className="mt-4 w-full flex flex-row items-center justify-between">
            <Dropdown selected={category} onSelect={setCategory} values={categories}/>
            <Dropdown selected={filter} onSelect={setFilter} values={filters}/>
          </div>
        </div>
    
        <Grid className="flex flex-col my-12 overflow-auto" dataset={searchProducts(filterFn(filter.id !== 'default' ? sortingFn(products, filter.id) : products, 'category', category.id), search)} Element={Card} />
      </div>
      <Footer />
    </div>
  )
}

export default Collection