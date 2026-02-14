export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-8 h-8 bg-[#f5f2eb] rounded flex items-center justify-center">
          <span className="text-[#0a0a0a] font-bold text-sm">Z</span>
        </div>
      </div>
    </div>
  );
}
