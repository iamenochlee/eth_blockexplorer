import DefaultTags from "../components/DefaultTags";

export default function Head() {
  return (
    <>
      <title>Ethereum Block Explorer</title>
      <DefaultTags />
      <meta
        name="description"
        content="explore the world of Ethereum, latest block, details of addresses, transactions..."
      />
    </>
  );
}
