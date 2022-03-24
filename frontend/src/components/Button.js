export default function Button({ title = "Click me", ...props }) {
  return (
    <div className="mt-12">
      <button
        className="bg-blue-500 rounded-md text-white block w-48 py-2  text-xl focus:ring-4 focus:ring-blue-300 transition"
        {...props}
      >
        {title}
      </button>
    </div>
  );
}
