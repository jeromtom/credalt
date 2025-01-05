import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          {/* Placeholder logo - replace with your actual logo */}
          <div className="text-xl font-bold">CredAlt</div>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600 transition-colors">For Freelancers</a>
          <a href="#" className="hover:text-blue-600 transition-colors">For Gig Workers</a>
          <a href="#" className="hover:text-blue-600 transition-colors">For Banks & Credit Agencies</a>
        </div>
      </nav>

      <section className="flex flex-col gap-8 items-center text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Unlocking Creditworthiness with Alternative Data</h2>
        <p className="text-lg mb-2">Traditional credit scoring methods often overlook valuable information. At CredAlt, we leverage machine learning to analyze alternative data sources, providing a more comprehensive view of creditworthiness.</p>
        <ul className="list-disc mb-4 pl-6">
          <li className="mb-2">
            UPI transactions and settlement records
          </li>
          <li className="mb-2">
            Gig Profiles on platforms like Fiverr, Upwork, Uber, Swiggy, Zomato, etc.
          </li>
          <li className="mb-2">
            Social media sentiment
          </li>
          <li className="mb-2">
            Consumer behavior patterns
          </li>
        </ul>
      </section>
    </>
  );
}
