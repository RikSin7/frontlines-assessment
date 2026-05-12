export default function CoursesError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <div className="text-6xl mb-4">Something went wrong</div>
      <div className="text-xl mb-6">Please try refreshing the page</div>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Refresh Page
      </button>
    </div>
  );
}
