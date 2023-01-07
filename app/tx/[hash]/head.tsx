import DefaultTags from "../../../components/DefaultTags";

export default async function Head({ params }: { params: { hash: string } }) {
  return (
    <>
      <title>{`Ethereum Block Explorer | Transaction: ${params.hash}`}</title>
      <DefaultTags />
      <meta
        name="description"
        content={`Details of Transaction ${params.hash} on Ethereum`}
      />
    </>
  );
}
