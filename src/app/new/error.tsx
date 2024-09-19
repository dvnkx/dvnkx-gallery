"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message = error.message.includes("Unique")
    ? "There are cannot be several categories with same name. Please enter unique category name. 🆕"
    : "An unexpected error occurred";

  const handleReset = () => {
    reset();
  };
  return (
    <main className="flex flex-col items-center gap-10">
      <h2 className="mt-5 text-2xl text-auburn">{message}</h2>
      <button
        className="p-5 text-lg rounded-md border border-ghost_white hover:bg-light_gray duration-300"
        onClick={handleReset}
      >
        Try again
      </button>
    </main>
  );
}
