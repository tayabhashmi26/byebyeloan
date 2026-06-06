import Link from 'next/link';

export default function NOCNotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">NOC Not Found</h1>
        <p className="text-gray-500 mb-6">
          This verification link is invalid or the NOC has been revoked.
          Please contact ByeBye Loan to verify.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#006633] hover:bg-[#004d26] text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Go to ByeBye Loan
        </Link>
      </div>
    </div>
  );
}
