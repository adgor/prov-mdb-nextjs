
import { clientPromise } from "../lib/mongodb";

export default function Movies({ movies }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {/* {movies.map((movie) => ( */}
        {/*   <li> */}
        {/*     <h2>{movie.title}</h2> */}
        {/*     <h3>{movie.synopsis}</h3> */}
        {/*     <p>{movie.year}</p> */}
        {/*   </li> */}
        {/* ))} */}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  // const { db } = await connectToDatabase();




  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // const client = await clientPromise
    // const db = client.db("movies")
   console.log(clientPromise)
    //
    // Then you can eZZxecute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands


  // const movies = await db
  //   // .collection("movies")
  //   .find({})
  //   .sort({ metacritic: -1 })
  //   .limit(20)

    return {
      props: { isConnected: true 
      // movies: JSON.parse(JSON.stringify(movies)),
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
