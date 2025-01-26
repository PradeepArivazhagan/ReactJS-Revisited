import useFetch from "./custom-hook/useFetch"

const Home = () => {
  const {products} = useFetch("http://localhost:4000/products")
  return (
    <div>
      <h1>Home: Total Products = {products.length}</h1>
    </div>
  )
}

export default Home