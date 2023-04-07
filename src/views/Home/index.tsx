import Link from "next/link";
import { API_BASE_URL } from "@/utils";

const getBooksList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};

const Home = async () => {
  const books = await getBooksList();
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {books?.map((item: any) => (
        <Link href={`/bookDetail/${item.id}`} key={item.id}>
          <div className="item">
            <img src="https://picsum.photos/400/300" alt="" />
            <div>
              <h2>{item.name}</h2>
              <p>Type: {item.type}</p>
              <p className="font-bold">
                available: {item.available ? "true" : "false"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Home;
