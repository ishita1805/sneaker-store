import Card from "../components/card"
import Grid from "../components/grid"
import Icon from "../components/icon"
import icons from "../components/icon/icons.json"
import products from "../content/products"

const Index = () => {
  return (
    <div className="w-full flex flex-col px-12 py-28 items-center">
        <h1 className="font-maharlika text-2xl">Latest Drops</h1>
        <Grid dataset={products} className="flex flex-col my-12" limit={3} Element={Card} />
        <div className="text-base cursor-pointer font-medium flex flex-row items-center">View All <Icon icon={icons.more_right} className="ml-1 h-5 w-5" /></div>
    </div>
  )
}

export default Index