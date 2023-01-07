import DefaultTags from "../../../components/DefaultTags";

export default function Head({ params }: { params: { address: string } }) {
  return (
    <>
      <title>{`Ethereum Block Explorer | Address: ${params.address}`}</title>
      <DefaultTags />
      <meta
        name="description"
        content={`Details of Address ${params.address} on Ethereum`}
      />
    </>
  );
}
