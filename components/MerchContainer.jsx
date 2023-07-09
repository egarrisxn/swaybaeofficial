export default function MerchContainer() {
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
      <div className="card-body">
        <h2 className="card-title">Merch!</h2>
        <p>Here is the space for merch stuff!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Buy!</button>
        </div>
      </div>
    </div>
  );
}
