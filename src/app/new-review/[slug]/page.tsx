import ReviewPage from "./AddReview";

export default async function Page({ params }: { params: { slug: string } }) {
  return <ReviewPage slug={params.slug} />;
}
