/* eslint-disable @typescript-eslint/no-explicit-any */
 
const Index = ({
  dataset,
  className,
  limit,
  Element,
}: {
  dataset: any[],
  className?:string,
  limit?: number,
  Element: (props: any) => JSX.Element,
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${className}`}>
        {dataset.map((el, i) => {
            if(limit && i+1 > limit) return null;
            return <Element {...el} />
        })}
    </div>
  )
}

export default Index;
