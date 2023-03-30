import { API_BASE_URL } from "@/utils";

const getBookDetail = async (id: number) => {
  const res = await fetch(`${API_BASE_URL}/books/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};

const BookDetail = async ({ params }: { params: { id: number } }) => {
  const bookDetail = await getBookDetail(params.id);
  return (
    <div>
      <h2>{bookDetail?.name}</h2>
      <p>author : {bookDetail?.author}</p>
      <p>isbn : {bookDetail?.isbn ?? "No isbn"}</p>
      <p>price : {bookDetail?.price}</p>
      <p>current-stock : {bookDetail["current-stock"]}</p>
    </div>
  );
};
export default BookDetail;
