export default function BusinessInquiryContainer() {
  return (
    <div className="card bg-base-200 rounded-2xl shadow-xl shadow-purple-500/50 lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
      <div className="card-body">
        <h2 className="card-title">Business Inquiry</h2>
        <p>Here is where your business inquiry stuff will go!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Email</button>
        </div>
      </div>
    </div>
  );
}
