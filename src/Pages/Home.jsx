import Card from "../Components/Card";
import data from "../Data/data"

const Home = () => {
  return (
    <section>
      <h2 className="product-heading">All Product</h2>
      <div className="card-container">
        <Card products={data}/>
      </div>
    </section>
  )
}

export default Home