export default function MediaKitContainer() {
  return (
    <div className="card bg-base-200 rounded-xl shadow-xl shadow-purple-500/50 lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
      <div className="card-body">
        <h2 className="card-title">Media Kit!</h2>
        <p>Here is the information for your media kit!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Interested?</button>
        </div>
      </div>
    </div>
  );
}
