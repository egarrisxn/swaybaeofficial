import MerchContainer from "../../components/MerchContainer";

export default function Merch() {
  return (
    <main>
      <div className="container flex flex-col lg:flex-row justify-evenly">
        <MerchContainer />
        <MerchContainer />
      </div>
    </main>
  );
}
