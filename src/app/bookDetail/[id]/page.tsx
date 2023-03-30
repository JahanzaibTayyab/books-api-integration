import BookDetailView from "@/views/BookDetail";
const BookDetail = (props: any) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <BookDetailView {...props} />
    </>
  );
};
export default BookDetail;
