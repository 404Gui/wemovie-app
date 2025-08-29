export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#2E2E3D] z-50">
      <div className="w-16 h-16 border-4 border-t-white border-gray-500 rounded-full animate-spin"></div>
    </div>
  );
}
